import axios from "axios";
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import UpdateTodo from "./UpdateTodo";

function GetTodo() {
    const [getTodos,setTodo]=useState([]);
    const [id,setId]=useState("");
    const [update,setUpdate]=useState(false)
    useEffect(()=>{
        axios.get("http://localhost:5000/notes").then((response)=>{
          setTodo(response.data)
        }).catch((e)=>{
            console.log(e);
        })
    },[])
    const updateHandler =(idd)=>{
        setId(idd)
        console.log(id);
        setUpdate(true)
        console.log(update);
    }
    const deleteHandler =(id)=>{
            axios.delete(`http://localhost:5000/notes/${id}`).then((response)=>{
     console.log(response);
        }).catch((e)=>{
            console.log(e);
        })
        window.location.reload()
    }
    // delete selected element
    let check =[]
    const checkHandler =(id)=>{
    check.push(id)
    }
     const allDeletehandler =()=>{
        check.map((value)=>{
            axios.delete(`http://localhost:5000/notes/${value}`).then((response)=>{
                console.log(response);

            }).catch((e)=>{
                console.log(e);
            })
            window.location.reload()
        })
     }
    return ( 
        <div>
            {update?<UpdateTodo id={id}></UpdateTodo>: <AddTodo></AddTodo>}
        <div><h3>GET DATA</h3>
            {
                getTodos.map((value)=>{
                    return(
                    <div style={{color:"grey",border:"1px solid grey"}} key={value._id}>
                        <p>{value.title}</p>
                        <p>{value.content}</p>
                        <input type="text"></input>
                        <input type="checkbox" onChange={() => checkHandler(value._id)}></input>
                        <button onClick={() => updateHandler(value._id)}>Update</button>
                        <button onClick={() => deleteHandler(value._id)}>delete</button>
                    
                    </div>)
                })
            }
                <button onClick={allDeletehandler}>delete all</button>
        </div>
        </div>
     )
}

export default GetTodo;