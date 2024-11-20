/**
 * Generic in Inheritance
 */
class BaseCache<T> {
    data: T[] = [];
}

class StringCache extends BaseCache<string> { }

const stringCache = new StringCache();
stringCache.data;

class GenericChild<T, Message> extends BaseCache<T> {
    message?: Message;

    constructor(message?: Message) {
        super();
        this.message = message;
    }
}

const genericChild = new GenericChild<string, string>('error');
genericChild.data;
genericChild.message;

/**
 * 제너릭의 inheritance
 */
interface BaseGeneric {
    name: string;
}

class Idol<T extends BaseGeneric> {
    information: T;

    constructor(information: T) {
        this.information = information;
    }
}

// 재너릭으로 강제 .. 무조건 name은 있어야함 왜냐면 상속받은 재너릭 BaseGeneric이 네임이 있으니까
const yuJin = new Idol({
    name: '안유진',
    // age: 23,
});

/**
 * keyof 함께 사용하기
 */
const testObj = {
    a: 1,
    b: 2,
    c: 3,
}

// K 는 extends로 구조를 강제할건데 O라는 객체의 키들의 집합으로 강제할거다
function objectParser<O, K extends keyof O>(obj: O, key: K) {
    return obj[key];
}

const val = objectParser(testObj, 'c');

/**
 * Ternary
 * 1=== 2 ? true : false
 */
class Idol2 {
    type?: string;
}

class FemaleIdol extends Idol2 {
    type: 'Female Idol' = 'Female Idol';
}

class MaleIdol extends Idol2 {
    type: 'Male Idol' = 'Male Idol';
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ?
    MaleIdol : FemaleIdol;

const idol2: SpecificIdol<MaleIdol> = new MaleIdol();