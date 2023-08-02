//val() -value
function getValue() {
    //js
    // const inputVal = document.querySelector('input').value;
    // alert(inputVal);

    //jquery (같은 역할 코드)
    const value = $('input').val();
    alert(value);
}

function setValue() {
    //js
    //document.querySelector('input').value = '하이하이!';

    //jquery
    $('input').val('안뇽안뇽!');
}

//css()
function changeCssJS() {
    // js
    const span = document.querySelector('span');
    span.style = 'font-size: 20px; color:red';
};
function changeCssJquery() {
    //jquery. case1
    // $('span').css('font-size', '40px');
    // $('span').css('color', 'blue');

    //jquery.case2 (css 속성 한번에 적용)
    $('span').css({
        fontSize: '40px', // 모든 span에 대해 폰트 크기 변경
        color: 'blue', // 모든 span에 대해 폰트 색상 변경
    });
};
function getCssJquery() {
    // console.log(document.querySelector('span').style.color); // js
      console.log($('span').css('color')); // jquery
};
//js버전
function changeAttrJS(){
    const a = document.querySelector('a');
    a.setAttribute('href', 'http://www.naver.com');
}
//jquery버전
function changeAttrJquery(){
    $('a').attr('href', 'https://www.daum.net');
}

////////////////////////////////////////////////////////
//innerText와 text는 안의 내용을 바꾸는 개념
//innerHtml와 html은 안에 자식 요소를 추가하는 개념

//js버전
function changeTextJS() {
    const pText = document.querySelector('.p-text');
    pText.innerText = "asdf";
}
//jquery버전
function changeTextJquery() {
    $('.p-text').text('jquery로 텍스트 변경!')
}

//js버전
function changeHtmlJS() {
    // 퀴즈: p-html 클래스 갖는 요소 선택하고, <h3>javascript</h3>로 변경
    const pHtml = document.querySelector('.p-html');
    pHtml.innerHTML = "<h3>javascript</h3>";
}
//jquery버전
function changeHtmlJquery() {
    $('.p-html').html('<h3>jquery로 변경</h3>')
}

// 요소 추가하기
// append()
function appendJS() {
    // 1. color 클래스 갖는 요소 선택하고
    // 2. li 태그 요소를 생성한 후
    // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
    // 4. color 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
    // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append
    const color = document.querySelector('.colors');
    const li = document.createElement('li');
    li.innerText = '마지막 자식으로 추가된 js 추가';
    color.append(li);
}
  
  function appendJquery() {
    $('color').create-element('li');
    $('li').text = '마지막 자식으로 추가된 jquery추가';
    $('color').append = 'li';
  }
  
  // prepend()
  function prependJS() {
    // 1. color 클래스 갖는 요소 선택하고
    // 2. li 태그 요소를 생성한 후
    // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
    // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
    // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
    const color = document.querySelector('.colors');
    const li = document.createElement('li');
    li.innerText = '첫 자식으로 추가된 js 추가'
    color.prepend(li);
}
  
  function prependJquery() {}












