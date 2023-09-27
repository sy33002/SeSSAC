// import React, { Component, useState } from 'react'
import React, { Component, useState } from 'react';

export class Test1 extends Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
    }
    onClickPlus = () => { this.setState((prevState) =>({number: prevState.number + 2}))};
    onClickMinus = () => { this.setState((prevState) =>({number: prevState.number - 1}))};
    render() {
        const { number } = this.state;
        return  (
            <div>
                <h1>{number}</h1>
                <button onClick={this.onClickPlus}>+2</button>
                <button onClick={this.onClickMinus}>-1</button>
            </div>
    
        )
    }
}

export const Test2 = () => {
    const [number, setNumber] = useState(0);
    const Increase = () => setNumber(number + 1);
    const Decrease = () => setNumber(number - 1);
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={Increase}>+1</button>
            <button onClick={Decrease}>-1</button>
        </div>
    )
} 

