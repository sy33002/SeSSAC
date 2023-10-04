import React, { useState } from 'react'

export default function Event_ex() {
  const [user, setUser] = useState([
      {
        id: 1,
        name: '코디',
        email: 'codi@gmail.com',
      },
      {
        id: 2,
        name: '윤소희',
        email: 'yoonsohee@gmail.com',
      },
    ]);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const addUser = () => {
    if (!inputName || !inputEmail) {
      alert('빈값입니다!')
    } else {
      const newUser = user.concat({id: user.length+1, name: inputName, email: inputEmail});
      setUser(newUser);
      setInputName('');
      setInputEmail('');
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      return addUser
    }
  }
  return (
    <div>
      <input 
        type="text" 
        placeholder='알파벳 입력' 
        value={inputname} 
        onChange={(e) => {
          setInputAlpha(e.target.value);
      }} 
      />
      <button onClick= {addUser}>ADD</button>
      <ol>
        {user.map((value) => {
          return  <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)} onKeyDown={handleKeyDown}>{value.alpha}</li>
        })}
      </ol>
    </div>
  )}
