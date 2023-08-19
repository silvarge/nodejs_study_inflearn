// 휴대폰 인증 토큰 전송API를 요청해주세요.
const getValidationNumber = async () => {
  const phoneNum = 
  document.querySelector('#PhoneNumber01').value + 
  document.querySelector('#PhoneNumber02').value +
  document.querySelector('#PhoneNumber03').value;

  fetch('http://localhost:4000/tokens/phone', {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify({
      phone: phoneNum
    })
  }).then(res => console.log(res));

  document.querySelector("#ValidationInputWrapper").style.display = "flex";

  console.log("인증 번호 전송");
};

// 핸드폰 인증 완료 API를 요청해주세요.
const submitToken = async () => {

  const token = document.querySelector("#TokenInput").value;

  const phoneNum = 
  document.querySelector('#PhoneNumber01').value + 
  document.querySelector('#PhoneNumber02').value +
  document.querySelector('#PhoneNumber03').value;

  fetch('http://localhost:4000/tokens/phone', {
    method: "PATCH",
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify({
      phone: phoneNum,
      token: token
    })
  }).then(res => console.log(res));

  console.log("핸드폰 인증 완료");
};

// 회원 가입 API를 요청해주세요.
const submitSignup = async () => {
  const phoneNum = 
  document.querySelector('#PhoneNumber01').value + 
  document.querySelector('#PhoneNumber02').value +
  document.querySelector('#PhoneNumber03').value;

  const personalNum = 
  document.querySelector('#SignupPersonal1').value + "-" +
  document.querySelector('#SignupPersonal2').value
  ;

  fetch('http://localhost:4000/users', {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify({
      name: document.querySelector('#SignupName').value,
      email: document.querySelector('#SignupEmail').value,
      personal: personalNum,
      prefer: document.querySelector('#SignupPrefer').value,
      phone: phoneNum,
      pwd: document.querySelector('#SignupPwd').value
    })
  }).then(res => console.log(res));

  console.log("회원 가입 완료");
};
