import {checkEmail, getWelcomeTemplate, sendTemplateToEmail} from './email.js'

function createUser({name, age, school, email}){
    // 1. 이메일이 정상인지 확인 (1-존재여부, 2-@ 포함여부)
    const isValid = checkEmail(email);
    if(isValid==false) return

    // 2. 가입 환영 템플릿 만들기
    const mytemplate = getWelcomeTemplate({name, age, school, email})

    // 3. 이메일로 보내기
    sendTemplateToEmail(email, mytemplate)
    
}

const name = "철수"
const age = 8
const school = "test"
const email = "a@a.com"
// const createdAt = "2023-07-31"  // 날짜 부분 (당일로 바꿔보기)
// const createdAt = getToday()

createUser({name, age, school, email})