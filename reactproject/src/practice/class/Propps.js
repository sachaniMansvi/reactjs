// prop by class
import React,{Component} from "react";
class Propps extends Component{
  
    constructor(props){
        super(props);
        console.log(props);
        this.props=props;
    }
    render(){
        return(
            <div>
                <h3>Dear {this.props.name} {this.props.age} ,welcome to Weetech</h3>

            </div>
        );
    }
}
export default Propps;