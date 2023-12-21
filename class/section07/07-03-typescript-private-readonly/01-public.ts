// // public, private, protected, readonly

// class Monster2 {

//     // power                       => public, private, protected, readonly 중 1개라도 있으면 생략 가능

//     constructor(public power: any){  // 생성자
//         // this.power = power;  // => public, private, protected, readonly 중 1개라도 있으면 생략 가능
//     }

//     // public : 모두 가능
//     // private : 나 자신만 됨, 상속도 안됨
//     // protected : 나 + 상속된 것만 가능, 밖은 불가능
//     // readonly : 바꾸는 것만 안됨. 읽기는 어디서든 가능
//     // private readonly : 나는 읽을 수만 있고, 밖에서는 조회도 안되고 접근도 안되고 읽기도 안됨

//     attack1 = ()=>{
//         console.log("공격하자!");
//         console.log("내 공격력은 " + this.power + "야!");   // 안에서 접근 가능
//         this.power = 111;   // 안에서 수정 가능
//     }
// }

// class FlyMonster2 extends Monster2 {

//     attack2 = ()=>{
//         console.log("공격하자!222");
//         console.log("내 공격력은 " + this.power + "야!");   // 자식이 접근 가능
//         this.power = 111;   // 자식이 수정 가능
//     }
// }


// const monster22 = new FlyMonster2(20);
// monster22.attack1();
// monster22.attack2();
// console.log(monster22.power);    // 밖에서 접근 가능
// monster22.power = 10;         // 밖에서 수정 가능