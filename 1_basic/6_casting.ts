/**
 * Casting
 * 
 * TS에서 Casting을 하면 JS에서는 적용이 안된다. 
 * ts에만 있는 거니까 
 */
let codefactory = 'code factory';
let testNumber = 3;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase()); number타입에 존재하지 않음

let sampleNumber: any = 5; // any로 타입 하고 5로 넣어주면 toUpperCase가 가능 다만 런타임으로 에러남 왜냐면 number타입이니ㅏㄲ
// console.log(sampleNumber.toUpperCase());
let stringVar = sampleNumber as string; // string으로 타입을 캐스팅한다 치고 string꺼 쓸수 있어보이지만 결국 숫자라서 에러남

console.log(typeof (sampleNumber as string)); // number로 나옴 왜냐면 js로 돌리면 as string이런 거 없으니까 결국 number임

let number = 5;

console.log((number as any).toUpperCase()); // as any라서 다 쓸수 있어보임 다만 js 실행되면 5는 number라서 불가
// as는 좀 더 구체화할 때 쓰는 거다 
// any는 남발하지마라 
// 괜히 에레 안 나오도록 하지말고 적절하게 캐스팅하는게 중요 결국 js에서는 못 쓸 수가 있으니까