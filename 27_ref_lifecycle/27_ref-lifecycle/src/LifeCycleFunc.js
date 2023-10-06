import React, {useState} from 'react'
import LifeCycleFuncChild from './LifeCycleFuncChild'

// 부모 컴포넌트
export default function LifeCycleFunc() {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(true);

    const changeNumber = () => {
        setNumber(number + 1);
    }
    const changeVisible = () => {
        setVisible(!visible)
    }
  return ( 
    <div style={{backgroundColor: 'green'}}>
        <button onClick={changeNumber}>Plus</button>
        <button onClick={changeVisible}>On/Off</button>
        {/* 단축 평가 - true일 때만 자식 컴포넌트를 보여줌 */}
        {visible && <LifeCycleFuncChild number={number}/>}
    </div>
  )
}


// 단축 평가
// &&, || 연산자가 쓰임

// A && B : 두 개의 피연산자 모두 True라면 True 반환
// A || B : 두 개의 피연산자 중에서 하나만 True여도 True 반환

//const xx = 5;
//const yy = 7;

//const result = xx < yy && 'yy가 큼'
//console.log(result)  => 'yy가 큼' 출력

// const result2 = xx || 100
// console.log(result2); => 5 출력

// const nameEx = '홍길동';
// const nameEx2 = null;

// console.log(nameEx || '이름없음') => 홍길동 출력
// console.log(nameEx2 || '이름없음') => '이름 없음'