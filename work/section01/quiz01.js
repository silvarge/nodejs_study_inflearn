import { checkRRN, setFilteredRRN } from "./rrn.js"
// 주민번호 만들기

function custoomRegistrationNumber(rrn) {
    
    const isValid = checkRRN(rrn)
    if(isValid==false) return

    const filterdRRN = setFilteredRRN(rrn)
    console.log(filterdRRN)
    
}

custoomRegistrationNumber("210510-1010101")
custoomRegistrationNumber("210510-1010101010101")
custoomRegistrationNumber("2105101010101")