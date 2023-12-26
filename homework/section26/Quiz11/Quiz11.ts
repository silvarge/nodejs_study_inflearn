// 1)
// const myname:string = "철수"
// const breadCouund:number = 2
// const isAtcive:boolean = false

// const classmates: string[] = ["철수", "영희", "훈이"]
// const candyCounts: number[] = [2, 6, 4]
// // const moneyList: (number|string)[] = [1000, 2000, 3000]
// const moneyList: (number|string)[] = ["1000원", "2000원", "3000원"]
// const isActiveList: (boolean|string)[] = [true, false, "false", "true", false]

// interface IBoard {
//     writer: string,
//     title: string,
//     contents: string
// }

// const createBoardInput: IBoard = {
//     writer: "영희",
//     title: "좋은 날씨 입니다~",
//     contents: "오늘은 특히 더 날씨가 좋네요^^"
// }

// interface IBoard2 {
//     writer: string,
//     title?: string,
//     contents: string
// }

// const updateBoardInput1: IBoard2 = {
//     writer: "영희",
//     title: "좋은 날씨 입니다~",
//     contents: "오늘은 특히 더 날씨가 좋네요^^"
// }

// const updateBoardInput2: IBoard2 = {
//     writer: "훈이",
//     contents: "기존에 작성한 글 내용 일부가 수정됐네요"
// }

// 2)
// 2-1
// 1. DI: Dependency Injection (의존성 주입)
// 2. DI면 싱글톤 패턴? - 맞다!
//      - 싱글톤 패턴이란? 인스턴스가 필요할 때 똑같은 인스턴스를 만들지 않고 기존의 인스턴스를 활용하는 것. '하나'의 인스턴스만 생성하여 사용하는 디자인 패턴
//                        최초로 생성된 이후에 호출된 생성자는 이미 생성한 객체를 반환시키도록 만드는 것.
//      - 의존관계란?       의존 대상 B가 변하면 그것이 A에 영향을 미칠 때
//      - DI(의존성 주입)란?     의존 관계를 외부에서 결정해주는 것. 클래스 간의 결합도를 낮춰 의존성을 줄인다.
//          -- 장점: 리팩토링이 쉬워짐, 객체 간 의존성을 줄이거나 없앨 수 있다, 객체 간 결합도를 낮춰 유연한 코드 작성 가능, 테스트하기 좋은 코드가 됨 등
// 3. IoC: Inversion of Control (제어 반전): 인터페이스를 구현하고, 구현한 객체를 외부에 전달하여 제어를 외부로 넘기는 것. 제어 권한을 자신이 아닌 다른 대상에게 위임.
//         생성자 주입과 같은 DI를 통해 IoC가 가능해짐.
// * DI - A(사람)이 B(피자)를 먹는다 -> B가 변하면 코드를 모두 수정해야 하니 B를 빼서 피자 외 음식도 먹을 수 있도록 A가 필요로 하는 것(B)을 전달.
//      - A가 B를 생성~
//   => 설정자(Setter)/생성자(생성자의 매개변수)를 이용하여 전달 가능
// * IoC - Food를 구현하는 Pizza를 생성하여 Person에게 전달하는 역전된 제어 흐름
// 4. Nest.js에서 IoC 컨테이너가 DI를 해 주고 있는지? 넹
// 5. 넹

// 테스트 용도!
// 테스트 2