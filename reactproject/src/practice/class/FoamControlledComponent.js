import React,{Component} from 'react';

class FoamControlledComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state={
        name:"Enter your name",
        }
    }
   changeHandler=(event)=>{
    console.log("before",this.state);
        const name=event.target.value;
        this.setState({name},()=>{
            console.log("after",this.state);
        })
   }
    render() { 
        return (
            <div>
                <form>
                    <input 
                    type="text" 
                    name="name" 
                    value={this.state.name}
                    onChange={this.changeHandler}></input>
                </form>
            </div>
        );
    }
}
 
export default FoamControlledComponent;