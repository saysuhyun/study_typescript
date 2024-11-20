/**
 * Exclude Type
 */

// 끝에 제외할 String 넣으면 되나보네 
type NoString = Exclude<string | boolean | number, string>;

// 함수 제외해서 NoFunction은 String 타입
type NoFunction = Exclude<string | (() => void), Function>;