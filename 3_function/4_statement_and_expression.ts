/**
 * Statement and Expression
 */

// statement (문장)
function addTwoNumbers(x: number, y: number) {
    return x + y;
}

// expression (표현식)  :  변수에 할당  = 이 들어가는게 표현식
const addTwoNumbersExp = (x: number, y: number) => {
    return x + y;
}

/**
 * Statement
 */
function add(x: number, y: number): number {
    return x + y;
}

function subtract(x: number, y: number): number {
    return x - y;
}

function multiply(x: number, y: number): number {
    return x * y;
}

function divide(x: number, y: number): number {
    return x / y;
}

/**
 * Expression 
 */
// 함수의 타입화 함수의 시그니쳐를 저장 
// 문장과는 다르게 함수 이름 일일이 안 정해도 됨 타입을 명시 안해도 되고 표현식으로 함수를 타입화해서 한 번만 써서 유용
type CalculationType = (x: number, y: number) => number;

const add2: CalculationType = function (x, y) {
    return x + y;
}

const subtract2: CalculationType = function (x, y) {
    return x - y;
}

const multiply2: CalculationType = function (x, y) {
    return x * y;
}

const divide2: CalculationType = function (x, y) {
    return x / y;
}