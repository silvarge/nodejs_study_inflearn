// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {

  const phoneNum = 
  document.querySelector('#PhoneNumber01').value + 
  document.querySelector('#PhoneNumber02').value +
  document.querySelector('#PhoneNumber03').value;

  fetch('http://localhost:3000/tokens/phone', {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify({
      phone: phoneNum
    })
  }).then(res => console.log(res));

  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  console.log('인증 번호 전송')
}

// 회원 가입 API 요청
const submitSignup = async () => {
  console.log('회원 가입 이메일 전송')
}
