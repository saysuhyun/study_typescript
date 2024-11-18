/**
 * Type Inference
 * 
 * 타입 추론
 */

// 강제 안해도 알아서 타입 추론해주네 
let stringType = 'string';
let booleanType = true;
let numberType = 30;

booleanType = false;

// booleanType = 'false';

// 타입이 const string 타입으로 되어 있음 즉 다른 값은 못 넣음 근데 const 자체가 변경이 안 됨
const constStringType = 'const string';
const constBooleanType = true; // true 값이 들어가야하는 타입 

//const 는 타입 강제가 더 까다롭다. 설정된 거 외에 변경은 불가

let yuJin = {
    name: '안유진',
    age: 2003
}

// 해당 const로 객체 지정해도 타입은 String , number임 객체 자체만 그렇고 변수는 참조니까 다를듯 
const yuJin2 = {
    name: '안유진',
    age: 2003
};

yuJin2.name = '코드팩토리';
console.log(yuJin2);

const yuJin3 = {
    // 아싸리 as const로 변수 자체에 제한 걸어버리면 타입이 안유진 됨
    name: '안유진' as const,
    age: 2003 as const,
}

// yuJin3.name = '코드팩토리'; 에러남
console.log(yuJin3.name);
console.log(yuJin2.name);

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];

// 타입이 number | string 이네 
// 유니온
// 타입 다중으로 넣어도 되네
let numbersAndString = [1, 2, 3, '4', '5', '6'];

// numbers.push('6'); 이미 초기화가 number 배열이라서 문자열 불가
const number = numbers[0];
const nos = numbersAndString[0]; // nos는 타입 추론이 sting | number임 
const nos2 = numbersAndString[100];

// tuple
// as const로 강제 캐시팅 때려버림 이러면 컴파일할 때부터 이미 길이 2개이고 변경불가라고 딱 나옴
// 또 const라 변경이 불가
const twoNumbers = [1, 3] as const;

// twoNumbers[0] = 10;
// twoNumbers.push(100);
const first = twoNumbers[0];
//const first2 = twoNumbers[3]; 길이가 2인데 3넣으니까 바로 컴파일에러뜸