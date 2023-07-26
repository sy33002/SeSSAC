if(5 > 3){
    console.log('얍!');
}
// let number = Number(prompt('숫자를 입력해주세요!'));
// 1. prompt() 로 사용자로부터 값을 입력받고(문자열)
// 2. Number() 문자열 -> 숫자형 형변환
// let number = 10;
// if (number>10){
//     console.log('입력한 수는 10보다 크군요!')
// } else {
//     console.log('입력한 수는 10보다 작거나 같네요!');
// }

// if (number > 100 || number < 0){
//     console.log('입력값이 잘못되었습니다.');
// }else if (number >= 90){
//     console.log('A');
// }else if (number >= 80){
//     console.log('B');
// }else if (number >= 70){
//     console.log('C');
// }else if (number >= 60){
//     console.log('D');
// }else{
//     console.log('F');
// }

// 중첩 if문
let userId = 'user01';
let userPw = '1234';

// id. pw 검사하는 함수
// function loginUser(){
    // let inputId = prompt('아이디 입력');
    // let inputPw = prompt('비밀번호 입력');

    // userId와 inputId가 같다면
    //   -userPw와 inputPw를 비교
    //   -inputId에 빈값이 입력됐다면
    //   - '아이디 입력 안함' 문구 반환
    // inputId가 틀렷으면
    //   - '아이디 틀림' 문구 반환
//     if (userId === inputId){
//         if (userPw === inputPw){
//             return '로그인 성공'
//         }
//         else{
//             return '비번 오류! 로그인 실패'
//         }
//         }else if(inputId == ''){
//             return '아이디 입력 안했음'
//     }else{
//         return '아이디 오류! 로그인 실패'
//     }
// }
// const res = loginUser();
// console.log(res);

// switch문
// break: 조건을 빠져나갈 때 사용하는 키워드
let a  = 1;
switch (a){
    case 1:
    case 2:
    case 3: //여러개의 케이스를 묶을 수도 있다.
        console.log('a가 1~3이군요');
        break;
    case 4:
        console.log('a가 4군요');
        break;
    case 5:
        console.log('a가 5군요');
        break;
    default:
        console.log('a가 무슨 값이야')
}

// 삼항 연산자
let num = 5;
if (num%2 === 1){
    console.log('홀수');
}else{
    console.log('짝수');
}
num % 2 === 1 ? console.log('홀수') : console.log('짝수');

// 반복문
// for (let i = 0; i < 11; i += 2){
//     console.log(`인사 ${i}번째 드리니까 잡수셔`);
// }

let n = 10;
let sum = 0;
for (let i =0;i <= n; i++){
    sum += i;
    console.log(i, sum);
}

// 배열 + for문
const fruits = ['apple','grape','strawberry','blueberry', 'watermelon'];
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

let sum2 = 0;
for (let i = 0; i<=20; i++){
    if(i % 2 == 0){
        sum2 += i
        console.log(i, sum2)
    }
}
console.log('-------------------')
// break문
let sum3 = 0;
let index = 1;
while (true){
    if (index === 11)
        break;
    sum3 += index
    console.log(index, sum3);
    index += 1;
}

// continue
