/**
 * Class 선언하기
 */
class SampleClass { }

class Game {
    name: string;
    country: string;
    download: number;

    // 컨스트럭트에서 초기화
    constructor(name: string, country: string, download: number) {
        this.name = name;
        this.country = country;
        this.download = download;
    }

    introduce() {
        return `${this.name}은 ${this.country}에서 제작된 ${this.download}개의 다운로드를 달성한 게임입니다.`;
    }
}

// 클래스 초기화 바로 때려버림 
const starcraft = new Game(
    'Star Craft',
    'USA',
    10000000,
);

const retVal = starcraft.introduce();

// starcraft.changeGame();