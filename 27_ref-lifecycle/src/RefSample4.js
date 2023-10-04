import React, { Component } from 'react'

export default class RefSample4 extends Component {
  // 컴포넌트 내부에서 변수에 React.createRef()를 담기
  InputRef = React.createRef();
  handleFocus = () => {
    console.log("this>>>", this);
    // ref 설정 후 DOM 접근을 위해서는 this.inputRef.current 까지 접근
    this.InputRef.current.focus();
  }
  render() {
    return (
      <div>
      <p>클랫형 컴포넌트에서 버튼 클릭 시 input에 focusing 처리</p>
      <input type="text" ref={this.InputRef}/>
      <button onClick={this.handleFocus}>Focus</button>
    </div>
    )
  }
}
