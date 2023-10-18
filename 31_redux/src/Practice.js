import { useState } from 'react';
import { MoneyContainer } from './containers/BoxesContainer';


export default function Practice() {
    return (
        <div>
          <h1>React Redux</h1>
          <h3>코딩온 은행</h3>
          <MoneyContainer />
        </div>
      );
}

export const Money = () => {
    // const [ inputNum, setInputNum ] = useState('');
    return (
    <>
        <h1>React Redux</h1>
        <h3>코딩온 은행</h3>
        {/* <h5>잔액: {inputNum}</h5> */}
        {/* <input type='number' placeholder='금액을 입력하세요' */}
        {/* onChange={(e) => (setInputNum(e.target.value))} */}
        {/* value={inputNum}></input> */}
        {/* <button onClick={Deposit(inputNum)}>입금</button> */}
        {/* <button onClick={Withdrawal(inputNum)}>출금</button> */}
    </>
    )
}
