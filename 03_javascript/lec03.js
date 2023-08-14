// 연산자

// 대입 연산자 (=)
// : 변수에 값을 "할당"할 때 사용하는 연산자

// 산술 연산자
// 사칙연산: +, - , / , *
// 나머지 연산: %
// 거듭제곱 연산: **
let a = 5;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);
console.log(a ** b);

// 비교 연산자
// 동등 비교(==, ===, !=, !==)
// ==: "값"만 비교
// ===: "값"과 "type" 모두 비교
// ===, !==: 값과 TYPE모두 비교함: 엄격한 연산자 (권장!)
console.log(1==1);
console.log(1==2);
console.log(1!=1);
console.log('1'==1);
console.log('1'===1);
console.log('1'===2);
console.log('2'==='2');

console.log('2'>='2');
console.log(1 > 0);

// 동등 연산자 2개(==)
// 예기치 않은 결과를 발생한다
console.log('0' == false); //true
console.log('' == 0); // true
console.log(null == undefined); //true
console.log('------------------------')

// 논리 연산자
// !: not(참 ->거짓, 거짓 -> 참)
// &&: and (여러 값중 모두가 참 ->참)
// ||: or(여러 값 중 하나라도 참 -> 참)
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

console.log(true && true);
console.log(true  && false);
console.log(false && false);

console.log(false || false);
console.log(false || true);
console.log(true && true);

console.log(!(2 >1));
console.log(2 > 1 && -2 < 1);

// 문자열에서 + 연산: 문자열 더하기
console.log('안녕' + '하세요');
console.log('12' + '34');
// 더하기 이외의 연산은 자동 형변환이 됨
console.log('12'*'34');

// 증감 연산자
// ++, --
let result1, result2;
let num = 10, num2 = 10;
result1 = num++; //후위
console.log(result1);
console.log(num);

result2= ++num2; //전위
console.log(result2);
num += 1;
num2 -= 1;
console.log(num);
console.log(num2);

