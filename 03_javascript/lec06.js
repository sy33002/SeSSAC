// 문자열 관련 내장 메서드

let str1='Strawberry Moon';
let str2='    Strawberry Moon    ';

console.log(str1.length);
console.log(str1.split(' '));
console.log(str2.length);
console.log(str2.split(' '));

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

console.log(str2.trim().length);
console.log(str2.trim().indexOf(' '));
console.log(str2.trim().indexOf('.')); //없는 문자열 검색: -1 반환

console.log(str2.trim().slice(0,5).toUpperCase());
console.log(str1.replaceAll('r','x'));
str1 = str1.repeat(4);
console.log(str1);

// 배열 관련 method
let arr1 = [1,2,3,4,5];
let arr2 = ['quokka', 'rabbit','puppy', 'hamster'];

arr1[5] = 6; //배열에 값 추가
arr1[8] = 8; //배열에 빈칸넣고 값 추가
console.log(arr1);

arr1.push(10); //끝에 요소 추가
arr1.push(11);
console.log(arr1);

arr1.pop(); //끝에 요소 제거
arr1.shift(); //맨 앞의 요소 제거

console.log(arr2.includes('quokka'));
console.log(arr2.reverse()); 

console.log(arr2.join(''));
console.log(arr2.join('+'));

// 메서드 체이닝
let word = 'hello';
console.log(word.replace(word[word.indexOf('e')], 'x'));


///////////////////////////////////////////////////////////////
// 배열에서 반복문 사용하기!
// - 기본 for 문
// - for of ans
// - forEach()매서드
const arr3 = [1,2,5,6,7];
const alphabets = ['a', 'b', 'c', 'd']

for (let a = 0; a < arr3.length; a++){
    console.log(arr3[a]);
}

for (let alpha of alphabets){
    console.log(alpha);
}

alphabets.forEach(function(alpha){
    //alpha: currentValue를 의미, 반복하고 있는 현재 요소
    console.log(alpha);
})

alphabets.forEach(function(alpha, idx, arr){
    // alpha: currentValue를 의미, 반복하고 있는 현재 요소
    // idx: currentValue의 인덱스(위치)
    // arr: forEach를 호출한 배열
    console.log(alpha, idx, arr);
})
console.log('////////////예시/////////////')
let numbers = [1,2,3,4,5,6];
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
for (let i = 0; i<numbers.length;i++){
    console.log(numbers[i]);
    sum1 += numbers[i]
}

for (let num of numbers){
    sum2 += num;
    console.log(sum2);
}

numbers.forEach((num) =>{
    sum3 += num;
    console.log(sum3)
})

// map,filter, find 메서드
// map(): 배열 내 모든 원소에 대해 연산(익명함수)한 결과를 모아
// "새로운 배열"로 반환한다.
// const arr4 = [1,2,3,4,5];
// let arr4_map = arr4.map(function (e){
//     return e*2;
// })
// console.log(arr4_map);

const arr4 = [1,2,3,4,5];
let arr4_map = arr4.map((e) => e * 2); //화살표 함수 버전
console.log(arr4_map);

// filter() : 주어진 함수의 테스트(조건)을 통과하는 요소를 모아
// (조건을 통과하면 오소 유지, 미통과하면 요소를 버림) => "새로운 배열"로 반환
// const filterResult = arr4.filter(function(e){
//     return e > 2;
// })
// console.log(filterResult);

const filterResult = arr4.filter((e) => e > 2) // 화살표 함수 버전
console.log(filterResult);

//find():특정 조건을 만족하는 첫번째 요소(값) 반환
const findResult = arr4.find((e) => e > 2);
console.log(findResult);

// 퀴즈
const words = ['dog', 'cat', 'rabbit', 'apple', 'wow'];

// 1. 글자 수가 3개 초과인 단어만 필터링
const words_filter = words.filter((e)=> e.length > 3);
console.log(words_filter);
// 2. 글자에 'a' 문자가 포함되어 있는 단어만 필터링
const words_filter2 = words.filter((e) => e.includes('a') == 1);
console.log(words_filter2);

//for in 반복문
//객체의 key를 반복할 수 있는 구문

const me = {name: 'sean', gender: 'f', hobby: 'movie'};
for (let k in me){
    console.log(k, me[k]); // 대괄호 표기법으로만 (점표기법x) value접근 가능
}

///////////////////////////////////////
// reduce()
// : 배열의 각 요소에 대해서 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값 반환

// reduce((acc, cur) =>{ ... }, initValue)
// - acc: 누적되는 값
// - cur: 현재 요소

const numbers2 = [1, 2, 3, 4, 5];
const initialValue = 100;
const result2 = numbers2.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue
}, initialValue);
console.log('result2 >>', result2); // 115

////////////////////////////////////////////
// 여러 배열을 합치는 방법
// 1. concat
const arr_1 = [1, 2, 3];
const arr_2 = [3, 4, 5];
console.log(arr_1.concat(arr_2)); // [1,2,3,3,4,5]

// 2. ... spread
console.log([...arr_1, ...arr_2]); // [1,2,3,3,4,5]