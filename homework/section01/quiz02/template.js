import { checkRRN, setFilteredRRN } from '../quiz01/rrn.js';
import { checkEmail } from './email.js';
import { getWelcomeTemplateMessage } from './message.js';
// 이메일, 주민번호, 휴대폰 번호, 내가 좋아하는 사이트

function createUser({email, rrn, phone, favoriteWebsite}){

    const isEmailValid = checkEmail(email)
    const isRRNValid = checkRRN(rrn)
    if(isEmailValid==false || isRRNValid==false) return

    rrn = setFilteredRRN(rrn)

    const message = getWelcomeTemplateMessage({email, rrn, phone, favoriteWebsite})

    console.log(message)

}

const email = "aaa@aaa.com"
const rrn = "123456-1234567"
const phone = "01022223333"
const favoriteWebsite = "apple.com"

createUser({email, rrn, phone, favoriteWebsite})
