import {Component} from 'react';

class Handler_ex extends Component {
    constructor(props) {
        super(props);
        this.state = {str :"Hello World!"}
    }

    ChangeWorld = (change_str) =>{
        this.setState( {str : change_str} )
    }
    render() {
        return (
            <>
            <h1>{this.state.str}</h1>
            <button onClick={() => this.ChangeWorld('Goodbye World!')}>ChangeWorld</button>
            </>
        )
    }
} 

export default Handler_ex;