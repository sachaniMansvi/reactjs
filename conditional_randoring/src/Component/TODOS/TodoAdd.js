import { useEffect, useState } from "react";
import axios from 'axios';
import Todos from "./Todos";
function Tododd() {
    const [newTodos, setNewtodos] = useState(
        {
            title:"",
            content:""
        }
    )
    const changehandler = (event) => {
        setNewtodos({
            ...newTodos,
            [event.target.name]:event.target.value
        })
    }
    const AddToNewHandler = async (e) => {
        await axios.post("http://localhost:5000/notes", newTodos).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        })   
        window.location.reload()
        setNewtodos( {
            title:"",
            content:""
        })
    }
    return (
        <div>
            <h2 className='Main_heading'>TodoInput</h2>
            <div className="todoHeading">
                <input className='input' placeholder="New todos" type="text" name="title" value={newTodos.title} onChange={changehandler}></input><br />
                <input className='input' placeholder="content" type="text" name="content" value={newTodos.content} onChange={changehandler}></input><br />
                <button className='addBtn' onClick={AddToNewHandler}>Add new todo</button>
            </div>
        </div>
    );
}
export default Tododd;