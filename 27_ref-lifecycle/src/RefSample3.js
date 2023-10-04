import React, { Component } from 'react'

export default class RefSample3 extends Component {
  handleFocus = () => {
    this.inputRef.focus();
  }
  render() {
    return (
      <div>
        <p>클랫형 컴포넌트에서 버튼 클릭 시 input에 focusing 처리</p>
        <input type="text" ref={(ref) => {
          // inputRef: ref로 사용될 변수 이름
          this.inputRef = ref;
        }}/>
        <button onClick={this.handleFocus}>Focus</button>
      </div>
    )
  }
}
