/**
 * Types
 */
let helloText: string = 'Hello'; // 변수 선언시 타입을 강제 String 이외의 값은 못 넣음
// helloText = true;

/**
 * JS에 존재하는 타입
 * 7개의 타입
 * 타입은 소문자임! 
 */
const stringVar: string = 'String';
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(999999); // 자바스크립트가 2016이면 에러 나니까 tsconfig.json으로 가서 2020으로 변경
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력 할 수 있는 치트키같은 타입
// 이건 그렇게 남발해서 쓰지말자. 
let anyVar: any;
anyVar = 100;
anyVar = '코드팩토리';
anyVar = true;

// 타입이 강제되어 있지만 any값 자체가 뭐든 될 수 있으니까 저장이 가능
let testNumber: number = anyVar;
let testString: string = anyVar;
let testBolean: boolean = anyVar;

// unknown - 알 수 없는타입
// unknown은 아예 뭔지 모르니까 선언은 되도 다른 타입에 할당은 못함
let unknownType: unknown;
unknownType = 100;
unknownType = '코드팩토리';
unknownType = true;

// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBolean2: boolean = unknownType;
let unkonwType2: unknown = unknownType;
let anyType2: any = unknownType;

// never - 어떠한 값도 저장되거나 반환되지 않을때 사용하는 타입
// 어떤 타입도 안 되니까 그냥 못 쓰나본데?

// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = 'test';

/**
 * 리스트 타입
 * 해당 타입만 리스트의 원소로 사용
 */
const koreanGirlGroup: string[] = ['아이브', '레드벨벳', '블랙핑크'];
const booleanList: boolean[] = [true, false, false, true];

// 타입스크립트로 작성한 후 빌드하면 위의 코드가 자바스크립트로 변경되어서 기동되나보네