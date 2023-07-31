// 안 좋은 예
// function createTokenOfPhone(phoneNum) { //매개변수 (parameter)
//     // 1. 휴대폰번호 자릿수 맞는지 확인하기 (10~11자리)
//     if(phoneNum.length >= 10 && phoneNum.length <= 11){
//         // 2. 핸드폰 토큰 생성 (6자리)
//         const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//         // 3. 핸드폰 번호에 토큰 전송하기
//         console.log(phoneNum + "번호로 인증번호 " + result + "를 전송합니다.")

//     }else{
//         console.log("에러 발생! 핸드폰 번호를 제대로 입력해주세요");
//     }
// }

// 좋은 예
function createTokenOfPhone(phoneNum) { //매개변수 (parameter)
    // 1. 휴대폰번호 자릿수 맞는지 확인하기 (10~11자리)
    // 에러인 경우만 찾아서 에러 띄우기, 일찍 종료시키기 (early-exit 패턴)
    if(phoneNum.length < 10 || phoneNum.length > 11){   
        console.log("에러 발생! 핸드폰 번호를 제대로 입력해주세요")
        return
    }

    // 2. 핸드폰 토큰 생성 (6자리)
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(result)
    // 3. 핸드폰 번호에 토큰 전송하기
    console.log(phoneNum + "번호로 인증번호 " + result + "를 전송합니다.")

}

createTokenOfPhone("01012345678")   // 인자 (argument)