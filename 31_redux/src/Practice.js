import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';


const Deposit = (num) => ({type: 'DEPOSIT', payload: num});
const Withdrawal = (num) => ({type: 'WITHDRAWAL', payload: num});

export default function Practice() {
  const [ inputNum, setInputNum ] = useState('');
  const dispatch = useDispatch();
  const money = useSelector((state) => state.money.money);
    return (
        <div>
          <h1>React Redux</h1>
        <h3>코딩온 은행</h3>
        <h5>잔액: {money}</h5>
        <input type='number' placeholder='금액을 입력하세요'
        onChange={(e) => (setInputNum(e.target.value))}
        value={inputNum}></input> 
        <button onClick={() => {dispatch(Deposit(parseInt(inputNum)))}}>입금</button>
        <button onClick={() => {dispatch(Withdrawal(parseInt(inputNum)))}}>출금</button>
        </div>
      );
}
