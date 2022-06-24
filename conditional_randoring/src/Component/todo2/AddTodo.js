import axios from "axios";
import { useState } from "react";

function AddTodo() {
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
    const BtnClickhandler = () => {
        axios.post("http://localhost:5000/notes", addTodo).then((response) => {
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
            <h3>Add Todo</h3>
            <input placeholder="enter title" type="text" name="title" value={addTodo.title} onChange={InnputChangehandler}></input>
            <input placeholder="enter title" type="text" name="content" value={addTodo.content} onChange={InnputChangehandler}></input>
            <button onClick={BtnClickhandler}>add</button>
        </div>
        )
}
export default AddTodo;