/**
 * Key Value Mapping
 */

enum State {
    loading,
    done,
    error,
}

type GlobalApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
    getPosts: State;
}

type UserApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
}

type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser'];
    paginateUsers: GlobalApiStatus['paginateUsers'];
    banUser: GlobalApiStatus['banUser'];
}

// 위에도 귀찮아서 더 짧게 정의  
// in으로 해서 키값으로 가지고 싶은 값을 유니온 처리하고 해당 키값을 globalApiStatus에 이동해서 정의 됨
// 키값들이 k안에 들어간 다음 globalApiStatus에도 들어가서 자동 정의됨
type UserApiStatus3 = {
    [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k];
    // getUser: 
    // paginateUsers:
    // banUser:
}

// Pick<대상타입 , 넣을 키값> 추가
type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'paginateUsers'>;

// Omit<대상타입 , 뺄 값> 제외 
type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;

//---------------

/**
 * keyof
 * 키값들을 뽑아냄
 */
type AllKeys = keyof GlobalApiStatus; // 해당 타입의 키값을 뽑아낸건가

const key: AllKeys = 'getUser';

type KeyOfUserApiStatus = {
    [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}

// Exclude 키 중 뺄 거 넣어주기
type KeyOfUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
}

type KeyOfUserApiStatus3 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
}

interface LoadingStatus {
    type: 'loading';
    data: string[];
}

interface ErrorStatus {
    type: 'error';
    message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus['type'];