/**
 * Property Initialization
 */
class Person {
    // 일반적인 필수값 선언법
    name: string;
    // 초기값 제공 선언법
    age: number = 23;


    // optional 값 선언법
    // 생성자에서 선언 안해도 오케
    pet?: string;
    // type of undefined 선언법 
    // 이것도 값 초기화 안 해도 됨
    petAge: number | undefined;

    constructor(name: string, pet?: string) {
        this.name = name;
        this.pet = pet;
    }
}

// 난 무조건 초기화를 할거야
class RouteStack {
    stack!: string[];

    constructor() {
        this.initialize();
    }

    // 해당 함수에서 프로퍼티를 초기화하네
    initialize() {
        this.stack = [];
    }
}

const routeStack = new RouteStack();
console.log(routeStack);