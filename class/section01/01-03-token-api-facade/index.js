function checkPhone(myphone){
    if(myphone.length < 10 || myphone.length > 11){   
        console.log("에러 발생! 핸드폰 번호를 제대로 입력해주세요")
        return false
    }else{
        return true
    }
}

function getToken(){
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(result)
    return result
}

function sendTokenToSMS(myphone, mytoken){
    console.log(myphone + "번호로 인증번호 " + mytoken + "를 전송합니다.")
}

function createTokenOfPhone(myphone) {
    // 단순한 것은 함수 자체가 주석의 의미가 되어야 함 - 복잡한 기능에 대해서는 반드시 주석 달기
    const isValid = checkPhone(myphone)    // ex) isValid, hasProduct -> boolean type, 변수명으로 예측 가능
    if(isValid==false) return

    const mytoken = getToken()
    
    sendTokenToSMS(myphone, mytoken)
}

// ---

createTokenOfPhone("01012345678")