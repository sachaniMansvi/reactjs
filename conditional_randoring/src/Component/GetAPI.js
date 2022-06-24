import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AddData from "./AddData";
function GetData() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/notes").then((response)=>{
            console.log(response.data);
            setData(response.data)
        }).catch((e)=>{
            console.log(e);
        })
    },[])
    return ( 
        <div>
           <h3>GETDATA</h3>
           {
            data.map((value,index)=>{
                return(
                    <div style={{color:"#4e515e",border:"solid 1px #96ebad"}}>
                    <div key={value._id}>
                       <a href={`/update/${value._id}`}><h4> Title : {value.title} </h4></a> 
                        <h5> Content : {value.content} </h5>
                    </div>
                    </div>
                )
            })
           }
        </div>
     );
}

export default GetData;