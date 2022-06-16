// event handling in react by three way
// inline,constructor,arrow function    
import React, { Component } from "react";
class Event extends Component {
    constructor(props) {
        super(props);
        // this.eventhandler=this.eventhandler.bind(this)
        this.state = {
            demo:"testing"
        }
    }
    eventhandler=()=>{
        console.log(this.state);
    }
    render() {
        return (
            <div>
            
                <button onClick={this.eventhandler}>click here</button>
                {/* onClick={()=>this.eventhandler()} */}
            </div>
        )
    }
}
export default Event;