console.log(document);
console.log($(document)); //jquery ver

//1. Load Event
// js ver
document.addEventListener('DOMContentLoaded', function(){
    console.log('문서의 dom 트리가 완성되면 실행되는 이벤트!');
});
//jquery ver. 1
$(document).ready(function(){
    console.log('ready - 문서 dom트리가 완성되면 실행되는 이벤트!')
});
//jquery ver. 2
$(function () {
    console.log('안녕?');
})

//2. Mouse Event
// click event js ver
const nums = document.querySelectorAll('.num');
for (let num of nums){
    num.addEventListener('click', function(){
        this.style.color = 'blue'; // 현재 클릭된 요소
    });
};
//jquery ver
$('.num').click(function(){
    $(this).css('color', 'blue');
    //this: 자기 자신 = 이벤트가 적용된 요소
    //      클릭한 자기 자신만 파란색으로 바뀜
    //$('.num')으로 선택하면 모든 .num요소가 다 파란색으로 바뀜
});
$('.p-msg').click(function (){
    $('.p-msg').css('color', 'red');
});

//mouseover(): 요소에 마우스를 올렸을 때
$('.numbers').on('mouseover', function(){ //on사용한 버전
    $(this).css('background-color', 'skyblue');
    $(this).append('<div>handler for .on() called!!</div>')
});

//hover(): 마우스 올리고/ 땠을 때
$('.div-hover').hover(
    function(){
        $(this).addClass('hover');
    },// 마우스 올렸을 때 기능 
    function (){
        $(this).removeClass('hover');
    }// 마우스를 땠을 때 기능
);
//같은 코드
// $('.div-hover').hover(
//     function(){
//         $(this).toggleClass('hover');
//     }
// );

// scroll(): 스크롤할 때
//js ver
window.addEventListener('scroll', function () {
    console.log('scrolling with js!!');
});
//jquery ver
$(window).scroll(function () {
    console.log("scrolling!");;
});

//3. key Event (jsdom파일 lec03.js 참조)
// keydown : 키를 입력했을 때
$('.input-key').on('keydown', function(e){
    //e: 이벤트 객체
    console.log(e);
    if (e.code === 'ArrowUp'){// up키보드 입력했을 때
        console.log('up'); 
    } else if (e.code === 'ArrowDown'){// down키보드 입력했을 때
        console.log('Down');
    }else {
        console.log('others');
    }
});

//4. Form Event
$('#todo-form').on('submit', function(e){
    console.log(e);
    e.preventDefault(); //이벤트의 기본동작을 막는 메서드
    const todo = $('[name="todo"]').val();
    $('.todos').append(`<li>${todo}</li>`);
    $('[name="todo"]').val('');
});

//e.preventDefault() 또 다른 예제
$('a#inactive').click(function(e){
    e.preventDefault();
    // a 태그의 클릭이벤트 기본 동작은 링크 이동
    // 링크 이동을 막은 것
    $('#text').append('이 링크는 동작하지 않음!');
});

//this
// 그 함수가 속해 있던 객체를 참조
// -뭔가를 클릭할 때 불러오는 함수 (콜백함수)에서  this는 그 "뭔가"를 의미

//js ver
const btns = document.querySelectorAll('.btn');
const spans = document.querySelectorAll('.span');

function setBgColor(){
    this.style.backgroundColor = 'royalblue';
}
function setBgColor2(elem, color){
    elem.style.backgroundColor = color;
}
for (let btn of btns){
    // btn.addEventListener('click', function(){
    //     console.log(this);
    //     this.style.backgroundColor = 'royalblue';
    // });
    btn.addEventListener('click', setBgColor);
};

function setBgColor2(elem, color){
    elem.style.backgroundColor = color;
}
for (let span of spans){
    // span.addEventListener('click', function(){
    //     console.log(this);
    //     this.style.backgroundColor = 'royalblue';
    // });
    span.addEventListener('click', function(){ // 인자가 있는 함수를 전달하고 싶으면 익명함수 써야함
        setBgColor2(span, 'purple');
    });
};
