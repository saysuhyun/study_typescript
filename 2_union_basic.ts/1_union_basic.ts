/**
 * Union Basics
 * 
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법중 하나이다.
 */

// string , boolean 둘다 병용해서 쓰기 가능
type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '아이브';
stringOrBooleanType = true;

// stringOrBooleanType = undefined;

type StrBoolNullType = string | boolean | null;

// Enum같네 
type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

// 타입을 stateType으로 정의하면 3개중 하나로만 변경 가능 
let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL'; // 이건 타입 안 되어 있으니 못 씀

/**
 * 리스트의 유니언
 */
// string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = [
    '아이유',
    '김고은',
    '박소담',
]

strListOrBooleanList = [
    true,
    false,
    false,
    true,
]

// 문자열 리스트 혹은 boolean 리스트 중 하나지 병합해서 는 못쓴다
// strListOrBooleanList = [
//     true,
//     '아이유',
// ]

// 이런식으로 써야 병용 가능
type StrOrNumberList = (string | number)[];

let stringOrNumberList = [
    1, 2, 3,
    '아이유',
    '레드벨벳',
];

stringOrNumberList = [
    1, 2, 3
]

stringOrNumberList = [
    '아이유', '레드벨벳',
]

// stringOrNumberList = [
//     true,
//     false,
// ]

/**
 * Interface로 사용하는 union
 */
interface Animal {
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

// 동물 또는 사람 타입 정의  이 형태로 정의하는 것이 더 에러파악하기도 쉬움
type AnimalOrHuman = Animal | Human;

// 휴먼타입으로 추론함 왜냐 주소가 있으니까
let animalOrHuman: AnimalOrHuman = {
    name: '최지호',
    age: 32,
    address: '대한민국',
}

console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
console.log(animalOrHuman.address);

// 동물타입으로 추론 왜냐 address가 없으니까
animalOrHuman = {
    name: '오리',
    age: 9,
}

console.log(animalOrHuman);

console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// console.log(animalOrHuman.address); // as Human으로 강제 캐스팅을 할 수 는 있는데 에러나겠지 캐스팅 위험성!

// 선언 라인을 유니온써서 병용가능하도록 정의함
let animalOrHuman2: {
    name: string;
    age: number;
} | {
    name: string;
    age: number;
    address: string;
} = {
    name: '최지호',
    age: 32,
    address: '대한민국',
};

console.log(animalOrHuman2.address);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

// 값을 변경 
animalOrHuman2 = {
    name: '오리',
    age: 9,
};

// address가 보면 
// console.log(animalOrHuman2.address);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가
type Person = {
    name: string;
    age: number;
}

type Cat = {
    breed: string;
    country: string;
}

type PersonOrCat = Person | Cat;

// 타입 추론을 할수가 없음 관계 없는게 하나씩 들어있으니까
const personOrCat: PersonOrCat = {
    // name: '코드팩토리',
    age: 32,
    // breed: 'Yorkshire Terrier',
    country: '영국',
}

// 유니온은 집합의 개념중 합집합이다! || 모두 사용가능 다만 조합이 중요 