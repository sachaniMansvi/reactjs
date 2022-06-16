import { useState } from "react";
function Counter() {
    // use state
    let [count, setCount] = useState(5);
    let [msg, setMessage] = useState("count is not zeto");
    // css
    const stylebutton = { marginLeft: "47%", padding: "10px" }
    let eventHandler = () => {
        // alert("hello")
        setCount(count + 1)
    }
    if (count < 0) {
        setCount(0);
        setMessage("count is zero")
        // setMessage(true)
    }
    return (<div>
        <h1 style={stylebutton}>count:{count}</h1>
        <button style={stylebutton} onClick={eventHandler}>Increment</button>
        <button style={stylebutton} onClick={() => setCount(count - 1)}>Decrement</button>
        <h5>{msg}</h5>

        {/* {msg?<h5>count is zero</h5>:<h5>count is not equal to zero</h5>} */}

    </div>);
}

export default Counter;