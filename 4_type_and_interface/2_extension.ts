/**
 * Extension 상속
 */

interface IName {
    name: string;
}

interface IIdol extends IName {
    age: number;
}

const idol: IIdol = {
    name: '안유진',
    age: 23,
}

type TName = {
    name: string;
}

// & 이거 쓰네
type TIdol = TName & {
    age: number
};

const idol2: TIdol = {
    name: '아이유',
    age: 29,
}

// 인터페이스에 타입 상속도 가능
interface IIdol2 extends TName {
    age: number;
}

const idol3: IIdol2 = {
    name: '제니',
    age: 29,
}

// 타입에 Interface 상속가능
type TIdol2 = IName & {
    age: number;
}

const idol4: TIdol2 = {
    name: '지수',
    age: 31,
}

/**
 * extending multiple
 */

// 다중 상속 가능 
type DogName = {
    name: string;
}

type DogAge = {
    age: number;
}

type DogBreed = {
    breed: string;
}

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
    name: '코드팩토리',
    age: 32,
    breed: 'Poodl',
}

interface CatName {
    name: string;
}
interface CatAge {
    age: number;
}
interface Cat extends CatName, CatAge {
    breed: string;
}

const cat: Cat = {
    name: '오리',
    age: 7,
    breed: '코리안 냥냥이',
}

/**
 * Overrding
 */
type THeight = {
    height: number;
}

// 오버라이딩으로 height의 타입을 변경해봄
type TRectangle = THeight & {
    height: string;
    width: number;
}

// heiht가 neber로 나옴 충돌이 생김 number & string이 될 수 없음 intersaction
// const rectangle: TRectangle = {
//     height:,
//     width: 100,
// }

type TWidth = {
    width: number | string;
}
type TRectangle2 = TWidth & {
    width: number;
    height: number;
}
// number | string 에서 오버라이딩으로 number로 해서 number로 됨
const rectangle: TRectangle2 = {
    height: 100,
    width: 200,
}

interface IHeight {
    height: number;
}

// interface IRectangle extends IHeight{
//     height: string;
//     width: number;
// }

interface IWidth {
    width: number | string;
}

interface IRectangle extends IWidth {
    width: number; // 상속받아서 가는 경우에 따라선 더 좁아지거나 같도록 범위를 좁히면 됨
    height: number;
}

// 타입은 never타입이 나와도 상속이 가능하도록은 해줌
// interface는 never타입이 나오면 에러가 바로 나옴