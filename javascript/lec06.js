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
