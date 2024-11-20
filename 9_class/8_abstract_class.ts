/**
 * Abstract class
 */
abstract class ModelWithId {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

// const modelWithId = new ModelWithId(123);

class Product extends ModelWithId {

}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod {
    abstract shout(name: string): string;
}
// 추상클래스와 추상메서드 구현해주기
class Person extends ModelWithAbstractMethod {
    shout(name: string): string {
        return '소리질러~';
    }
}