/**
 * Tuple
 */
let iveTopMembers: string[] = ['안유진', '장원영', '레이'];

// 첫번째 숫자 넣어야하고 두번쨰 값은 글자를 넣어야함 아님 에러
// 순서 강제
// 갯수 강제
let numberAndStringTuple: [number, string] = [
    23,
    '코드팩토리',
]

numberAndStringTuple.push('아이유');
console.log(numberAndStringTuple); // [ 23, '코드팩토리', '아이유' ] 왜냐면 런타임시 자바스크립트는 저런거 튜블이 없으니까 가능

// readonly로 읽기만 가능하도록 해서 추가 불가능하게 제한검
let unmodifiableTuple: readonly [number, string] = [
    23,
    '코드팩토리',
]

// unmodifiableTuple.push();

/**
 * Tuple 유추하기
 */
let actresses = ['김고은', '박소담', '전여빈'];

// 프로퍼티에 as const로 캐스팅하면 리드온리로 바뀌고 3개의 값 그리고 해당 순서로만 간읗다록 ! 
let actressesTuple = ['김고은', '박소담', '전여빈'] as const;
const actressesTupleConst = ['김고은', '박소담', '전여빈'] as const;

// 문자열 리스트라고 타입 정의했고 아래건 다 문자열 리스트니까 에러 안남
let stringArray: string[] = [
    ...actressesTuple,
    ...actressesTupleConst,
]

/**
 * Named Tuple
 */

// 튜플은 순서랑 해당 값에 뭘 넣을지가 중요하니까 파라미터 처럼 이름을 지어서 가시성을 좋게함
const namedTuple: [name: string, age: number] = [
    '코드팩토리',
    32,
]

/**
 * Assigning Tuple to Tuple
 * 
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1: [string, string] = ['아이유', '유애나'];
const tuple2: [number, number] = [1, 2];

// boolean에 당여니 문자열 할당 안됨
// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tuple2;

// 숫자 튜플끼리니까 할당 가능
let tuple5: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 */
let ive: [string, string] = [
    '장원영',
    '안유진',
]

let stringArr: string[] = ive;

// 문자열로 구성된 리스트라고 되어 있기 떄문에 문자열 2개라는 튜플로는 할당이 불가
// let ive2: [string, string] = stringArr;

/**
 * Multi Dimesional Tuple
 */

// 문자열,숫자 2개로 이루어진 2차원 배열
const tuple2D: [string, number][] = [
    ['코드팩토리', 32],
    ['아이유', 31],
    ['김고은', 30],
]