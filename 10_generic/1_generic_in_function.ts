/**
 * Generic 함수에서 사용하기
 */

function whatValue(value: any) {
    return value;
}

const value = whatValue('test');

// <T> T라는 타입 받을건데 아규먼트랑 리턴값에 사용 가능
function genericWhatValue<T>(value: T): T {
    return value;
}

// 재너릭타입 변경 가능
const genericResult1 = genericWhatValue<number>(123);

let genericResult2 = genericWhatValue('123')

// 타입을 아무거나 넣어도 되도록 설정해두네 
function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
    return {
        x,
        y,
        z,
    }
}

const multipleGenericResult = multipleGenerics<number, boolean, string>(
    123,
    true,
    '123',
);

const multipleGenericResult2 = multipleGenerics(
    123,
    true,
    '123',
);

function getTuple<X, Y>(val1: X, val2: Y) {
    return [val1, val2] as const;
}

const tuple = getTuple(true, 100);

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand: string;
    codeName: string;

    constructor(brand: string, codeName: string) {
        this.brand = brand;
        this.codeName = codeName;
    }
}

// new 붙는 거는 생성자이고 해당 생성자 실행하면 {} 가 나올거다 
// 어떤 객체든 받는 생성자를 타입으로 만들기 위해서 ->  new(...args: any[]): {} 이게 T타입이다 (T extends) 
function instantiator<T extends { new(...args: any[]): {} }>(constructor: T,
    ...args: any[]) {
    return new constructor(...args);
}

console.log(instantiator(Idol, '아이유', 23));
console.log(instantiator(Car, 'BMW', 1111));