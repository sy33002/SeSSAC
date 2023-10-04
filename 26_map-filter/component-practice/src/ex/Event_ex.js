import React, { useState } from 'react'

export default function Event_ex() {
  const [alphabet, setAlphabet] = useState([
      {
        id: '코드',
        email: '',
      },
      {
        id: 2,
        alpha: 'p',
      },
    ]);
  const [inputAlpha, setInputAlpha] = useState('');
  const addAlpha = () => {
    // [퀴즈] input이 빈값이라면 alphabet 상태가 변경되지 않도록 하기
    if (!inputAlpha) {
      alert('빈값입니다!')
    } else {
      const newAlpha = alphabet.concat({id: alphabet.length+1, alpha: inputAlpha});
      setAlphabet(newAlpha);
      setInputAlpha('');
    }
  };
  const deleteAlpha = (targetId) => {
    const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
    setAlphabet(newAlpha);
  };
  // [퀴즈] input에서 enter 키 누르면 추가 되도록!
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      return addAlpha
    }
  }
  return (
    <div>
      <input 
        type="text" 
        placeholder='알파벳 입력' 
        value={inputAlpha} 
        onChange={(e) => {
          setInputAlpha(e.target.value);
      }} 
      />
      <button onClick= {addAlpha}>ADD</button>
      <ol>
        {alphabet.map((value) => {
          return  <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)} onKeyDown={handleKeyDown}>{value.alpha}</li>
        })}
      </ol>
    </div>
  )}
