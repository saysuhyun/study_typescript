/**
 * Type and Interface
 */

/**
 * Type
 * 
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 * 새롭게 타입 지정해주는 거 같은데? 복잡한 타입할 때 유용하다고 함
 */
type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = 'male' | 'female';

// moduleDetection을 force로 해서 중복된 이름 파일이 다른 쪽에 있어도 문제 없도록 : tscoinfig.json
const stringVar: NewStringType = 'test';

// 오브젝트도 타입으로 선언 가능
type IdolType = {
    name: string;
    // 필수값은 아니니까 ? 사용 
    year?: number;
}

// : 다음에는 타입인데 타입이 IdolType이라는 뜻 
const yuJin: IdolType = {
    name: '안유진',
    // year: 2002,
}

/**
 * Interface
 * 
 * 인터페이스와 타입은 겹치는 기능이 많음 타입이 못하는 기능을 보완함 
 */

// 인터페이스는 = 없이 바로 괄호 쓰네 
interface IdolInterface {
    name: string;
    year: number;
}

const yuJin2: IdolInterface = {
    name: '안유진',
    year: 2002,
}

interface IdolIT {
    // 위에서 지정한 새 타입을 넣어도 문제가 없음
    name: NewStringType;
    year: NewNumberType;
}

const yuJin3: IdolIT = {
    name: '안유진',
    year: 2002,
};

// ? 로 정의한 경우 해도되고 안해도 오케
interface IdolOptional {
    name: string;
    year?: number;
}

const yuJin4: IdolOptional = {
    name: '안유진',
    // year: 2002,
}