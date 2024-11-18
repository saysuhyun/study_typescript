/**
 * Overloading
 * https://www.inflearn.com/questions/1120856
 * 웬만하면 쓰지말고 각각 함수 따라 만들어서 쓰자
 */
/**
 * 파라미터를 
 * 1) 하나를 받거나
 * 2) 세개를 받는 함수
 */

// 오버로딩 쓸 때는 아규먼트 제한 걸 때 쓰나보네 
// 아래에서 똑같은 이름의 함수를 아규먼트만 다르게 정의를 때림 이제 1, 3 개 제외하고는 못 쓰도록
// 바디가 없는 시그니처만 정의한 거를 정의해두고 밑에 구현체까지 있는 거로 오버로딩해서 타입 강제가 가능해짐
// 실제 구현체를 보고 강제해야함 예를 들어 구현체가 매개변수 3개인데 2개짜리 오버로딩은 정의 못함 
function stringOrStrings(members: string): string;
function stringOrStrings(member1: string, member2: string, member3: string): string;
// function stringOrStrings(): string;

/**
 * 만약에 하나의 파라미터만 입력받는다면
 * 아이돌 멤버들을 하나의 스트링으로 입력받는다.
 * 예) '안유진, 장원영, 레이'
 * 
 * 만약에 세개의 파라미터를 받는다면
 * 각각 아이돌을 각각의 파라미터의 값으로 입력한다.
 * 예) '안유진', '장원영', '레이'
 */
function stringOrStrings(memberOrMembers: string, member2?: string, member3?: string): string {
    if (member2 && member3) {
        return `아이브: ${memberOrMembers}, ${member2}, ${member3}`;
    } else {
        return `아이브: ${memberOrMembers}`;
    }
}

console.log(stringOrStrings('안유진, 장원영, 레이'));
console.log(stringOrStrings('안유진', '장원영', '레이'));
// console.log(stringOrStrings('안유진', '장원영'));