// 구조 분해 할당
// 1. 배열 구조 분해 할당

const { log } = require("console");

// - 배열 구조 분해 할당시 "순서"중요
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a','b','c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);
const [x,y,alpha,z] = arr2;
console.log(x,y,z,alpha);

let num1 = 1;
let num2 = 3;
console.log('swap 전>', num1, num2);
[num1, num2] = [num2, num1];
console.log('swap 후>', num1, num2);

const lists = ['apple', 'grapes'];
// f3은 오렌지로 기본값 할당 한 것
[f1, f2, f3 = 'orange'] = lists;
console.log(f1, f2, f3);

// 2. 객체 구조 분해 할당
// - 변수의 순서는 중요x
// - 키 값과 변수명이 일치해야함
const obj = {
    title: '엘리멘탈',
    content: '재밌어요',
    num: 5,
};
                        // star선언, default값 할당
const {title, content, num, star = 10000} = obj; //키값이 일치하지 않으면 undefined가 뜸.
console.log(title, content, num, star);

// 콜론(:)을 이용하면 새 변수명으로 바꿔서 저장할 수 있다!
const {title: t2, num: n2, content: c2} = obj; 
console.log(t2, n2, c2);

////////////////////////////////////////실습

function getInfo(lecture) {
    // TODO: 구조 분해 할당을 사용하여 값 추출
    const {name, part, leader} = lecture;
    // TODO: 출력 문장 생성
    const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`

    return output;
}

const lectureInfo = {
    name: 'SESAC x CODINGOn',
    part: 'WEB',
    leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

// spread 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할 (== 객체의 값을 펼친다!!)
// spread in array
console.clear();
const a = [1,2,3];
const b = [4,5];
const spread = [...a, ...b];
console.log(spread);

// spread in string
const c = [...'hello'];
const d = 'hello'.split('');// 같은 의미
console.log(c);
console.log(d);

//spread in object
const chip = {
    base: 'chip',
    company: 'lotte',
};
const photatoChip = {
    ...chip, // 하기의 반복되는 내용을 바로 불러오는 것
    //base: 'chip',
    // company: 'lotte',
    flavor: 'potato'
};
const sweetPhotatoChip = {
    ...chip,
    flavor: 'sweet potato'
};
console.log(chip);
console.log(photatoChip);
console.log(sweetPhotatoChip);

////////////////////////////실습
const word1 = 'abc';
const word2 = 'xyz';
const words = [...word1, ...word2];
console.log(words);

/////////////////////// rest 파라미터
//  1. 함수에서 rest를 사용할 때
const values = [10, 20, 30, 40, 50, 60, 70];
function get(a,b, ...rest){
    console.log('a = ', a);
    console.log('b = ', b);
    console.log('rest = ', rest);
};
get (...values);

// 2. 객체에서 rest
const icecream = {
    company: 'lotte',
    flavor: 'choco',
    price: 1000,
};
const {flavor , ...rest} = icecream;
console.log('flavor = ', flavor); //flavor =  choco
console.log('rest = ', rest); //rest =  { company: 'lotte', price: 1000 }

// 3. 배열에서 rest
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2]  = number;
console.log(one1); // 1
console.log(two1); // 2
console.log(rest2); // [ 3, 4, 5, 6, 7, 8 ]

/////////////////////////////////////////////
console.clear();
// 클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용!

// 집이라는 현실 세계의 객체를 만들어보자!
/* 
속성: 
    만들어진 연도(Number)
    집의 이름(String)
    창문 갯수(Number)
메서드:
    2023 - 만들어진 연도 콘솔창에 출력하는 "건물의 나이 메소드"
    창문의 갯수 콘솔창에 출력하는 메소드
*/
//클래스를 정의 (틀을 만든 것)
class House {

    // 하우스 클래스로 집을 만들 때 마다 year,name,window 정보를 받는다
    constructor(year, name, window) { 
        // 생성자 함수
        // : 클래스를 이용해 객체를 생성할 때 마다 속성을 초기화
        this.year = year;
        this.name = name;
        this.window = window;
    }
    
    // 메서드 1: 집의 나이를 출력
    getAge() {
        console.log(`${this.name}는 건축한지 ${2023 - this.year}년 되었어요!`);
    }
    // 메서드 2: 집의 창문 갯수를 출력
    getWindow() {
        console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
    }
};

// 클래스를 이용해 객체를 찍어보자
const house1 = new House(1990, '롯데캐슬', 1);
console.log('house1 =',house1);
console.log(typeof house1); //object
console.log(house1.year);
house1.getAge(); // 롯데캐슬는 건축한지 33년 되었어요!
house1.getWindow(); // 롯데캐슬의 창문은 1개 입니다!

// house2: 2007년에 지어진 "자이" 이름이고 창문은 10개

const house2 = new House(2007, '자이', 10);
house2.getAge();
house2.getWindow();

/////////////////////////////////////////////////실습
console.clear();

class Shape {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getBoxWidth() {
        console.log(`이 박스의 넓이는 ${this.width*this.height} 입니다.`)
    }
};
const box = new Shape(3,4);
box.getBoxWidth();

// 클래스 상속
// 부모 클래스 House
// 자식 클래스 Apartment
class Apartment extends House {
    constructor(year, name, window, floor, windowMaker) {
        // super = House(부모객체)에서 상속 받아옴 => 상속한 부모 클래스의 생성자를 호출
        super(year, name, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }
    getAptInfo() {
        return `${this.year}년도에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor}층이며, 창문의 개수는 ${this.window}개입니다.`
    }
    // 오버라이딩(overriding)
    // 부모 클래스에 정의되어 있는 메서드 이름을 동일하게 쓰되, 부모 클래스의 생성자를 호출
    getWindow() {
        return `${this.name}아파트의 ${this.window}개의 창문은 ${this.windowMaker}회사에서 생산되었습니다.`
    }
};

const apt1 = new Apartment(2022, '래미안', 3, 20, 'kcc');
console.log(apt1.getAptInfo()); //2022년도에 지어진 래미안 아파트의 총 층수는 20층이며, 창문의 개수는 3개입니다.
console.log(apt1.getWindow()); //오버라이딩

/////////////////////////////////////////////////////상속 실습
console.clear();

class Rectangle extends Shape {
    constructor(width, height){
        super(width,height);
    }
    getArea(){
        return `대각선 길이는 ${Math.floor(Math.sqrt(this.width**2 + this.height**2))}입니다!`
    }
};
class Triangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return `삼각형의 넓이는 ${(this.width * this.height) / 2} 입니다.`
    }
};

class Circle extends Shape {
    constructor(width, height, radius){
        super(width,height);
        this.radius = radius;
    }
    getArea(){
        return `원의 넓이는 ${Math.floor(Math.PI * (this.radius**2))} 입니다.`
    }
}

const box2 = new Rectangle(4, 5);
console.log(box2.getArea());

const triangle = new Triangle(3,8);
console.log(triangle.getArea());

const circle = new Circle(4, 4, 2);
console.log(circle.getArea());

