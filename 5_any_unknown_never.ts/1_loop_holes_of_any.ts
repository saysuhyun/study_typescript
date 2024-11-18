/**
 * Loopholes of Any
 */
let number: number;
number = 10;

// number.toUpperCase(); 

// any 남발하면 에러를 야기함 이건 또 실행해야 아니까 더 문제 ..
// (number as any).toUpperCase();

const multiplyTwo = (x: number, y: number) => {
    return x * y;
}

let args1: any = '코드팩토리';
let args2: any = true;

// 실행하면 에러날듯 
multiplyTwo(args1, args2);
// multiplyTwo('코드팩토리', true);

// 오브젝트도 any로 캐스팅하면 좋지 않음
let iu: any = { name: '아이유', age: 30 };
iu;

const callbackRunner = (x: number, y: number, callback: any) => {
    // 파라미터 2개로 정의했는데 any라서 에러가 안남..
    return callback(x);
}

const callback = (x: number, y: number) => {
    return x * y; // NAN으로 남 5 * undeifned가 되니까 
}

console.log(callbackRunner(5, 4, callback));

// any를 쓰면 변경이 이루어졌을 때 해당 변경이 문제가 되는지 아닌지 모름 ;; 
// 그래서 any를 좀;; 하지말자  위험요소가 큼;;