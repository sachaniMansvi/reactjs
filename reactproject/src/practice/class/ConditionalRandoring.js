import { Component } from "react";
import './ListByMap.css'
class ConditionalRadoring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [
                {
                    name: "Mansvi",
                    surname: "Sachani",
                    age: 22
                },
                {
                    name: "Priyal",
                    surname: "Sachani",
                    age: 22
                },
                {
                    name: "Riddhi",
                    surname: "Sachani",
                    age: 22
                }
            ],
            isShow: true
        }
        this.dataHandler = this.dataHandler.bind(this);
    }
    dataHandler = () => {
        this.setState({ isShow: !this.state.isShow })
    }
    render() {
        let store_date
        if (this.state.isShow) {
            store_date = this.state.person.map((value, index) => {
                return (<li key={index} className="listcs">
                   Name: {value.name}<br/>
                   Surname: {value.surname}<br/>
                    Age:{value.age}
                   
                </li>)
            })
        } else {
            store_date = "";
        }
        // let store_date = this.state.person.map((value,index) => {
        //     return (<li key={index}>{value.name} {value.surname}{value.age}</li>)
        // })

        return (<div className="cs">
            <button onClick={this.dataHandler}>Click to hide data</button>
            {
                store_date
                // (this.state.isShow == true ? store_date : "")
            }
        </div>);

    }
}
export default ConditionalRadoring;