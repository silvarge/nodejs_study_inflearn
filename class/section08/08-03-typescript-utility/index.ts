interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// utility 타입 - 기존에 있던 타입을 가지고 새로운 타입을 만드는 것
// 1. Partial 타입
type aaa = Partial<IProfile>; // 전부 다 ?로 바꾸도록 함

// 2. Required 타입
type bbb = Required<IProfile>; // 전부 다 필수로 바꿈

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">; // name과 age만 골라서 새로운 타입 생성

// 4. Omit 타입
type ddd = Omit<IProfile, "school">; // school 만 빼고 새로운 타입 생성

// 5. Record 타입
type eee = "철수" | "영희" | "훈이"; // Union 타입 (String 보다 더 안전!(범위가 좁음))
let child1: eee = "철수"; // type에 해당되는 내용만 적용 가능 (여기서는 철수, 영희, 훈이만 된다)
// let child2: eee = "맹구"; // type에 해당되는 내용만 적용 가능
let child3: string = "사과"; // 철수, 영희, 훈이, 사과, 바나나 등 다 된다!

type fff = Record<eee, IProfile>; // Record 타입 - 각각의 레코드에 특정 타입을 붙여줌

// 6. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myProfile: ggg = "hobby";

// 7. type vs interface 차이
// interface - 선언 병합 가능 | type - 선언 병합 불가능
interface IProfile {
  candy: number;
}

// 8. 배운 것 응용!
let profile: Partial<IProfile> = {
  candy: 10,
};
