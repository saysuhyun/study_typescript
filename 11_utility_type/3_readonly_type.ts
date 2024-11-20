/**
 * Readonly Type
 */
interface Cat {
    name: string;
    age: number;
}

const nyaong: Cat = {
    name: '냐옹이',
    age: 8
};

nyaong.name = '코드팩토리';

// 해당 프로퍼티를 읽을수만 있도록
const bori: Readonly<Cat> = {
    name: '보리',
    age: 7,
}

// bori.name = '아이유';

Object.freeze(bori);