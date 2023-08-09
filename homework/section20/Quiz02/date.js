function getToday(){
    const today = new Date()

    const year = today.getFullYear()
    const month = today.getMonth()+1
    const day = today.getDate()
    const hour = today.getHours()
    const minute = today.getMinutes()
    const second = today.getSeconds()

    return `오늘은 ${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}입니다.`
}

console.log(getToday())