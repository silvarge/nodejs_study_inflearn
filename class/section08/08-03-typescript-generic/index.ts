// string, number, boolean - primitive type
// 1. 문자/숫자/불린 기본 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  // 함수에 넣는 매개변수는 타입 추론이 되지 않음 -> 따라서 어떤 타입이 들어가야 하는지 정의해 줌
  return [arg3, arg2, arg1];
};

const result = getPrimitive("철수", 123, true);

// 2. any 타입 - 그냥 자바 스크립트와 같음
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 100); // any는 아무거나 다 됨!
  return [arg3, arg2, arg1];
};

const resultAny = getAny("철수", 123, true);

// 3. unknown 타입
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 + 100); // 특정 기준에 충족하는지 확인 후 작성 가능! (any 보다는 조금 더 안전함)
  // console.log(arg1 + 100); // 특정 기준에 충족하는지 확인 후 작성 가능! (any 보다는 조금 더 안전함)
  return [arg3, arg2, arg1];
};

const resultUnknown = getUnknown("철수", 123, true);

// 4. generic 타입 - 제공자 입장에서 any 보다 더 안전하게 사용할 수 있도록 하기 위함
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  // 내 맘대로 넣을 수 있지만, 한 번 타입이 들어가게 되면 그 타입으로 정해지게 됨
  // 안전하면서 사용 범위가 넓은 타입
  return [arg3, arg2, arg1];
}

const resultGeneric = getGeneric<string, number, boolean>("철수", 123, true); // 명시하는 부분을 빼면 any와 비슷하다잉
const resultGeneric1_1 = getGeneric("철수", "123", true); // 명시하는 부분을 빼면 any와 비슷하다잉
// const resultGeneric2 = getGeneric<string, string, boolean>("철수", 123, true);

// 4. generic 타입 - 2
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const resultGeneric2 = getGeneric2("철수", 123, true);

// 4. generic 타입 - 3
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const resultGeneric3 = getGeneric3("철수", 123, true);

// 4. generic 타입 - 4 - 화살표 함수 형태
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const resultGeneric4 = getGeneric4("철수", 123, true);
