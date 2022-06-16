import React,{Component} from 'react';
import Register from './UserForm';
import Reg_Greeting from './Reg_Greeting';
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
        isLoging:false,
        name:"null",
        email:"null",
        password:"null",
        showpassword:false
        }
    }
    eventHandler=(event)=>{
        event.preventDefault()
        let name =event.target.name.value;
        console.log(name);
        let email =event.target.email.value;
        console.log(email);
        let password =event.target.password.value;
        console.log(password);
        this.setState({name,email,password,isLoging:true})
    }
    // for the shoe and hide password
    ShowHandler=()=>{
        this.setState({showpassword:!this.state.showpassword},()=>{
            console.log(this.state);
        })
    }
    render() { 
        return (
            <div>{
                    this.state.isLoging?<Reg_Greeting namee={this.state.name} ></Reg_Greeting>:<Register submit={this.eventHandler} showpass={this.state.showpassword} click={this.ShowHandler}></Register>
            }
            </div>
          );
    }
}
 
export default App ;