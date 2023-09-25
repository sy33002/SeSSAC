import { Component } from "react";
import pic from "./pic.jpg";

export class ClassTest2 extends Component {
    style={color:'orange', fontSize:'40px', marginTop:'20px'};
    render() {
        return (
            <div style={this.style}>안녕하세요 <br />
            <img src={pic} style={{width:'80px'}}/>
            </div>
        )
    }
}

export default ClassTest2;