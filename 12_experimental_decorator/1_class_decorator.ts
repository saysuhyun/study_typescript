/**
 * Class Decorator
 */
@Test // 함수 Test 클래스에다가 데코레이션하면 함수 아규먼트로 사용 가능
@Frozen // Frozen함수랑 동일한 이름 
@LogTest('PROD') // 데코레이터 사용할 때 함수를 넘겨주고 싶을 떄
@ChangeClass
class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

function Test(constructor: Function) {
    console.log(constructor);
}
// 이 생성자는 위의 Idol 이 들어오게 됨
function Frozen(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

const yuJin = new Idol('안유진', 23);

console.log(Object.isFrozen(Object.getPrototypeOf(yuJin)));

// decorator factory 
// [env] 가 위의 데코레이션에 정의한 값 : PROD
function LogTest(env: string) {
    return function (constructor: Function) {
        console.log(`[${env}] ${constructor}가 실행됐습니다.`);
    }
}

console.log('-----------------------');

const wonYoung = new Idol('장원영', 22);
console.log(wonYoung);

function ChangeClass<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        groupName = '아이브';

        constructor(...params: any[]) {
            super(...params);

            console.log('constructor instantiated');
        }
    }
}