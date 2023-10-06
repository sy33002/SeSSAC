import React, {useEffect, useState} from 'react'

// 자식 컴포넌트
export default function LifeCycleFuncChild({number}) {
  const [input, setInput] = useState('')
  
  // Mount 시점에 실행 ( 의존성배열 [] (o) )
  // useEffect(() => {
  //   console.log('컴포넌트 마운트!!!');
  // }, []);

  // Unmount 시점에 실행
  // useEffect(() => {
  //   return () => {
  //   console.log('컴포넌트 언마운트!!')}
  // }, []);
  
  //Mount or Update 실행 ( 의존성배열 [] (x) )
  // useEffect(() => {
  //   console.log('컴포넌트 마운트or업데이트!');
  // });

  // input 상태가 업데이트될 때 실행 (마운트가 될 때도 찍힘)
  // useEffect(() => {
  //   console.log('input 상태가 변경됨에 따라 컴포넌트 업데이트');
  // }, [input]); // 의존성은 input에 있음

  return (
  <div style={{backgroundColor: 'gold'}}>
    자식컴포넌트
    <div>현재 Number 값은 {number}입니다. </div>
    <input type='text' value={input}
      onChange={(e)=> setInput(e.target.value)}></input>
  </div>)
}
