function CalFunction() {
    let eventHandler = (event) => {
        event.preventDefault()
        let operand1 = event.target.firstName.value;
        console.log(operand1)
        let operator = event.target.operator.value;
        console.log(operator)
        let operand2 = event.target.secondName.value;
        console.log(operand2)
        let res;

        if (operator === "+") {
            res = parseInt(operand1) + parseInt(operand2)
        }
        else if (operator === "-") {
            res = operand1 - operand2;
        }
        else if (operator === "*") {
            res = operand1 + operand2;
        }
        else {
            res = operand1 / operand2;
        }
        console.log(res);
        return res;
    }
    let returnValue = eventHandler();
    return (
        <div>Hello
            <form onSubmit={eventHandler}>
                <input name="firstName" type="text"></input>
                <label>
                    <select name="operator">
                        <option>+</option>
                        <option>-</option>
                        <option>*</option>
                        <option>/</option>
                    </select>
                </label>
                <input name="secondName" type="text"></input>
                <button>calculate</button>
            </form>
        </div>
    )
}
export default CalFunction;