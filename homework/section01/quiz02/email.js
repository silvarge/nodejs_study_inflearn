export function checkEmail(email){
    // if(email == "" || email.indexOf("@") == -1){
    if(email == undefined || email.includes("@") === false){
        console.log("에러 발생! 이메일 주소를 제대로 입력해주세요!")
        return false
    }else{
        return true
    }
}