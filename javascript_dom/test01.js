const divs = document.querySelectorAll('div');
divs.forEach((div) =>{
    div.style.display = 'flex';
    div.style.alignItems = 'center';
});
const person = document.getElementById('person');
person.innerHTML = '<b>작성자</b>';
const content = document.getElementById('content');
content.innerHTML = '<b>내용</b>'

person_text.style.width = '100px';
content_text.style.width = '400px';

const btn = document.querySelector('#btn');
btn.style.width = '40px';
btn.style.backgroundColor = '#999';

let currentNumber = 1;

const table = document.querySelector('table');
btn.addEventListener('click', function (){
    const person_text = document.querySelector('#person_text');
    const content_text = document.querySelector('#content_text');
    // 새로운 행과 세 개의 테이블 데이터 셀 생성
    const newRow = document.createElement('tr');
    const numCell = document.createElement('td');
    const personCell = document.createElement('td');
    const contentCell = document.createElement('td');
    const dateCell = document.createElement('td');

    numCell.innerHTML = currentNumber++;
    personCell.innerHTML = person_text;
    contentCell.innerHTML = content_text;
    dateCell.innerHTML = Date.now();

    newRow.appendChild(numCell);
    newRow.appendChild(personCell);
    newRow.appendChild(contentCell);
    newRow.appendChild(dateCell);
    
    table.appendChild(newRow);

    person_text.value = '';
    content_text.value = '';
});

