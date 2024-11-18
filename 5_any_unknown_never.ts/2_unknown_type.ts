/**
 * Unknown Type
 */
let anyValue: any;

anyValue = 24;
anyValue = '아이유';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

// unknown은 에러는 일단 안남;; 
// 어떤 값이든 입력은 가능 
// 다만 any나 unknown 외에 다른 값에 할당을 할 수가 없음 ;; any타입은 다른 타입 할당 가능
let unknownValue: unknown;

unknownValue = 24;
unknownValue = '아이유';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue;
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;

// any타입은 실제 동작은 안되어도 컴파일 에러는 안남;
anyValue.toUpperCase();
anyValue.name;
new anyValue();

// unknown은 알지 못하는 타입이라 저렇게 쓰지 못 함 컴파일에러 남
// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

// 이왕 쓸 거면 any 말고 unknown? 쓰자
function isString(target: unknown): target is string {
    return typeof target === 'string';
}

let testVal: unknown;

if (isString(testVal)) {
    testVal;
}

/**
 * Union Type 
 * 보통 unknown 반환인데 any가 우선순위가 더 크다
 */
type uOrString = unknown | string; //unknown
type uOrBoolean = unknown | boolean; // unknown
type uOrNumber = unknown | number; // unknown
type uOrAny = unknown | any; // any
type anyOrU = any | unknown; // any

/**
 * Intersection Type
 */
type uAndString = unknown & string;  // string 
type uAndBoolean = unknown & boolean; // booealn 
type uAndNumber = unknown & number; // number 
type uAndAny = unknown & any; // any
type anyAndU = any & unknown; // any

/**
 * Operator 사용
 */
let number1: unknown = 10; // unknown
let number2: unknown = 20; // unknown

// number1 + number2;
// number1 - number2;
// number1 * number2;
// number1 / number2;

number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;