// 회원가입 버튼 누르면 User를 생성 -> API 이름: createUser
// 인자 -> 이름, 나이, 학교, 이메일, 가입일
// 검증(@ 존재 여부, 데이터 존재 여부) -> 가입 환영 템플릿 생성 -> 이메일에 템플릿 전송(log 찍기)

function checkEmail(email){
    // if(email == "" || email.indexOf("@") == -1){
    if(email == undefined || email.includes("@") === false){
        console.log("에러 발생! 이메일 주소를 제대로 입력해주세요!")
        return false
    }else{
        return true
    }
}

function getWelcomeTemplate({name, age, school, email, createdAt}){
    const mytemplate =
    `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!</h1>
                <hr>
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>학교: ${email}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `
    return mytemplate
}

function sendTemplateToEmail(myemail, result){
    console.log(myemail + " 이메일로 가입환영 템플릿 " + result + "를 전송합니다.")
}

function createUser({name, age, school, email, createdAt}){
    // 1. 이메일이 정상인지 확인 (1-존재여부, 2-@ 포함여부)
    const isValid = checkEmail(email);
    if(isValid==false) return

    // 2. 가입 환영 템플릿 만들기
    const mytemplate = getWelcomeTemplate({name, age, school, email, createdAt})

    // 3. 이메일로 보내기
    sendTemplateToEmail(email, mytemplate)
    
}

function getToday(){
    const date = new Date()
    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()
}

const name = "철수"
const age = 8
const school = "다람쥐초등학교"
const email = "a@a.com"
// const createdAt = "2023-07-31"  // 날짜 부분 (당일로 바꿔보기)
const createdAt = getToday()

createUser({name, age, school, email, createdAt})