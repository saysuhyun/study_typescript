/**
 * Class에서 Generic 사용하기
 */
// Data, Message는 재너릭으로 선언한거네 클래스 정의도 안 되어 있음
class Pagination<Data, Message> {
    data: Data[] = [];
    message?: Message;
    lastFetchedAt?: Date;
}

const pgData = new Pagination<number, string>();
pgData.data;
pgData.message;
pgData.lastFetchedAt;

class Pagination2<Data, Message> {
    data: Data[] = [];
    message?: Message;
    lastFetchedAt?: Date;

    constructor(data: Data[], message?: Message, lastFetchedAt?: Date) {
        this.data = data;
        this.message = message;
        this.lastFetchedAt = lastFetchedAt;
    }
}

// 디폴트 재너릭을 만들어줌 
const pagination2 = new Pagination2<number, string>([123, 456]);

pagination2.data;
pagination2.message;
pagination2.lastFetchedAt;

class DefaultGeneric<T = boolean> {
    data: T[] = [];
}

const defaultGeneric = new DefaultGeneric();
defaultGeneric.data;