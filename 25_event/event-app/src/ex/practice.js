import { useState } from 'react';

const Test1 = () => {
    const [ str, setStr] = useState(' 검정색 글씨');
    const [ style, setStyle ] = useState({color: 'black'})
    
    const Black = () => {
        setStr('검정색 글씨');
        setStyle({ color: 'black' });
    }
    const Red = () => {
        setStr('빨간색 글씨');
        setStyle({color: 'red'});
    }
    const Blue = () => {
        setStr('파란색 글씨');
        setStyle({color: 'blue'});
    }
    return (
        <>
            <h1 style={style}>{str}</h1>
            <button onClick={Red}>빨간색</button>
            <button onClick={Blue}>파란색</button>
        </>
    )
}


export const Test2 = () => {
    const [isVisible, setIsVisible] = useState(true);
    const Disappear = () => {
        setIsVisible(false);
    }
    return (
        <>
        <button onClick={Disappear}>사라져라</button>
        {isVisible? <h1>안녕하세요</h1>: <h1></h1>}
        </>
    )
}

export default Test1;