// jQuery
// $(선택자).동작함수()
// $(): HTML 요소를 선택하는 함수
// 동작함수: 선택된 요소에 대해 원하는 동작 수행
console.log($('#div1'));

function submitJs(){
    const div1 = document.getElementById('div1');
    //div내용 변경
    div1.innerText = '반갑습니다!';
    //div border style 추가
    div1.setAttribute('style', 'border = 2px solid red');
}

function submitJquery(){
    const div1 = $('#div1');
    $('#div1').text('안녕히계세요~');
    $('#div1').css('border', '2px dotted blue');
}

const colorsJs = document.querySelectorAll('.color');
const colorsJquery = $('.color');
//유사배열 형태로 출력
console.log(colorsJs);     //nodelist
console.log(colorsJquery); //jquery객체

// js li 요소 선택시 글씨 색상 빨간색
colorsJs.forEach((item) => {
    item.addEventListener('click', function(){
        item.style.color = 'red';
    })
});

//jquery li 요소 클릭시 배경 색상 하늘색
//on = addEventListener
//js와 달리 반복문을 돌지 않아도 됨
colorsJquery.on('click', function(){
//    console.log($(this));
    $(this).css('background-color', 'skyblue');
}); //속성쓸 때 snake기법 사용



