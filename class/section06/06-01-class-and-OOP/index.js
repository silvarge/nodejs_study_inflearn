// class Date{

//     qqq = 3;

//     getFullYear(){

//     }

//     getMonth(){

//     }
// }

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth()+1);

class Monster {
    power = 10

    constructor(qqq){  // 생성자
        this.power = qqq
    }

    attack = ()=>{
        console.log("공격하자!");
        console.log("내 공격력은 " + this.power + "야!");
    }

    run = ()=>{
        console.log("도망가자!");
    }
}

const monster = new Monster(20);
monster.attack();
monster.run();
console.log(monster);

const monster2 = new Monster(100);
monster2.attack();
monster2.run();
console.log(monster2);