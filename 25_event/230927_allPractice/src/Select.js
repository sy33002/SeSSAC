import { useState } from 'react';

function Select({setFruit, setBackcolor, setStrcolor}) {
  const fruitChange =(e) => {
    const selectedFruit = e.target.value;
    setFruit(selectedFruit);
  }

  const backColorChange = (e) => {
    const selectedBackColor = e.target.value;
    setBackcolor(selectedBackColor);
  }

  const strColorChange = (e) => {
    const selectedStrColor = e.target.value;
    setStrcolor(selectedStrColor);
  }
  return (
    <>
      과일 :
      <select onChange={fruitChange}>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
        <option value="orange">오렌지</option>
      </select>
      배경색 :
      <select onChange={backColorChange}>
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색 :
      <select onChange={strColorChange}>
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
    </>
  );
}

export default Select;
