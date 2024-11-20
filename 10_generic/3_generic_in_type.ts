/**
 * Generic in Type
 */
type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = '코드팩토리';
// const genericString2: GenericSimpleType = '코드팩토리';

interface DoneState<T> {
    data: T[];
}

interface LoadingState {
    requestedAt: Date;
}

interface ErrorState {
    error: string;
}

// 지정 안 한 경우 기본값이 number 
type State<T = number> = DoneState<T> | LoadingState | ErrorState;

// 따로 지정하면 제너릭으로 string도 가능
let state: State<string> = {
    data: ['123', '456'],
}

state = {
    requestedAt: new Date()
}

state = { error: 'error' };

let state2: State = {
    data: [123, 456]
}