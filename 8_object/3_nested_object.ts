/**
 * Nested Object
 */

// 이렇게 정의하지말고 TPerson 처럼 타입 정의해라
type NestedPerson = {
    identity: {
        name: string;
        age: number;
    },
    nationality: string;
}

const codefactory: NestedPerson = {
    identity: {
        name: '코드팩토리',
        age: 32,
    },
    nationality: '한국인',
}
////-----

// 여러개 타입으로 나눠서 정의하는 편이 에러 관리 편하다
type TPerson = {
    identity: TPersonIdentity,
    nationality: string;
}

type TPersonIdentity = {
    name: string;
    age: number;
}

const iu: TPerson = {
    identity: {
        name: '아이유',
        age: 32,
    },
    nationality: '한국인',
}

// 
interface IPerson {
    identity: IPersonIdentity;
    nationality: string;
}

interface IPersonIdentity {
    name: string;
    age: number;
}

const yuJin: IPerson = {
    identity: {
        name: '안유진',
        age: 22,
    },
    nationality: '한국인',
}