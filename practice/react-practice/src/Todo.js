import React, { useState } from 'react';

export default function TodoList() {
    const [ list, setList ] = useState([]);
    const [ inputList, setInputList ] = useState('');

    const addList = () => {
        const newList =[...list, {id: list.length+1, todo: inputList}];
        setList(newList);
        setInputList('');
    };

    const toggleCheck = (id) => {
        const updateList = list.map((item) => 
            item.id === id ? {...item, checked: !item.checked} : item
        )
        setList(updateList);
    };

    const deleteList = () => {
        const deletedList = list.filter((item) => !item.checked);
        setList(deletedList);
    }

    const TodoItems = list.map((item) => (
            <li key={item.id}>
                <input type='checkbox' value={item.checked}
                onClick={() => toggleCheck(item.id)}></input>
                {item.todo}</li>));
    const warning = (list.length > 10 ? <p>경고! 할일이 너무 많습니다!</p> : <p></p>)
    return (
        <>
            <h1>Todo List</h1>
            <input type='text' 
            placeholder='할일을 입력하세요'
            value = {inputList}
            onChange={(e) => setInputList(e.target.value)}/>
            <button onClick={addList}>추가</button>
            <ol>
                {TodoItems}
            </ol>
            <div>{warning}</div>
            <button onClick={deleteList}>완료한 일 삭제</button>
        </>
    )
}