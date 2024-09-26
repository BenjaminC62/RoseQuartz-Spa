//class component 

import React, {Component} from "react";

class Mess extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return(
            <div>
                <p>{this.state.message}</p>
                <input type="button" value="click" onClick={() => this.changeMessage()}/>
            </div>
        )
    }
}

export default Mess;