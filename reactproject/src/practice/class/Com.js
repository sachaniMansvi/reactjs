import { render } from "@testing-library/react";
import React, { Component } from "react";
import Counter from "./Counter";
class Com extends Component {
    constructor() {
        super()
        this.state={
            count:0
        }
    }
    componentDidMount() {
        console.log("when component mount firsttime")
    }
    counter(){
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                <Counter number={this.state.count}></Counter>
                <button onClick={this.counter.bind(this)}>click me</button>
            </div>
        )
    }
}
export default Com
