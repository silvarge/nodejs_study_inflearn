class 공중부품 {
    run = () => {
        console.log("날아서 도망가자!");
    }
}

class 지상부품 {
    run = () => {
        console.log("뛰어서 도망가자!");
    }
}

class Monster {
    power = 10;
    부품;

    constructor(qqq){  // 생성자
        this.부품 = qqq
    }

    attack = ()=>{
        console.log("공격하자!");
        console.log("내 공격력은 " + this.power + "야!");
    }

    run = ()=>{
        this.부품.run();
    }
}

const aaa = new 공중부품()
aaa.run();

const monster = new Monster(aaa);
monster.attack();
monster.run();
console.log(monster.부품);

const monster2 = new Monster(new 지상부품());
monster2.attack();
monster2.run();
console.log(monster2.부품);