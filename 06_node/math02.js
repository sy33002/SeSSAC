const add = (a,b) => a+b;
const minus = (a,b) => a-b;
const multiply = (a,b) => a*b;
const division = (a,b) => a/b;
const PI = 3.141592;
const E = 2.718;

//case1. 객체로 감싸서 내보내기
// module.exports = {
//     add,
//     minus,
//     multiply,
//     division,
// };

//키와 벨류가 동일할 때 생략 가능한 버전
module.exports = {
    add,
    PI,
    E,
};

// //case2. 하나씩 내보내기
// module.exports.add = add;
// module.exports.minus = minus;
// module.exports.multiply = multiply;
// module.exports.division = division;

// //case2를 더 간단하게
// exports.add = add;
// exports.minus = minus;
// exports.multiply = multiply;
// exports.division = division;