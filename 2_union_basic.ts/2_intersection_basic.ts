/**
 * Intersection
 * 
 * And &
 * 유니온이랑 다름 
 */
interface Human {
    name: string;
    age: number;
}

interface Contacts {
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;

// 사람이랑 연락처 전부 다 가지고 있어야함 
let humanAndContacts: HumanAndContacts = {
    name: '코드팩토리',
    age: 32,
    phone: '01012341234',
    address: '서울시'
};

// 이건 존재할 수 없는 상황임 ! : never  . primitive를 intersection 해버리면 never임
type NumberAndString = number & string;

// let numberAndString: NumberAndString = never;