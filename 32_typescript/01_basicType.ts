// typescript basic type

let a: number = 1;
a = 2;
// a = 'hello'; // type error
console.log(a);

let b : string = 'str';
let c : boolean = true;
let d : undefined;
let e : null = null;

// 타입 추론 (암묵적으로)
let aa = 1; // 알아서 number 형으로 잡음
let bb = 'hi' // 알아서 string 형으로 잡음

// 배열
let numArr: number[] = [1, 2, 3, 4, 5];
// numArr = ['a', 'b']; // type error
console.log(numArr);

let strArr: Array<string> = ['apple', 'banana', 'melon'];
console.log(strArr);

// 배열 원소가 여러 타입일 경우
let arr1: (number | boolean | string)[] = [1, true, 'string'];

// boolean, null, number array 가 원소가 될 수 있는 arr2
let arr2: Array<boolean | null | number[]> = [true, false, null, [1,2,3]];

// 어떤 자료형이든 상관 없는 배열
// 가급적 자제하는 것이 좋다
let arr3: any[] = [1, 2, 3, 'wow', true, null];

// object
let obj1 : object = {
    name: 'jihyung',
    grade: 1,
};