// 함수 정의

// 1. 명시적 함수 선언
function helloWord1(){
    let word = '안녕';
    console.log(word);
}
helloWord1();

// 2. 함수 표현식(Function Expression)
// 함수를 변수에 저장하는 형태
const helloWord = function(){
    console.log("hello World!");
}
helloWord();
const helloWord2 = function(){
    return 'hello World!2'
}
console.log(helloWord2());

// 매개변수가 있는 함수
function hello(text){
    return text;
}
console.log(hello(123));

function hello2(text, name){
    // return text+ ' ' + name;
    return `${text} ${name}`
}
console.log(hello2('안녕', 'john'));
console.log(hello2('잘가', 'john'));

// 3. 화살표 함수 (arrow function)
// 함수 선언 문법이 간결함!
const myFunc1 = (x) => x;
/*
function myFunc1(x){
    return x;
}
*/
const mySum = (a, b) => a + b;
console.log(mySum(5, 2));
const myMulti = (a, b) =>{
    let res = a * b;
    return res;
}
console.log(myMulti(2, 3));

// 호이스팅(hoisting) -> 함수, 변수에서 다 이뤄짐
// : "끌어올리다" 사전적 의미
// 함수에서는 "함수 선언문"이 호이스팅 대상이 됨
// : 코드가 실행되기 전에 함수 선언을 최상단으로 끌어올리는 현상
// 참고) 변수에서는 "var"만 호이스팅 대상임

myHello(); //함수 "호출"을 "정의"보다 먼저 했음
function myHello(){
    console.log('hello~~~');
}
// 함수 표현식
// - 호이스팅의 대상이 될 수 없음
// - 함수 선언부보다 호출부가 먼저 나올 수 없음
// myHello2() => reference Error
const myHello2 = function(){
    console.log('hello2~~~~');
};
myHello2(); // 호이스팅 안했으니 ok

