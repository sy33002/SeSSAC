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
  
  return (
    <div>
      <input 
        type="text" 
        placeholder='이름' 
        value={inputName} 
        onChange={(e) => {
          setInputName(e.target.value.name);
      }} 
      />
      <input 
        type="text" 
        placeholder='이메일' 
        value={inputEmail} 
        onChange={(e) => {
          setInputName(e.target.value.email);
      }} 
      />
      <button onClick= {addUser}>ADD</button>
      <ol>
        {user.map((value) => {
          return  <li key={value.id}>{`이름: ${value.name}, 이메일: ${value.email}`}</li>
        })}
      </ol>
    </div>
  )}
