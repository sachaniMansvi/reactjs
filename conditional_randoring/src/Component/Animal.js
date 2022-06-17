import { useState } from "react";
import Cat from "./Cat";
import Dog from "./Dog";
function Animal() {
    const [creature,Setcreature]=useState(true);
    const eventHandler=()=>{
      Setcreature(!creature)
    }
    

    return ( <div>
        {
            (creature?<Cat></Cat>:<Dog></Dog>)
        }
        <button onClick={()=>eventHandler()}>Change Creature</button>
    </div> );
}

export default Animal;