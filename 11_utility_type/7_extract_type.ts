type stringOnly = Extract<string | boolean | number, string>;

// 함수만 추출 
type functionOnly = Extract<string | (() => void), Function>;