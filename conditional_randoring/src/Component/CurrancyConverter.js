import { useEffect, useState } from 'react';
import './CurrancyConvter.css' 
function CurrancyConvter() {
    const [currancy,setCurrancy]=useState({INR:""})
    useEffect(()=>{
        let INR=Number(currancy.INR)
        console.log(INR);
    })   
    const ChangeHandler = (event) =>{
    

    }
    return ( 
        <div className="main_div">
            <div >
                <input type="text" name="INR" onInput={ChangeHandler} value={currancy.INR}></input>
                <h4> 78 INR </h4>
            </div>

            <div>
                <input type="text" name="USD" onInput={ChangeHandler} value={currancy.USD}></input>
                <h4> 1 US dollar</h4>
            </div>
        </div>
     );
    }
export default CurrancyConvter;