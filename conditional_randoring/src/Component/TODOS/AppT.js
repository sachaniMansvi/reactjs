import { useEffect, useState } from "react";
import Todoadd from "./TodoAdd";
import TodoDelete from "./TodoDelete";
import Todos from "./Todos";
import Update from "./TodoUpdate";
function AppT() {
    const [update,setUpdate]=useState(false)
    useEffect(()=>{
        window.location.href.includes("update")?setUpdate(true):setUpdate(false)
    },[])
    return (
        <div>
            {update?<Update></Update>:<Todoadd></Todoadd>}
            <Todos></Todos>
            <TodoDelete></TodoDelete>    
        </div>
    );
}

export default AppT;