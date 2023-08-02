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
    const colors = document.querySelector('.colors');
    const li = document.createElement('li');
    li.innerText = '마지막 자식으로 추가된 js 추가';
    colors.append(li);
}
  function appendJquery() {
    $('.colors').append("<li>마지막 자식으로 추가된 jquery</li>");
  }
  
  // prepend()
  function prependJS() {
    //js 버전
    const colors = document.querySelector('.colors');
    const li = document.createElement('li');
    li.innerText = '첫 자식으로 추가된 js 추가'
    colors.prepend(li);
}
  function prependJquery() {
    // jquery 버전
    $('.colors').prepend('<li>첫 자식으로 추가된 jquery</li>');
  }

// before()
function beforeJS() {
    //js버전
    const green = document.querySelector('.green');
    const li = document.createElement('li');
    li.innerText = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';
    green.before(li);

  }
  function beforeJquery() {
    //jquery버전
    $('.green').before('<li>green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)</li>');
  }
  
  // after()
  function afterJS() {
    //js버전
    const green = document.querySelector('.green');
    const li = document.createElement('li');
    li.innerText = 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(jquery)';
    green.after(li);
  }
  function afterJquery() {
    //jquery버전
    $('.green').after('<li>green 클래스를 갖는 요소의 다음 형제 요소로 추가(jquery)</li>');
  }

// 요소 삭제하기
// remove()
function removeJS() {
    // js 버전
    const li2 = document.querySelector('#li2');
    li2.remove();
  }
  function removeJquery() {
    // jquery버전
    $('#li2').remove();
  }
  
  // empty()
  function emptyJS() {
    // js 버전
    const num = document.querySelector('ul.nums');
    num.innerHTML = '';
  }
//   function emptyJquery() {
//     // jquery버전
//     ${'ul.nums'}.empty();
//   }

// 요소 탐색하기
function findParent() {
  // child2 클래스 갖는 요소의 부모 요소
  // js버전
  console.log(document.querySelector('.child2').parentElement);
  // jquery버전
  console.log($('.child2').parent());
}

function findParents() {
  // JS 없습니다! 패스~~
  console.log($('.child2').parents());
}

function findNext() {
  // child2 클래스 갖는 요소의 다음 형제 요소
  // js버전
  console.log(document.querySelector('.child2').nextElementSibling);
  // jquery버전
  console.log($('.child2').next());
}

function findPrev() {
  // child2 클래스 갖는 요소의 이전 형제 요소
  // js버전
  console.log(document.querySelector('.child2').previousElementSibling);
  // jquery버전
  console.log($('.child2').prev());
}

function findChildren() {
  // parent 클래스 갖는 요소의 자식 요소
  // js버전
  console.log(document.querySelector('.parent').children);
  // jquery버전
  console.log($('.child2').children());
}

// 클래스 조작하기
function addClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 추가
  // js버전
  document.querySelector('#hi').classList.add('fs-50');
  // jquery버전
  $('#hi').addClass('fs-50');
}

function removeClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 삭제
  document.querySelector('#hi').classList.remove('fs-50');
  // jquery버전
  $('#hi').removeClass('fs-50');
}

function hasClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 포함 여부 확인
  console.log( document.querySelector('#hi').classList.contains('fs-50'));
  // jquery버전
  $('#hi').hasClass('fs-50');
}

function toggleClass() {
  // hi 아이디 갖는 요소 선택하여 "bg-pink" 클래스 토글 (있으면 삭제, 없으면 추가)
  document.querySelector('#hi').classList.toggle('bg-pink');
  // jquery버전
  $('#hi').toggleClass('bg-pink');
}





