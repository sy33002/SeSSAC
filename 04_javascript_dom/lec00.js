//pass by value
//: 원시 타입은 값(value)이 복사되어 전달
let num = 1;
let num2 = num;
console.log(num);
console.log(num2);
// 두개는 같다
num = 5;
console.log(num);
console.log(num2);
//두개는 다름, 값이 복사되어 전달되기 때문

//pass by reference
const obj = {one: 1, two: 2};
const obj2 = obj;
console.log(obj);
console.log(obj2);
console.log(obj === obj2);
obj.five = 5;
console.log(obj);
console.log(obj === obj2);//obj에만 값 추가 후 obj2에 재할당하지 않아도 true가 찍힘
//obj와 obj2는 현재 같은 데이터로 같은 참조값을 갖고 있음.

////////////
const obj3 = {one:1, two:2};
const obj4 = {one:1, two:2};
console.log(obj3 == obj4);// false가 나옴
//같은 데이터지만, 서로 별도의 다른 객체이기 때문에
//즉, 참조값(address, 주소)가 다르다.

///////////////////
// 객체 리터럴(object literal), 딕셔너리
// : key-value 쌍으로 이루어진 테이터 구조

// js에서 객체는 여러 의미를 가짐
// typeof [] -> object, typeof {} -> object
// 이 때의 객체는 광범위한 의미의 "객체"

/////////////////////////////////////////////////////////////

// js 표준 내장 객체
// 1. Date 객체: 시간, 날짜
let now = new Date(); //현재 일시
console.log(now);

// 타임스탬프(timestamp)
// :1970년 1월 1일을 기준으로 흘러간 밀리초(ms)를 나타내는 정수
// new Date(timestamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);
let jan_02_1970 = new Date(24*3000*1000);
console.log(jan_02_1970);

// new Date(date_string)
let date1 = new Date('2023-07-17');
console.log(date1);
let date2 = new Date('2023','06','17'); //월이 00부터 시작하므로 06이 7월을 의미한다.
console.log(date2);

//관련 메서드
console.table(date1.getFullYear());
console.table(date1.getMonth()); // 0~ 11월 주의
console.table(date1.getDate());
console.table(date1.getHours());
console.table(date1.getMinutes());
console.table(date1.getSeconds());
console.table(date1.getMilliseconds());
console.table(date1.getDay()); // 0(일)~6(토)

//Quiz
// Date 객체를 이용해 오늘 요일을 얻고, (힌트. getDay())
// if or switch 구문 이용해서 평일/주말인지 콘솔창에 출력하는 코드 작성
let day = new Date();
day = day.getDay();
console.log(day);
if (day == 0 || day == 6){
    console.log('주말');
}else{
    console.log('평일');
}


// Math 객체
// 수학적인 상수와 함수

// 속성
console.log(Math.E); //자연로그
console.log(Math.PI); //파이

// 매서드
console.log(Math.min(100, -2, -214748, 21));
console.log(Math.max(100, -2, -214748, 21));
console.log(Math.round(5.3241)); //반올림
console.log(Math.ceil(5.3241)); //올림
console.log(Math.floor(5.3241)); //내림
console.log(Math.random()*100); // 0~ 1범위의 랜덤한 수

//Math.random()응용예시
//0~9
console.log(Math.floor(Math.random()));
//0~10
console.log(Math.floor(Math.random()*11));

console.log(Math.ceil(Math.random()*100));
console.log(Math.ceil((Math.random()*3)+19));


