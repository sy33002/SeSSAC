// only typescript type

import { addEmitHelper } from "typescript";

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

////////////////////////////////////////////////
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
