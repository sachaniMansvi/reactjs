import axios from "axios";
import { useState } from "react";
function UpdateTodo(props) {
    const [addTodo, setAddTodo] = useState({
        title: "",
        content: ""
    })
  
    const InnputChangehandler = (e) => {
        setAddTodo({
            ...addTodo,
            [e.target.name]: e.target.value
        })
    }
    console.log(addTodo);
    const BtnClickhandler = async (e) => {
        e.preventDefault()
       await axios.put(`http://localhost:5000/notes/${props.id}`, addTodo).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        })
        window.location.reload()
        setAddTodo({
            title: "",
            content: ""
        })
    }
    return (
        <div>
            <h3>update Todo</h3>
            <input placeholder="enter title" type="text" name="title"   value={addTodo.title}   onChange={InnputChangehandler}></input>
            <input placeholder="enter title" type="text" name="content" value={addTodo.content} onChange={InnputChangehandler}></input>
            <button onClick={BtnClickhandler}>update</button>
        </div>
    )
}
export default UpdateTodo;