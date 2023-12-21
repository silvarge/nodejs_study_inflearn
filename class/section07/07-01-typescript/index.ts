// 타입 추론
let aaa = "안녕하세요.";
// aaa = 3;    // .js에서는 오류가 안나는데, .ts에서는 오류남!

// 타입 명시
let bbb:string = "반갑습니다";
// bbb = 10;  // 에러남

// 타입 명시가 필요한 상황
let ccc: number|string = 1000;    // 지금은 숫자지만 나중엔 string도 들어갈 수 있다.
ccc = "1000원";

// 숫자 타입
let ddd: number = 10;
// ddd = "철수";

// boolean 타입
let eee: boolean = true;
eee = false;
// eee = "false";   // true로 작동함

// js에서는 문제를 일으키지 않지만, ts에서는 문제가 되는 부분
// 0, "", NaN, null, undefined => 거짓
// "false" => 참 => 참/거짓을 나눠야 할 때는 위험하다!

// 배열 타입
let fff: number[] = [1, 2, 3, 4];
let ggg: string[] = ["ttt", "aaa", "jjj", "말랑"];
let hhh: (string|number)[] = [1, 2, "ttt", "jjj"];

// 객체 타입
interface IProfile {
    name: string,
    age: number|string,
    school: string,
    hobby?: string  // 필수가 아님!
}

const profile: IProfile = {
    name: "aaa",
    age: 10,
    school: "school"
}
profile.name = "bbb";   
profile.age = "9살";    // number가 아니라 추가 못함.
profile.hobby = "swimming";

// 함수 타입 => 어디서 몇 번이든 호출 가능함으로 type 추론은 할 수 없음(반드시 type 명시 필요)
function add(num1: number, num2: number, unit: string): string {
    // 함수는 파라미터 타입 꼭! 명시해야 함!
    return num1+num2+unit;
}

const result = add(1000, 2000, '원');   // 결과의 리턴 타입도 예측 가능

// 화살표 함수~
const add2 = (num1: number, num2: number, unit: string): string => {
    // 함수는 파라미터 타입 꼭! 명시해야 함!
    return num1+num2+unit;
}

const result2 = add2(1000, 2000, '원');   // 결과의 리턴 타입도 예측 가능

// any 타입 -> 정말 어쩔 수 없을 때 빼고 쓰지 말자
let qqq: any = "철수";
qqq = 123;
qqq = true;