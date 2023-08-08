import { getToday } from "./utils.js"
// 회원가입 버튼 누르면 User를 생성 -> API 이름: createUser
// 인자 -> 이름, 나이, 학교, 이메일, 가입일
// 검증(@ 존재 여부, 데이터 존재 여부) -> 가입 환영 템플릿 생성 -> 이메일에 템플릿 전송(log 찍기)

export function checkEmail(email){
    // if(email == "" || email.indexOf("@") == -1){
    if(email == undefined || email.includes("@") === false){
        console.log("에러 발생! 이메일 주소를 제대로 입력해주세요!")
        return false
    }else{
        return true
    }
}

export function getWelcomeTemplate({name, age, school, email}){
    const mytemplate =
    `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!</h1>
                <hr>
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>이메일: ${email}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>
    `
    return mytemplate
}

export function sendTemplateToEmail(myemail, result){
    console.log(myemail + " 이메일로 가입환영 템플릿 " + result + "를 전송합니다.")
}