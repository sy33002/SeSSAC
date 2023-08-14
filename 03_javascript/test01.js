function multiply(num1, num2){
    return num1 * num2;
}
console.log(multiply(2,3))

function square(num){
    console.log(num ** 2);
}
square(3);

// if문 실습
let age= 18;
if (age >= 20){
    console.log('성인');
}else if (age >= 17){
    console.log('고등학생');
}else if (age >= 14){
    console.log('중학생');
}else if (age >= 8){
    console.log('초등학생');
}else if (age >= 0){
    console.log('유아');
}

let score = 55;
// score /= 10;
score = parseInt(score /= 10);
switch(score){
    case 10:
        console.log('A+');
        break;
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    default:
        console.log('F');
}

let now = new Date().getHours();
console.log(now);
now > 12 ? console.log('오후'): console.log('오전');

let sum = 0;
for(let i = 0; i<= 100; i++){
    if (i%2 === 0 || i%5 === 0){
        sum += i;
    }
}
console.log(sum);

let sum2 = 0;
for(let i = 0; i<= 10000; i++){
    if (i%13 === 0 && i%2 === 1){
        sum2 += i;
    }
}
console.log(sum2);