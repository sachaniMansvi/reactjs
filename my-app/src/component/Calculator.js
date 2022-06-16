let number1 = prompt("Enter first Number");
let number2 = prompt("Enter Second Number");
function Calculator(props) {
    let res;
    {
        if (props.plus) {
           
            console.log(number1 + number2)
        }
    }
    return (
        <div>
            <select>
                <option>Aerithmetic opreator</option>
                <option value={"+"}>+</option>
                <option value={"-"}>-</option>
                <option value={"*"}>*</option>
                <option value={"/"}>/</option>
            </select>
        </div>
    )
}
export default Calculator;