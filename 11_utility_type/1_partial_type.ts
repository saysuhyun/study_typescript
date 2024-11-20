/**
 * Partial Type  1번부터 7번까지 많이 씀 partial - extract
 */
interface Idol {
    name: string;
    age: number;
    groupName: string;
}

const yuJin: Idol = {
    name: '안유진',
    age: 23,
    groupName: '아이브',
}

// 부분적으로 만대로 골라서 쓰고 싶을 때 Partial 쓰고 부분적으로 입력하고 싶은 타입을 넣어주면 됨 Idol 
function updateIdol(original: Idol, updates: Partial<Idol>): Idol {
    return {
        ...original,
        ...updates,
    }
}

console.log(updateIdol(yuJin, {
    age: 27,
    name: '코드팩토리',
    groupName: '주식회사 코드팩토리',
}));