// ? 선택적 매개변수는 맨 뒤에 있어야함
function print(a: number, b: number, c?:number):void {
    console.log(a);
    console.log(b);
    console.log(c);
};

print(2, 4, 6); // 2,4,6
print(2, 4); // 2,4,undefined

// 암묵적으로 c 는 number 타입이고 기본 값이 들어가게 됨
function print2(a: number, b: number, c = 100 ):void {
    console.log(a);
    console.log(b);
    console.log(c);
};

print2(2,4,6); // 2,4,6
print2(2,4); // 2,4,100


function sayHello(): void {
    console.log('Hello!!!');
};

sayHello();

function concatString(x: string, y:string): string {
    return x + y;
}

console.log(concatString('안녕', '하세요'));

function circleArea(r: number): number {
    return Math.floor(r * r * Math.PI);
}
console.log(circleArea(1));

// 화살표함수
const squareArea = (x: number, y:number) : number => {
    return x * y;
}
console.log(squareArea(2,3));

// 화살표 함수 & return 구문 생략
const triangleArea = (w: string, h:string):number => parseInt(w, 10) * parseInt(h, 10) / 2
console.log(triangleArea('3','4'));

// interface 정의 시 함수 타입 표현
interface Great {
    name: string,
    hi(): string,
    bye(a:number): string,
}

const sessac : Great = {
    name: 'sessac',
    hi() {
        return '여기는' + this.name + '캠퍼스';
    },
    bye(a:number) {
        return `작별 인사를 ${a}번 했습니다.` ;
    },
}

console.log(sessac.hi());
console.log(sessac.bye(9));


// never
// : 함수의 끝에 절대 도달하지 않는 경우
// function goingOn(): never {
//     while(true){
//         console.log('go!');
//     }
// }
// => 무한루프에 빠져 함수 끝에 도달할 수 없음!

// 오버라이딩 vs 오버로딩
// 1. 오버라이딩
// - Class에서 [ 상속 ] > 하위 클래스가 상위 클래스의 메소드를 상속받을 때 같은 이름의 함수(메서드)를 재정의

// 2. 오버로딩
// - 함수의 이름은 같지만, 매개변수 or 반환타입이 다른 여러 함수들을 가질 수 있음

// typescript 오버로딩
// - 선언부: 매개변수의 타입과 반환 타입만 지정
// - 구현부: 실제 함수의 구현 (function body)
// => "함수 이름 동일!"

function sum(a: string, b: string): string; // 선언부
function sum(a: number, b: number): number; // 선언부
// 구현부 : any를 통해 오버로딩 가능
function sum(a: any, b: any) {
    return a + b;
};

console.log(`sum string: ${sum('1', '100')}`); // 1100
console.log(`sum num: ${sum(1, 99)}`); // 100
// console.log(sum(10, '얏호')); => 오류




