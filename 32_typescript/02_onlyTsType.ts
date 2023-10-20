// only typescript type

// Tuple
// 요소의 길이와 타입이 고정된 특수한 배열
let drink: [string, string];
drink = ['사이다', '롯데'];
console.log(drink);

// 배열 요소로 접근 가능
drink[0] = 'cider';
drink[1] = 'lotte';
console.log(drink);
//drink.push('얏호') => 안됨, 튜플의 한계

let drink2 : readonly [string, number];
drink2 = ['사이다', 2200];
// drink2[0] = 'asdf'; => readonly라서 배열 접근 불가, 변경도 불가
console.log(drink2);

let product1 : [number, string ,number] = [1, '로지텍 mouse', 130000];
let product2 : [number, string ,number] = [2, '로지텍 keyboard', 52000];

type productInfo = [number, string, number]; // type 별칭
let product3 : productInfo = [1, '로지텍 mouse', 130000];
let product4 : productInfo = [2, '로지텍 keyboard', 52000];

//Enum
enum Auth {
    admin = 0,
    user = 1,
    guest = 2,
};

enum Cafe {
    americano = 100,
    latte = '카페라떼',
}

console.log(Cafe[100]);

// any
let val: any;
val = true;
val = '하이';
val = 10000;
val = { name: 'sessac' };

// 암묵적으로 any를 잡음
let val2;
val2 = false;
val2 = '하이';


/////////////////////////////////////
// practice

let olimpic_newgame: readonly [object, boolean]
olimpic_newgame = [
    {
        name: "쇼트트랙",
        type: "혼성 계주",
    },
    true,
];

let arrA: any[] = [1, true, 'string'];
let arrB = [1, true, 'string']; 
console.log(arrA);
console.log(arrB);

// type & interface
// 1. interface
interface Student {
    name: string;
    isPassed: boolean;
}

const student1 : Student =  {
    name: 'jihyung',
    isPassed: true,
    // addr: 'seoul', => 내가 정의한 자료형이 아님 - 자료의 일체성이 높아질 것
}

const student2 : object =  {
    name: 'jihyung',
    isPassed: true,
    addr: 'seoul',
}

// interface 상속
// type Score = 'A+'|'A'|'B'|'C'|'D'|'F';
enum Score {
    Aplus = 'A+',
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    F = 'F',
}
interface BaseballClub extends Student{
    position: string;
    height: number;
    readonly backNumber?: number; // ?: 있어도 되고 없어도 됨
    // key값이 grade고 자료형은 number이다.
    [grade: number]: Score;
};

const otani: BaseballClub = {
    name:'otani',
    isPassed: true,
    position: 'pitcher',
    height: 193,
    backNumber: 1,
    1: Score.Aplus,
};

console.log(otani);
otani.position = '투수';
otani.height = 200;
// otani.backNumber = 17; readonly 속성으로 변경 불가
console.log(otani);

type Bp1 = 500 | 700 | 1000;

enum Bp2 {
    SM = 500,
    MD = 700,
    LG = 1000,
}

// const width1 : Bp1 = 500;
const width1: Bp2 = Bp2.SM;

// 교차 타입 : 두 개 이상의 타입을 합치는 것
interface Toy {
    name: string;
    start(): void,

}
interface Car {
    name : string,
    color: string,
    price: number,
}

type toyCar = Toy & Car;
const ToyCar : toyCar = {
    name: 'tayo',
    start() {
        console.log('출발~');
    },
    color: 'blue',
    price: 5000,
};

// 2. type
type Gender = 'F' | 'M';
type Person = {
    name: string;
    age?: number;
    like?:string[];
    gender: Gender;
}

let daniel: Person = {
    name: 'daniel',
    age: 20,
    gender: 'F', // Gender 타입에 선언된 값만 넣을 수 있음
    like: ['minji', 'hani'],
};

// practice
type Category = '액션' |'롤플레잉'|'로맨스';
type Platform = '모바일'|'웹';
interface Game {
    title: string,
    price: number,
    desc?: string,
    category: Category,
    platform?: Platform,
}

let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
};

let heroGame_B: Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000 ,
    category: '롤플레잉',
    platform: '모바일',
}
