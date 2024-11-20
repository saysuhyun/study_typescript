/**
 * Non Nullable type
 */
// 해당 유니온으로 한 거 중에 null이 될 수 있느 ㄴ것들 제외 : null , undefined
type NonNull = NonNullable<string | number | boolean | null | undefined | object>;