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

class FlyMonster extends Monster {

    constructor(aaa){
        super(aaa + 1); // 부모 생성자로 넘기고 싶을 때
    }

    // 오버라이딩 (부모의 run을 덮어쓰기)
    run = () => {
        console.log("날아서 도망가자!");
    }
}

class GroundMonster extends Monster{

    constructor(bbb){
        super(bbb);
    }

    // 오버라이딩 (부모의 run을 덮어쓰기)
    run = () => {
        console.log("달려서 도망가자!");
    }
}

const monster = new FlyMonster(20);
monster.attack();
monster.run();
console.log(monster);

const monster2 = new GroundMonster(100);
monster2.attack();
monster2.run();
console.log(monster2);