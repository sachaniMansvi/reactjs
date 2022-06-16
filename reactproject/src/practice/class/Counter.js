import React,{Component} from "react";

class Counter extends Component{
    constructor()
    {
        super()
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}
export default Counter;