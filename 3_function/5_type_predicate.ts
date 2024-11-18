/**
 * Type Predicate
 */

// 타입을 구별 

// 무엇이든 입력 받는 any 
// input is number : 왜 쓰냐 ..?  any타입으로 지정했지만 true인 경우 타입추론을 number로 해줌
function isNumber(input: any): input is number {
    return typeof input === 'number';
}

console.log(isNumber(10));

// 리턴타입이 boolean이라서 참이라고 해도 결국 number는 any타입
function isNumberRetBool(input: any): boolean {
    return typeof input === 'number';
}

let number: any = 5;

if (isNumberRetBool(number)) {
    number; // any 
}

if (isNumber(number)) {
    number; // number
}

interface Doge {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogeOrCat = Doge | Cat;

// 참이면 아규먼트가 Doge 
function isDoge(animal: DogeOrCat): animal is Doge {

    // Doge로 캐스팅 as 
    return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat = Math.random() > 0.5 ? {
    name: '도지',
    age: 32,
} : {
    name: '오리',
    breed: '코리안 길냥이'
}

if (isDoge(doge)) {
    doge;
} else {
    doge;
}