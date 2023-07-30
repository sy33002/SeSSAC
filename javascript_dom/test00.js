const calcul = document.querySelector('.calcul');
const reset = document.querySelector('.reset');

//각 div블록 안의 요소들 한줄로 만들기
const divs = document.querySelectorAll('div');
divs.forEach((div) =>{
    div.style.display = 'flex';
    div.style.height = ' 40px';
    div.style.alignItems = 'center';
});

calcul.style.backgroundColor = '#999';
reset.style.backgroundColor = '#999';
calcul.style.margin = '30px';
calcul.addEventListener('click', function(){
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const oper = document.getElementById('oper').value;
    let num3;
    if (oper === '+'){
        num3 = num1 + num2;
    }else if (oper === '-'){
        num3 = num1 - num2;
    }else if (oper === '/'){
        num3 = num1 / num2;
    }else if (oper === '%'){
        num3 = num1 % num2;
    }else if (oper === '*'){
        num3 = num1 * num2;
    }
    document.getElementById('result').value = num3
    // console.log(num3);
})

reset.addEventListener('click', function(){
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('oper').value = '';
    document.getElementById('result').value = '';
})




