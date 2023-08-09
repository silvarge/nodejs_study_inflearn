export function checkRRN(rrn){
    // const regex = /^\d{6}-\d{7}$/;  // 정규표현식
    const splitRRN = rrn.split("-")

    if(splitRRN.length != 2){
        console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!")
        return false
    }else if(splitRRN[0].length != 6 || splitRRN[1].length != 7){
        console.log("에러 발생!!! 형식이 올바르지 않습니다!!!")
        return false
    }
    return true
}

export function setFilteredRRN(rrn){
    return rrn.substr(0, 8) + "******"
}