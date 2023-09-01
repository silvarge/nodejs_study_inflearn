// const express = require('express')   // 옛날 방식 => common JS 방식
import express from 'express'          // 요즘 방식 => module 방식

const app = express()

// 상품 구매하기 API
app.post('/products/buy', (req, res)=>{      // get 방식의 api를 만들겠다. 
    // 1. 가진 돈 검증
    // ...

    // 2. 판매 여부 검증
    // ... 

    // 3. 상품 구매
    // if (money && !sold_out){
    //     res.send("상품 구매 완료")
    // }

});

// 상품 환불하기 API
app.post("/products/refund", (req, res)=>{
    // 1. 판매 여부 검증
    // ...

    // 2. 상품 환불
})

app.listen(3000)    // 포트