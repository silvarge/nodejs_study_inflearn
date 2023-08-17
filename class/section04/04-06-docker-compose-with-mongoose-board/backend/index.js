// const express = require('express')            // 옛날 방식 => common JS 방식
import express, { json } from 'express';          // 요즘 방식 => module 방식
import { checkPhone, getToken, sendTokenToSMS } from './phone.js'
import { checkEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js'

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import {options} from './swagger/config.js';
import cors from 'cors';

import mongoose from 'mongoose';

import 'dotenv/config'
import { Board } from './models/board.model.js';

const app = express()
app.use(express.json()) // express가 body로 들어오는 json 데이터 해석 가능
app.use(cors())         // cors 허용해준다는 뜻
// use -> 모든 곳에서 작동함
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

// 조회
app.get('/boards', async function (req, res, next) {
    // 1. DB에 접속 후 데이터를 조회 => 데이터를 조회했다고 가정
    const result = await Board.find();  // 기다려 줄 필요성이 있음

    // 2. DB에서 꺼내온 결과를 브라우저에 응답(res) 주기
    res.send(result)
})

// 등록
app.post('/boards', async function (req, res) {
    // 1. 브라우저에서 보내준 데이터 확인하기
    console.log(req)
    console.log("=================");
    console.log(req.body)

    // 2. DB에 접속 후, 데이터를 저장
    const board = new Board({
        writer: req.body.writer,
        title: req.body.title,
        content: req.body.content
    });

    await board.save();     // 저장까지 기다릴 필요가 있음.

    // 3. DB에 저장한 결과를 브라우저에 응답(res)으로 줌
    res.send("게시물 등록에 성공하였습니다.")

})

app.post('/tokens/phone', function (req, res) {

    const phone = req.body.phone
    const isValid = checkPhone(phone)
    if(isValid==false) return

    const mytoken = getToken()
    
    sendTokenToSMS(phone, mytoken)

    res.send("인증 완료!")
})

app.get('/', function (req, res) {      // get 방식의 api를 만들겠다. 
    // 미들웨어 함수
    res.send('시작 화면') // 응답으로 Hello world를 보내줄 것이다.
})

// RESTful
app.post('/users', function (req, res) {

    const {name, age, school, email} = req.body;     // 구조분해할당
    // 1. 이메일이 정상인지 확인 (1-존재여부, 2-@ 포함여부)
    const isValid = checkEmail(email);
    if(isValid==false) return;

    // 2. 가입 환영 템플릿 만들기
    const mytemplate = getWelcomeTemplate({name, age, school, email});

    // 3. 이메일로 보내기
    sendTemplateToEmail(email, mytemplate);

    res.send("가입 완료!");
})

mongoose.connect("mongodb://my-database:27017/mydocker")  // 없으면 자동으로 만들어짐.
    .then(() => console.log("db 접속에 성공하셨습니다."))
    .catch(() => console.log("db 접속에 실패하였습니다."))

app.listen(4000)    // 포트