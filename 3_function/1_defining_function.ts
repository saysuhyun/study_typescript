/**
 * Defining Function
 */

// function printName(name){
//     console.log(name);
// }

// 함수에 아규먼트 타입 정의 해주자!
function printName(name: string) {
    console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
    return `${person1}과 ${person2}는 사귀고 있습니다.`
}

console.log(returnTwoCouples('아이유', '코드팩토리'));
// returnTwoCouples(0, 1);
// returnTwoCouples('아이유');
// returnTwoCouples('아이유', '코드팩토리', '레드벨벳');

/**
 * Optional Parameter
 */
// ? : number | undefined 로 해석 
function mulitplyOrReturn(x: number, y?: number) {
    if (y) {
        return x * y;
    } else {
        return x;
    }
}

console.log(mulitplyOrReturn(10, 20)); //200
console.log(mulitplyOrReturn(10)); // 10

// 기본값을 넣어둠 
function multiplyOrReturn2(x: number, y: number = 20) {
    return x * y;
}

console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

/**
 * 나머지 매개변수
 */
// ... 으로 아규먼트를 여러개 받을 수 있또록 해둠
function getInfiniteParameters(...args: string[]) {
    return args.map((x) => `너무좋아 ${x}`);
}

console.log(getInfiniteParameters('아이유', '아이브', '블랙핑크'))
// console.log(getInfiniteParameters(1, 2, 3))

/**
 * Return Type
 */
function addTwoNumbers(x: number, y: number) {
    return x + y;
}

addTwoNumbers(10, 20);

function randomNumber() {
    return Math.random() > 0.5 ?
        10 : '랜덤';
}

randomNumber();

// () : 반환타입  -> 여기서 함수의 반환타입을 지정
function subtractTwoNumbers(x: number, y: number): number {
    // return '이게 반환이 되나?';
    return x - y;
}

const subtracTwoNumbersArrow = (x: number, y: number): number => {
    return x - y;
}

/**
 * 특수 반환 타입
 * 
 * void / never
 */
function doNotReturn(): void {
    console.log('저는 반환을 하지 않습니다.');
}

doNotReturn();

// 반환타입이 never인 경우는 반환이 되는 상태가 아니어야함 무한순환 혹은 에러 던져서 리턴값이 반환 안 되는 경우
function neverEndingLoop(): never {
    while (true) {

    }
}

function throwErro2(): never {
    throw Error();
}