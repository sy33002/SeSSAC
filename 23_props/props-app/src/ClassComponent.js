// import React from 'react'
// class ClassComponent extends React.Component {
import PropTypes from 'prop-types';
import React, { Component } from 'react'
class ClassComponent extends Component {
    student = 'Kim JiHyung';
    // 클래스형 컴포넌트는 render 함수 필수!
    render() {
        const {name} = this.props;
        console.log('props = > ', this.props);
        return (
            <div>
            {/* 클래스는 this를 넣어서 사용해야한다 */}
                <h1>Hi! {this.student}!</h1>
                <p>여기는 FunctionComponent</p>
                <p>새로운 컴포넌트의 이름은 <b>{name}</b></p>
            </div>
        )
    }
    // static defaultProps = {
    //     name: '기본 컴포넌트 이름',
    // };
    // static propTypes = {
    //     name: PropTypes.string,
    // };
}

ClassComponent.defaultProps = {
    name: '기본 이름',
}
// default가 없어야 isRequired가 작동함
ClassComponent.propTypes = {
    // isRequired: 반드시 name이 string이어야함
    name: PropTypes.string.isRequired,
}

export default ClassComponent;