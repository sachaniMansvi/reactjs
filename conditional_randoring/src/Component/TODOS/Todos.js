import './Todos.css'
import 'font-awesome/css/font-awesome.min.css'
import { useEffect, useState } from "react";
import axios from 'axios';
function Todos() {
    const [getTodos, setGettodos] = useState([])
    // use effect for delete get data
    useEffect(() => {
        axios.get('http://localhost:5000/notes').then((response) => {
            console.log(response);
            setGettodos(response.data)
        }).catch((e) => {
            console.log(e);
        })
    }, [])
    // delete selected data
    let check=[]
    const checkhandler = (id)=>{
        check.push(id)
    }
    const deletSelected =()=>{
        check.map((value)=>{
            axios.delete(`http://localhost:5000/notes/${value}`).then((response)=>{
                console.log(response);
            }).catch((e)=>{
                console.log(e);
            })
            window.location.reload()
        })
    }
 // delete all data
    const deletAllSubject = () => {
    axios.delete("http://localhost:5000/notes").then((response) => {
    console.log(response);
    }).catch((e) => {
      console.log(e);
    })
    window.location.reload()
  }
    return (
        <div>
            {
                getTodos.map((value) => {
                    return (
                        <div key={value._id}>
                            <div className='Getdata_div'>
                                <div className='peragraph'>
                                    <p className='getdata'>Subject : {value.title}</p>
                                    <p className='getdata'>Content : {value.content}</p>
                                </div>
                                <div className='iconDiv'>
                                    <input className='getdata' type="checkbox" onChange={()=>checkhandler(value._id)}></input>
                                    <a className='getdata' href={`/update/${value._id}`}><i className='editIcone' class="fa fa-pencil" aria-hidden="true"></i></a>
                                    <a className='getdata' href={`/delete/${value._id}`}><i class="fa fa-trash" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
                <button className='dltBtn'  onClick={deletSelected}>Delete selected</button>
                <button className='dltBtn' onClick={deletAllSubject}>Delete all subject</button>
        </div>
    );
}
export default Todos;