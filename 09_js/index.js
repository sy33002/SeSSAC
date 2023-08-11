// 구조 분해 할당
// 1. 배열 구조 분해 할당
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

















