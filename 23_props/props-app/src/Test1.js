import PropTypes from 'prop-types';
import React, { Component } from 'react'
import pic2 from "./pic2.jpg"

export class ClassTest1 extends Component {
    name="김지형";
    my_style={backgroundColor:'blue', color:'orange', fontSize:'40px', padding:'20px'};
    render() {
        return (
            <div style={this.my_style}>{this.name}</div>
        )
    }
}

export class BestBook extends Component {
    render () {
        const { title, author, price, type } = this.props;
        return (
        <div style={{backgroundColor:'yellow'}}>
            <h3 style={{color:'orange'}}>이번주 베스트셀러</h3><br />
            <img src={pic2} style={{width:'80px'}}/>
            <h3>{title}</h3>
            <p>저자: {author}</p>
            <p>판매가: {price}</p>
            <p>구분: {type}</p><br />
        </div>
        )
    }
}

export class TextProps extends Component {
    render() {
        return (
        <>
            <h1>{this.props.text}</h1>
            <br />
            <button onClick={this.props.valid}>콘솔메세지</button>
            <br />
        </>
        )
    }
} 

TextProps.defaultProps = {
    text: '이건 기본 text props입니다.',
}

TextProps.propTypes = {
    text: PropTypes.string.isRequired,
}