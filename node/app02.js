
// 구조 분해 전 코드
//math02.js에서 math모듈 객체 자체를 불러옴
// const math = require('./math02');//.js라는 확장자는 생략
// // console.log(math);
// // math는 객체상태이므로 .이나 []로 불러올 수 있음
// console.log(math.add(1, 2)); 
// console.log(math.minus(7, 3));
// console.log(math.multiply(3, 2));
// console.log(math.division(5, 2));


// -----------------------------------------------------------
// 구조 분해 후 코드

// math2 모듈 불러오기
// const math2 = require('./math2');
// const math2 = {
//     add: add,
//     PI: PI,
//     E: E,
//   };
const { add, PI, E } = require('./math02');

// console.log(math2, typeof math2);
// // { add: [Function: add], PI: 3.141592, E: 2.718 } object
// console.log(math2.PI); // 3.141592
// console.log(math2.E); // 2.718
// console.log(math2.add(2, 4)); // 2 + 4 = 6

console.log(PI);
console.log(E);
console.log(add(2, 4));