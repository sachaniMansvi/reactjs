import axios from "axios";
import { useEffect, useState } from "react";
function AxiosFetchAPI() {
    const[GetAPI,GetSetAPI]=useState([])
    useEffect(()=>{
        axios.post("https://jsonplaceholder.typicode.com/todos",{title:"Mansvi",completed:"false"})
        .then((response)=>{
           GetSetAPI(response.data)
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
           GetSetAPI(response.data)
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    return ( 
        <div>
            {
                GetAPI.map((value,index)=>{
                    return(
                        <div key={index}>
                            <h3>{index+1}</h3>
                            <h3>{value.title}</h3>
                            <h3>{String(value.completed)}</h3>
                        </div>
                    )
                })
            }
        </div>
     );
}

export default AxiosFetchAPI;