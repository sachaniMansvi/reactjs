import React,{Component} from "react";
class Calculator extends Component{
   constructor(props)
   {
    super(props)
    this.state={
        res:null,
        store:null
    }
    this.eventhandler=this.eventhandler.bind(this)
   } 
    eventhandler=(event)=>{
    event.preventDefault();
    let operand1=event.target.firstNumber.value;
    let operand2=event.target.secondNumber.value;
    let opretor=event.target.opretor.value;
    let res;
            if (opretor==="+") {
                 res=parseInt(operand1)+parseInt(operand2);
            }
             else if(opretor==="-"){
                 res=(operand1)-(operand2);
            }
            else if(opretor==="*"){
                 res=(operand1)*(operand2);
            }
            else{
                 res=(operand1)/(operand2);
            }
            console.log(res);
            return res;
   }
   render()
   {
    return(
    <div>   
    
<form onSubmit={this.eventhandler}>
    <input name="firstNumber" type="text"></input>
    <label>opreator
        <select name="opretor">
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>

        </select>
    </label>
    <input name="secondNumber" type="text"></input>
    <button>Calculator</button>
   
</form>
    </div>
    )
   }
}
export default Calculator;