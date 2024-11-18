/**
 * Spread Operator
 * ...
 */
const onlyString = ['1', '2', '3', '4'];
const onlyNumbers = [1, 2, 3, 4];

const arr1 = [
    ...onlyString,
];

// (string | number)  []
const arr2 = [
    ...onlyString,
    ...onlyNumbers,
]