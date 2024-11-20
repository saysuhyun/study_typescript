/**
 * Generic in Promise
 */
const afterTwoSeconds = function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        }, 2000)
    })
}

const runner = async function () {
    const res = await afterTwoSeconds(); // unknown
    console.log(res);
}

runner();

const afterOneSecond = function (): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        }, 1000)
    })
}

// 비동기 반환시 promise 재너릭 반환 타입 정의하면 추론 가능
const runner2 = async function () {
    const res = await afterOneSecond(); // string 
    console.log(res);
}

runner2();

const runner3 = async function () {
    return 'string return';
}