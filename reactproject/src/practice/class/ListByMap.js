import React, { Component } from "react";
// import './ListByMap.css'
class ListByMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: [
                {
                    name: "Mansvi",
                    surname: "Sachani",
                    age: 22
                },


                {
                    name: "priyal",
                    surname: "Ghevariya",
                    age: 22
                },
                {
                    name: "Riddhi",
                    surname: "Koladiya",
                    age: 22
                }
            ]
        }
    }
    render() {
        let persons = this.state.person.map((value,index) => {
            return (
             <li key={index}> name : {value.name}, age : {value.age} </li>
           )   
        });        
        return (<div className="cs">{persons} </div>);
    }
    }
export default ListByMap;
