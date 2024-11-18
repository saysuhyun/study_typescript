/**
 * Function Type
 * https://www.inflearn.com/questions/1344673
 */
type Mapper = (x: string) => string;

// 타입정의를 함수 형태로 해서 넣어준거 그냥 함수를 타입정의 해서 넣어준 거 같음
const runner = (callback: Mapper) => {
    return ['안유진', '장원영', '레이'].map(
        callback,
    );
}

console.log(runner((x) => `아이브 멤버: ${x}`));

type MultiplyTwoNumbers = (x: number, y: number) => number;

const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => {
    return x + y;
}

/**
 * Interface로 함수 타입 선언하기
 */
interface IMultiplyTwoNumbers {
    // 인터페이스 안에서는 => 가 아니라 :
    (x: number, y: number): number;
}

const multiplyTwoNumbers3: IMultiplyTwoNumbers = (x, y) => {
    // return true;
    return x * y;
}