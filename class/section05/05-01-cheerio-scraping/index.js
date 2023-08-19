import axios from 'axios';
import cheerio from 'cheerio';

const createMessage = async () => {
    // 입력된 메시지: "안녕하세요~ https://www.naver.com 에 방문해 주세요."

    // 1. 입력된 메시지에서 http로 시작하는 문장이 있는지 먼저 찾기 (.find() 등의 알고리즘 사용)
    const url = "https://www.naver.com";

    // 2. 해당 주소를 가지고 스크랩핑하기 (axios.get으로 요청해서 html 코드 받아오기 => 주기적/반복적으로 하게 되면 크롤링이 됨)
    const result = await axios.get(url);
    // console.log(result.data);

    // 3. 스크래핑 결과에서 OG(오픈그래프) 코드를 골라내서 변수에 담기 => cheerio 도움 받기(사용)
    const $ = cheerio.load(result.data);  // 요 작대기는 vscode 에서 판단하는 것, 실행에는 크게 문제 없음!
    $("meta").each((index, el) => {    // each는 cheerio에서 제공해주는 함수, map(el, index) 과 다르게 순서가 바뀌어서 들어온다.
        if($(el).attr("property") && $(el).attr("property").includes("og:")){
            // property 라는 속성이 있고, 그 property의 값이 og:라는 내용을 포함하고 있는지 확인
            const key = $(el).attr("property");  // og:title, og:description, ...
            const value = $(el).attr("content");    // 네이버, 네이버 메인에서 ~
            console.log(key, value);
        }
    });

}

createMessage();