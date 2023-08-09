// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {

  const phoneNum = 
  document.querySelector('#PhoneNumber01').value + 
  document.querySelector('#PhoneNumber02').value +
  document.querySelector('#PhoneNumber03').value;

  // fetch('http://localhost:3000/tokens/phone', {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": 'application/json',
  //   },
  //   body: JSON.stringify({
  //     phone: phoneNum
  //   })
  // }).then(res => console.log(res));

  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  console.log('인증 번호 전송')
}

// 회원 가입 API 요청
const submitSignup = async () => {

  const phoneNum = 
  document.querySelector('#PhoneNumber01').value + 
  document.querySelector('#PhoneNumber02').value +
  document.querySelector('#PhoneNumber03').value;

  const personalNum = 
  document.querySelector('#SignupPersonal').value + "-" +
  document.querySelector('#SignupPersonal02').value
  ;

  fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify({
      name: document.querySelector('#SignupName').value,
      personal: personalNum,
      phone: phoneNum,
      prefer: document.querySelector('#SignupPrefer').value,
      email: document.querySelector('#SignupEmail').value,
      password: document.querySelector('#SignupPwd').value
    })
  }).then(res => console.log(res));

  console.log('회원 가입 이메일 전송')
}
