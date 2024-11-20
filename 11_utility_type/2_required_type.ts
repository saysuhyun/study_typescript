/**
 * Required Type
 */
interface Dog {
    name: string;
    age?: number;
    country?: string;
}

// 옵셔널도 무조건 받을 수 있도록 설정 Required
const requiredDog: Required<Dog> = {
    name: '모찌',
    age: 7,
    country: '한국'
}