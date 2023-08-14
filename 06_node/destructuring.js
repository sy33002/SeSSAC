// 구조분해: 구조를 분해해서 할당 (= 연산자) 하겠다!
//1. 객체({})를 구조분해
const cookie = {
    choco: '초코맛 쿠키',
    vanilla: '바닐라맛 쿠키',
    orange: '오렌지맛 쿠키',
};

const { choco, vanilla, orange } = cookie;
//위아래 같은 의미
// const {choco, vanilla, orange} = {
//     choco: '초코맛 쿠키',
//     vanilla: '바닐라맛 쿠키',
//     orange: '오렌지맛 쿠키',
// };


// console.log(cookie.choco); -> 원래 초코를 부르려면 쓰던 모양
console.log(choco); //cookie. 안써도 됨
console.log(vanilla);
console.log(orange);

//2. 배열([])를 구조분해