/**
 * Object Intersection
 * 왼쪽 오른쪽 모두 충족
 */
type PrimitiveIntersection = string & number;  // never

type PersonType = {
    name: string;
    age: number;
}

type CompanyType = {
    company: string;
    companyRegistrationNumber: string;
}

type PersonAndCompany = PersonType & CompanyType; // 객체 합치기 아니가 왼쪽 오른쪽 모두 충족!

const jisoo: PersonAndCompany = {
    name: '지수',
    age: 32,
    company: 'YG',
    companyRegistrationNumber: 'xxxyyyyzzzz',
}

type PetType = {
    petName: string;
    petAge: number;
}

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
    // PersonType
    name: '코드팩토리',
    age: 32,

    // CompanyType 이나 PetType 중 하나만 있어도 될듯
    // CompanyType
    company: '주식회사 코드팩토리',
    companyRegistrationNumber: 'xxxyyyzzz',

    // PetType
    petName: '오리',
    petAge: 8,
}