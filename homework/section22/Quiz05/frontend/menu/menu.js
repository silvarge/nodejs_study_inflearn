// 커피 목록 조회 API를 요청해주세요.
const getCoffee = () => {
  console.log('index.js 파일의 openMenu 함수 안에서 getCoffee가 실행 됨')
  // 1. 백엔드 서버로 /starbucks API 요청해 커피 데이터를 받는다.
  
  // fetch 사용
  fetch('http://localhost:3000/starbucks')  // /starbucks 에 api 요청 (get은 parameter 없음)
  .then(res => res.json())  // api 불러오면 res 값을 json으로 변경
  .then(  // 그 중에서 json 값을 뽑아넴
    data => {
      // 2. 받은 데이터로 createMenuCard 함수를 이용해 메뉴 카드를 모두 만들어주세요.
      data.forEach(element => { // json 으로 된 데이터 배열 받아오기에 반복문 돌림
        createMenuCard(element)
      });
    }
    );
}

const createMenuCard = (data) => {
  const menuCardWrapper = document.createElement('div')
  menuCardWrapper.className = 'Menu_Card_Wrapper'

  const menuCardImgBox = document.createElement('div')
  menuCardImgBox.className = 'Menu_Card_ImgBox'

  const menuCardName = document.createElement('div')
  menuCardName.className = 'Menu_Card_Name'
  menuCardName.textContent = data?.name || '메뉴이름'

  const menuCardInfo = document.createElement('div')
  menuCardInfo.className = 'Menu_Card_Info'
  menuCardInfo.textContent = data?.kcal || '칼로리'

  const menuWrapper = document.querySelector('#Menu_Background')
  menuCardWrapper.appendChild(menuCardImgBox)
  menuCardWrapper.appendChild(menuCardName)
  menuCardWrapper.appendChild(menuCardInfo)
  menuWrapper.appendChild(menuCardWrapper)
}
