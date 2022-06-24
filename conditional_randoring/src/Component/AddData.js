import { useState } from "react";
import axios from "axios";
function AddData() {
    const [addnotes,setAddnotes]=useState({
        title:"",
        content:""
    })
        const changeHandler = (e) =>{
            setAddnotes({
                ...addnotes,
                [e.target.name]:e.target.value
                })
        }
       const DataAdder = async ()=>{
        await axios.post("http://localhost:5000/notes",addnotes).then((response) =>{
            console.log(response.data);
        }).catch((e) => {
            console.log(e);
        })
        setAddnotes({
        title:"",
        content:""
        })
       }
    return ( 
        <div  style={{margin:"0px 45%"}}>
            <h2>AddData</h2>
            <div>
                <label>Title : </label><input type="text" name="title" value={addnotes.title} onChange={changeHandler} />
            </div>
            <div>
                <label>Content : </label><input type="text" name="content" value={addnotes.content} onChange={changeHandler} />
            </div>
            <button onClick={DataAdder}>AddData</button>
        </div>
     );
}

export default AddData;