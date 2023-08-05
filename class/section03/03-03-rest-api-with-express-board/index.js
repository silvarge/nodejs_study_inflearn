// const express = require('express')            // 옛날 방식 => common JS 방식
import express, { json } from 'express'          // 요즘 방식 => module 방식
import { checkPhone, getToken, sendTokenToSMS } from './phone.js'
// import express from 'express'// export default 이름 그대로 가져오기
// import abcd from 'express'   // export default 이름바꿔서 가져오기
// export default와 export 함께 쓰기 가능

import * as ph from './phone.js'

// 중괄호가 없다 -> 골라서 가져올 수 있음  
// 중괄호가 있다 -> 무조건 기본값으로 갖고오게 됨 (이름도 같을 필요업다..)

const app = express()
app.use(express.json()) // express가 body로 들어오는 json 데이터 해석 가능

// 조회
app.get('/boards', function (req, res) {
    // 1. DB에 접속 후 데이터를 조회 => 데이터를 조회했다고 가정
    const result = [
        {number: 1, writer: "철수", title: "제목", content: "내용"},
        {number: 2, writer: "철수2", title: "제목2", content: "내용2"},
        {number: 3, writer: "철수3", title: "제목3", content: "내용3"}
    ]

    // 2. DB에서 꺼내온 결과를 브라우저에 응답(res) 주기
    res.send(result)
})

// 등록
app.post('/boards', function (req, res) {
    // 1. 브라우저에서 보내준 데이터 확인하기
    console.log(req)
    console.log("=================");
    console.log(req.body)

    // 2. DB에 접속 후, 데이터를 저장 => 데이터를 저장했다고 가정

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

app.listen(3000)    // 포트