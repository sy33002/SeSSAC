// Promise (프로미스)
// - 비동기 함수를 동기처리하기 위해 만든 객체
// - 미래에 실패/성공에 대한 결과 값을 "약속"한다는 의미
// - 성공, 실패를 분리해서 반환
//      - 성공,실패에 대한 결과는 then , catch 메서드로 이어 받아서 처리 가능

// => 성공이든 실패든 무언가의 "최종 결과"를 나타내는 객체이다.
// resolved: 성공
// rejected: 실패

// 1. promise를 생성하는 코드
// function promise1(flag) {
//     return new Promise(function (resolve, reject) {
//       if (flag) {
//         resolve(`성공! 이 때 flag 값은 ${flag}!`);
//       } else {
//         reject(`실패! 이 때 flag 값은 ${flag}!`);
//       }
//     });
//   }

// // 2. promise를 사용(소비)하는 코드
// // promise1(5 > 3)
// // 	.then(function(result) {
// //     console.log(result);
// // })
// // 	.catch(function(error) {
// // 	console.log(error);
// // });

// // 화살표 함수 버전
// promise1(5 > 3)
// 	.then((result) => console.log(result))
// 	.catch((error) => console.log(error));

// ///////////////////////////////////////////////////
// // 2. 프로미스 예제
// // index.js에서 "콜백 함수"를 이용해 동기처리한 것을 "promise"를 이용해 동기처리
// function goMart() {
//     console.log('마트에 가서 어떤 음료를 살지 고민한다.');
// }
// function pickDrink() {
// 	return new Promise (function (resolve, reject) {
// 		setTimeout(function () {
// 			console.log('고민끝!!!');
// 			product = '제로콜라';
// 			price = 4000;
// 			// resolve();

// 			if(price <= 2000){
// 				resolve();
// 			} else {
// 				reject();
// 			}
// 		}, 3000);
// 	});
// }
// function pay() {
//     console.log(`상품명 : ${product}, 가격: ${price}`);
// }
// function nopay() {
// 	console.log ("금액부족 ㅜㅜ");
// }
// let product;
// let price;
// goMart();
// // 위아래 같은 버전
// pickDrink().then(pay).catch(nopay);
// pickDrink().then(function () {
// 	pay();
// });	

////////////////////////////////////////////////
// 3. 프로미스 체이닝(chaining)
// 함수를 이용해 (4+3)*2-1 = 13 을 연산해보자
// sub(mul(add(4, 3), 2), 1): add  -> mul -> sub 실행순서

// case1. 콜백함수로 처리한다면?
function add(n1, n2, callback) {
	setTimeout(function () {
		const res = n1 + n2;
		callback(res); // callback(7)
	}, 1000);
}

function mul(n, callback) {
	setTimeout (function() {
		const res = n * 2;
		callback(res); // callback(14)
	}, 700);
}

function sub(n, callback) {
	setTimeout(function() {
		const res = n - 1;
		callback(res);
	}, 500);
}

add(4, 3, function (x) {
	console.log('1: ', x); // 7
	mul(x, function(y){
		console.log('2: ', y); // 14
		sub(y, function(z){
			console.log('3: ', z);
		});
	});
});

// case2. 프로미스 체이닝 적용!
function add2(n1, n2) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			const res = n1 + n2;
			resolve(res);
		}, 1000);
	});
};

function mul2(n) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			const res = n * 2;
			// resolve(res);
			reject(new Error('의도적으로 발생시킨 에러!'));
		}, 700);
	});
}

function sub2(n) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			const res = n - 1;
			resolve(res);
		}, 500);
	});
}
add2(4,3)
.then(function(res){
	console.log('1: ', res);
	return mul2(res);
})
.then(function (res) {
	console.log('2: ', res);
	return sub2(res);
})
.then(function (res){
	console.log('3: ', res);
})
.catch(function (error) {
	console.log(error);
});

