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
import { User } from './models/user.model.js'

import { checkRRN, setFilteredRRN } from './rrn.js';
import { createScrap } from './scraping.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

// 회원 목록 조회 API 
app.get('/users', async function (req, res) {
    
    const result = await User.find().exec();
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

    }else{
        const token = new Token({
            token: mytoken,
            phone: phone,
            isAuth: false
        })

        await token.save();
    }
    
    sendTokenToSMS(phone, mytoken)

    res.send("핸드폰으로 인증 문자가 전송되었습니다!")
})

// 인증 완료 API
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

// 회원 가입 API
app.post('/users', async function(req, res){
    const {name, personal, phone, prefer, email, pwd} = req.body;

    // 1. 이메일, 주민번호, 핸드폰 번호 입력이 정상인지 확인.
    const isValid = checkEmail(email) || checkRRN(personal) || checkPhone(phone);
    if(isValid==false) return;

    const filteredPersonal = setFilteredRRN(personal);
    const scrap = await createScrap(prefer);

    const user = new User({
        name: name,
        email: email,
        personal: filteredPersonal,
        prefer: prefer,
        phone: phone,
        pwd: pwd,
        og: scrap
    })

    await user.save();

    // 2. 가입 환영 템플릿 만들기
    const mytemplate = getWelcomeTemplate({name, phone, prefer, email});

    // 3. 이메일로 보내기
    sendTemplateToEmail(email, mytemplate);

    res.send(user._id);
})

mongoose.set("debug", true);

mongoose.connect("mongodb://my-database:27017/test")
    .then(() => console.log("db 접속에 성공하셨습니다."))
    .catch(() => console.log("db 접속에 실패하셨습니다."))

app.listen(4000);