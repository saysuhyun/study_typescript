/**
 * Narrowing
 * 
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는걸 의미한다.
 */


// let numberOrString: number | string = 'Code Factory';
// numberOrString; .. string에 값을 넣어버리니까 string에 다 가깝다고 유추해버림

// const decimal = 12.3278;
// console.log(decimal.toFixed(2));

// 타입이 number가 아니라서 에러남... 값을 할당함으로서 논리적으로 문자열쪽으로 타입추론을 해버림 숫자가 아니라
// numberOrString.toFixed();

/**
 * Narrowing 종류
 * 
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator narrowing
 * 6) instanceof narrowing
 * 7) discrimated union narrowing (차별된 유니언 내로잉)
 * 8) exhaustiveness checking
 */

// (1) Assignment Narrowing
// 특정 값을 할당해서 내로잉 
// 값을 문자열 넣어주니까 numOrStringd은 문자열로 추론해버림
let numbOrString: number | string = '아이유';

numbOrString.toString();

// (2) typeof narrowing
// 함수 값에 따라서 타입이 바뀜  지금은 string | number인데 typeof로 범위 좁힘
numbOrString = Math.random() > 0.5 ? 1123 : '아이유';

// typeof로 범위를 좁힌다음 추론
if (typeof numbOrString === 'string') {
    numbOrString;
} else {
    numbOrString;
}

// (3) Truthiness Narrowing
// 조건문으로 범위를 좁힌다음 추론 
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['아이유', '레드벨벳'];

if (nullOrString) {
    nullOrString; //sting [] 
} else {
    nullOrString; // null
}

// (4) Equality Narrowing
// === 으로 범위 좁힘 여기선 typeof narrowing도 같이 쓰나봄
let numbOrString2: number | string = Math.random() > 0.5 ?
    1123 : '아이유';
let stringOrBool2: string | boolean = Math.random() > 0.5 ?
    '아이브' : true;

// 이게 같은 경우는 문자열뿐이니까 문자열로 유추
if (numbOrString2 === stringOrBool2) {
    numbOrString2;
    stringOrBool2;
} else {
    numbOrString2;
    stringOrBool2;
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ?
    1123 : Math.random() > 0.5 ? '안유진' : null;

if (typeof numberOrStringOrNull === 'number') {
    numberOrStringOrNull;
} else {
    numberOrStringOrNull;
}

// (5) in operator narrowing
// in연산자 사용해서 키값 있나 없나 체크
interface Human {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    type: string;
}

let human: Human = {
    name: '안유진',
    age: 23,
}

let dog: Dog = {
    name: '오리',
    type: 'Yorkshire Terrier',
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ?
    human : dog;

// 존재하는 키값의 여부를 in으로 체크해서 범위를 좁힘 in 연산자 사용 
if ('type' in humanOrDog) {
    humanOrDog;
} else {
    humanOrDog;
}

// (6) instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ?
    new Date() : '코드팩토리';

if (dateOrString instanceof Date) {
    dateOrString;
} else {
    dateOrString;
}

// (7) Discriminated Union Narrowing

// 이렇게 쓰지말자 
interface Animal {
    type: 'dog' | 'human';
    height?: number;
    // 강아지의 종
    breed?: string;
}

let animal: Animal = Math.random() > 0.5 ?
    {
        type: 'human',
        height: 177,
    } : {
        type: 'dog',
        breed: 'Yorkshire Terrier',
    };

if (animal.type === 'human') {
    animal.height; // number | undefined 
} else {
    animal.breed;
    animal.height;
}

// 이렇게 쓰자
// 인터페이스를 제대로 나눈 다음 쓰자!
interface Human2 {
    type: 'human';
    height: number;
}

interface Dog2 {
    type: 'dog',
    breed: string;
}

interface Fish2 {
    type: 'fish';
    length: number;
}

// 나눠서 설정한 후 유니온으로 묶는게 타입 추론이 더 쉽다
type HumanOrDog2 = Human2 | Dog2 | Fish2;

let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ?
    {
        type: 'human',
        height: 177,
    } : Math.random() > 0.5 ? {
        type: 'dog',
        breed: 'Yorkshire Terrier',
    } : {
        type: 'fish',
        length: 12,
    };

if (humanOrDog2.type === 'human') {
    humanOrDog2;
} else {
    humanOrDog2;
}

// (8) Exhuastiveness Checking
// switch문으로 타입 추론 
switch (humanOrDog2.type) {
    case 'human':
        humanOrDog2;
        break;
    case 'dog':
        humanOrDog2;
        break;
    case 'fish':
        humanOrDog2;
        break;
    default:
        humanOrDog2; // never 타입
        // nenver는 위에서 거르고 골랐을 때 타입이 안 나올때 never임\
        // 밑에서 never인지 아닌지 파악하기 위해 !! 밑에 추가 알람 같은 기능
        const _check: never = humanOrDog2;
        break;
}