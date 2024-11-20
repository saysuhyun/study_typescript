/**
 * Class as Type and Value
 * 인터페이스나 타입 선언 없이 클래스 선언만으로도 타입 유추를 가능 타입 : Dog
 */
class Dog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    bark() {
        return `${this.name}가 짖습니다`;
    }
}

let ori = new Dog('오리');
console.log(ori.bark());

// ori = '오리';

// 객체로는 변경이 가능하다  클래스는 결국 객체  객체로 표현해서 변경하면 됨
ori = {
    name: '별이',
    bark() {
        return `${this.name}가 짖습니다.`;
    }
}

console.log(ori);