import React, { Component } from "react";
class statee extends Component {
    constructor(props) {
        super(props)
        this.props=props
        this.state = {
            name: "priyal",
            age: 23,
        };
        console.log(this.state)
    }
    statevent(){
       
        this.setState({name:"Manasvi"},()=>{console.log(this.state);
        });
    }
    render() {
        return (
            <div>
                <h3>Dear {this.state.name},{this.state.age}welcome to Weetech</h3>
                <button onClick={()=>this.statevent()}>Submit</button>
            </div>
        )
    }
}
export default statee;