import React, { Component } from "react";
class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:null,
            country:null

        }
    }
    // eventHandler = (event) => {
    //     let name = event.target.value;
    //     console.log(name);
    // }
    // selectEventHandler = (event) => {
    //     let country = event.target.value;
    //     console.log(country);
    // }
    eventHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
             let name = event.target.name.value;
            let country=event.target.country.value;
            this.setState({name,country},()=>{
                console.log(this.state);
                event.target.name.value=""
                event.target.country.value=""
            })
         
         }

    render() {
        return (
            <div>hello
                <form onSubmit={this.eventHandler}>
                    <label>Name:</label>
                    <input type="text" name="name" onKeyUp={this.eventHandler}></input>

                    <select name="country" onChange={this.selectEventHandler}>
                        <option>India</option>
                        <option>Bangladesh</option>
                        <option>US</option>
                    </select>
                    <button>submit</button>
                </form>

            </div>
        )
    }


}
export default FormInput;