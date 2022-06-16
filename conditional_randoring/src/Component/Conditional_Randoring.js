import { useState } from "react";
function Conditional_Randoring() {
    const[Loging,setLoging]=useState(true)

    // log in fuction 
    const LogInHandler=()=>{
        setLoging(true)
    }

    // log out function
    const LogOutHandler=()=>{
        setLoging(false)
    }
    
    if(Loging===false)
    {
        return ( 
            <div>
            <h4> User is log in</h4>
           <button onClick={()=>LogInHandler()}>LogIng</button>
            </div>
           
         )
    }
    else{
        return ( 
            <div>
                 <h4>User is log out</h4>
           <button onClick={()=>LogOutHandler()}>LogOut</button>
            </div>
         )  
    }
}

export default Conditional_Randoring;