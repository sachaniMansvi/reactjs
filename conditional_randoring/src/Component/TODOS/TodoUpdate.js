import { useEffect, useState } from "react";
import axios from 'axios';
function Update(props) {
    const [newTodos, setNewtodos] = useState(
        {
            title:"",
            content:""
        })
    const changehandler = (event) => {
        setNewtodos({
            ...newTodos,
            [event.target.name]:event.target.value
        })
    }
    // let _id=window.location.href.split("/update")[1]
    const AddToNewHandler = async (e) => {
        await axios.put(`http://localhost:5000/notes${props.id}`, newTodos).then((response) => {
            console.log(response.getTodos);
        }).catch((e) => {
            console.log(e);
        })
        window.location.reload()
        setNewtodos({
                title:"",
                content:""
            })
    }
    return (
        <div>
            <h3 className='Main_heading'>UpdateInput</h3>
            <div className="todoHeading">
                <input className='input' placeholder="title" type="text" name="title" value={newTodos.title} onChange={changehandler}></input><br />
                <input className='input' placeholder="content" type="text" name="content" value={newTodos.content} onChange={changehandler}></input><br />
                <button className='addBtn' onClick={AddToNewHandler}>Update todo</button>
            </div>
        </div>
    );
}
export default Update;