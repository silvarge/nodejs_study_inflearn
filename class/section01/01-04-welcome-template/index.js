function getWelcomeTemplate({name, age, school, createdAt}) {
    const mytemplate =
    `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!</h1>
                <hr>
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `

    console.log(mytemplate)
}

const name = "철수"
const age = 12
const school = "티라노초등학교"
const createdAt = "2020-10-10"

getWelcomeTemplate({name, age, createdAt})

// 문제가 많은 코드, 인자가 하나라도 없으면 문제가 발생함.
// 인자/매개변수 부분에 중괄호를 넣으면 좋은 코드가 된다! (순서 바뀌지 않음)