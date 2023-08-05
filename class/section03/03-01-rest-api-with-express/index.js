// const express = require('express')   // 옛날 방식 => common JS 방식
import express from 'express'          // 요즘 방식 => module 방식

const app = express()

app.get('/qqq', function (req, res) {      // get 방식의 api를 만들겠다. 
    // 미들웨어 함수
    res.send('Hello World') // 응답으로 Hello world를 보내줄 것이다.
})

app.listen(3000)    // 포트