import { useEffect, useState } from "react";
import axios from "axios";
import DeletDAta from "./DeletData";
function UpdateData() {
    const [addnotes,setAddnotes]=useState({
        title:"",
        content:""
    })
    let _id;
useEffect(()=>{
_id=window.location.href.split('update/')[1];
console.log(_id);
})
    const changeHandler = (e) =>{
        setAddnotes({
            ...addnotes,
            [e.target.name]:e.target.value
            })
    }
    const DataAdder = async ()=>{
       // await axios.put()
        await axios.put(`http://localhost:5000/notes/${_id}`,addnotes)
        .then((response) =>{
            console.log(response.data);
        }).catch((e) => {
            console.log(e);
        })
        setAddnotes({
            title:"",
        content:""
        })
       }
       const DeletDAta = ()=>{
        axios.delete(`http://localhost:5000/notes/${_id}`).then((response)=>{
            console.log("deleted sucessfully")}).catch((e)=>{
                console.log(e);
            })
        }
    return ( 
        <div  style={{margin:"0px 45%",color:"#4e515e"}}>
            <h2>UpdataData</h2>
            <div> <label>Title : </label><input type="text" name="title" value={addnotes.title} onChange={changeHandler} /></div>
            <div><label>Content : </label><input type="text" name="content" value={addnotes.content} onChange={changeHandler} />
 </div><br/>
            <div style={{display:"flex"}}>
            <button onClick={DataAdder}>UpdataData</button>
           <button onClick={DeletDAta}>DeletDAta</button>
            </div>
        </div>
     );
}
export default UpdateData;