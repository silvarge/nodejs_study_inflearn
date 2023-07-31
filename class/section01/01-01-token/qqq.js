console.log("안녕하세요!!")

function getToken(){
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, 0);
    // 6글자를 기준으로 사라진 자리를 padStart의 두 번째 값으로 채워줌
    console.log(result)
}

getToken()