/**
 * Type vs Interface
 */

// Object 선언할때
interface IObject {
    x: number;
    y: number;
}

type TObject = {
    x: number;
    y: number;
}

// function을 선언할때

// 인터페이스는 : 
interface IFunction {
    (x: number, y: number): number;
}

// 타입은 = 
type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만
 * interface에서는 할 수 없는것들 인터페이스는 객체형식으로 선언하기 때문에 안 됨
 */

// (1) primitive 타입 선언하기
type Name = string;

// (2) union 타입 선언하기
type UnionType = string | number;

// (3) primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];

/**
 * Interface는 할 수 있고
 * Type은 못하는 것
 */

// interface merging

// 인터페이스 중복 선언 시 중첩시켜서 사용이 가능해진다
interface IRectangle {
    height: number;
}

interface IRectangle {
    width: number;
}

// 이름 같은 인터페이스를 합쳐서 사용 가능
let rectangle: IRectangle = {
    height: 200,
    width: 100,
}

// type TRectangle = {
//     height: number;
// }

// type TRectangle = {
//     width: number;
// }

/**
 * Interface Merging
 */
class Review {
    // 프로퍼티 : 인스턴스에 귀속
    getY = (x: number) => { return x };

    // 메서드 : 프로토에 귀속
    getX(x: number) {
        return x;
    }
}

interface GetXnY {
    getX: (x: number) => number;
    getY: (y: number) => number;
}

interface GetXnY {
    getX: (x: number) => number;
    // 완전히 똑같은 시그니쳐일 경우만 가능해짐 프로퍼티는 오버로딩이 안 됨 
    // getY: (y: string) => number;
}

interface GetXnY2 {
    getX(x: number): number;
    getY(y: number): number;
}

interface GetXnY2 {
    getX(x: number): number;
    // 함수니까 오버로딩 가능
    getY(y: string): number;
}

const testMethod: GetXnY2 = {
    getX(x) {
        return x;
    },
    getY(y) { // y는 오버로딩 되서 string | number
        return 1; // y는 문자열일 가능성이 있으니 return을 number로 시킴
    }
}