export function getWelcomeTemplateMessage({email, rrn, phone, favoriteWebsite}){

    const message =
    `
        <html>
            <body>
                <h1>코드캠프님 가입을 환영합니다!</h1>
                <hr>
                <div>이메일: ${email}</div>
                <div>주민번호: ${rrn}</div>
                <div>휴대폰 번호: ${phone}</div>
                <div>내가 좋아하는 사이트: ${favoriteWebsite}</div>
            </body>
        </html>
    `
    return message

}