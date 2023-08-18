import express from 'express';
import { checkPhone, getToken, sendTokenToSMS } from './phone.js';
import { checkEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js';

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import {options} from './swagger/config.js';
import cors from 'cors';

import 'dotenv/config.js'
import mongoose from 'mongoose';
import { Token } from './models/token.model.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get('/users', function (req, res) {
    const result = [
        {email: 'aaa@gmail.com', name: '철수', phone: '010-1234-5678', personal: '220110-2222222', prefer: 'https://naver.com'},
        {email: 'bbb@gmail.com', name: '철수2', phone: '010-2345-6789', personal: '220110-3333333', prefer: 'https://daum.net'},
        {email: 'ccc@gmail.com', name: '철수3', phone: '010-3456-7890', personal: '220110-4444444', prefer: 'https://google.com'},
        {email: 'ddd@gmail.com', name: '철수4', phone: '010-1234-7890', personal: '220110-5555555', prefer: 'https://instagram.com'},
        {email: 'eee@gmail.com', name: '철수5', phone: '010-2345-7890', personal: '220110-6666666', prefer: 'https://twitter.com'}
    ];

    res.send(result);
})

app.get('/starbucks', function (req, res){
    const coffee = [
        {name: '아이스 카페 아메리카노', kcal: 10},
        {name: '아이스 스타벅스 돌체 라떼', kcal: 230},
        {name: '아이스 카페 라떼', kcal: 110},
        {name: '아이스 카푸치노', kcal: 115},
        {name: '씨솔트 카라멜 콜드 브루', kcal: 170},
        {name: '돌체 콜드 브루', kcal: 265},
        {name: '바닐라 크림 콜드 브루', kcal: 125},
        {name: '콜드 브루', kcal: 5},
        {name: '카페 아메리카노', kcal: 5},
        {name: '카페 라떼', kcal: 110},
        {name: '바닐라 스타벅스 더블 샷', kcal: 125}
    ];

    res.send(coffee);
})

// 휴대폰 인증 토큰 발급 API
app.post('/tokens/phone', async function (req, res) {

    const phone = req.body.phone
    const isValid = checkPhone(phone)
    if(isValid==false) return

    const mytoken = getToken()

    const isExist = await Token.exists({phone: phone});
    console.log("isExist", isExist);

    if(isExist){
        const token = await Token.findOneAndUpdate(
            {phone: phone},
            {token: mytoken, isAuth: false},
            {new: true}
            );

        console.log("update", token);

    }else{
        const token = new Token({
            token: mytoken,
            phone: phone,
            isAuth: false
        })

        await token.save();

        console.log("create", token);
    }
    

    // sendTokenToSMS(phone, mytoken)

    res.send("인증 완료!")
})

app.patch('/tokens/phone', async function (req, res) {
    const phone = req.body.phone;
    const send_token = req.body.token;

    const isExist = await Token.exists({phone: phone});
    console.log("PATCH");

    if(isExist){
        const token = await Token.findOne({phone: phone}).exec();
        if(token.token != send_token){
            console.log(token.token);
            console.log(send_token);
            res.send("false");
        }else{
            const result = await Token.findOneAndUpdate(
                {phone: phone},
                {isAuth: true},
                {new: true}
            );
            console.log(result);
            res.send("true");
        }
    }else{
        res.send("false");
    }

})

app.post('/users', function(req, res){
    const {name, personal, phone, prefer, email, password} = req.body;

    // 1. 이메일이 정상인지 확인 (1-존재여부, 2-@ 포함여부)
    const isValid = checkEmail(email);
    if(isValid==false) return;

    // 2. 가입 환영 템플릿 만들기
    const mytemplate = getWelcomeTemplate({name, phone, prefer, email});

    // 3. 이메일로 보내기
    sendTemplateToEmail(email, mytemplate);

    res.send("가입 완료!");
})

mongoose.set("debug", true);

mongoose.connect("mongodb://my-database:27017/test")
    .then(() => console.log("db 접속에 성공하셨습니다."))
    .catch(() => console.log("db 접속에 실패하셨습니다."))

app.listen(4000);