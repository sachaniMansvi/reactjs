// import React, { useState } from "react"
function DarkMode() {
    let light=false;
    console.log(light);
 const stylebutton={marginLeft:"45%", padding:"10px"}
  let Darkmode=()=>{
    light=!light
    console.log(light);
    if(light===true)
    {
       document.body.style.background="grey"
    }
    else{
       document.body.style.background="green"
    }
 }

     
    return ( 
        <div>
            <h3 style={stylebutton}>hello world</h3>
            <button style={stylebutton} onClick={()=>Darkmode()}>change color</button>
        </div>
        
     );
}
export default DarkMode;