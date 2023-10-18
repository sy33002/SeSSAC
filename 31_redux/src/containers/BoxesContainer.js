// presentational component: '뷰' 집중 => components/
// container component: presentational + container => containers/

import { useSelector,useDispatch } from 'react-redux';
import { Box1, Box2, Box3, Box4 } from '../App4';
import { plus, minus } from '../store/counterReducer';
import Money from '../Practice';

export const Box1Container = () => {
    return <Box1 />;
}

export const Box2Container = () => {
    return <Box2 />;
}

export const Box3Container = () => {
    return <Box3 />;
}

export const Box4Container = () => {
    const dispatch = useDispatch();
    const number = useSelector((state) => state.counter.number);
    const isVisible = useSelector((state) => state.isVisible);
    return (
        <Box4 
            number={number} 
            onPlus={() => dispatch(plus())} 
            onMinus={() => dispatch(minus())} 
            isVisible={() => dispatch(isVisible())}
        />
    )
}

const deposit = () => ({type: 'DEPOSIT'});
const Withdrawal = () => ({type: 'WITHDRAWAL'});

export const MoneyContainer = () => {
    const dispatch = useDispatch();
    const money = useSelector((state) => state.money);
    return (
        <Money 
            money={money}
            Deposit={() =>dispatch(deposit())}
            Withdrawal={() =>dispatch(Withdrawal())}
        />
    )
}
