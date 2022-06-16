import { useState } from "react";
function Conditional_ternary(){
    const [isLoging,setLoging]=useState(false)
     const LogingHandler=()=>{
        setLoging(!isLoging)
     }
    return(
        <div>
          
            {isLoging?<div><h1>user is loging</h1></div>:<div><h1>user is logout</h1></div>}
            <button onClick={()=>LogingHandler()}>Click to check loging</button>
            </div>
    )

} 
export default Conditional_ternary;