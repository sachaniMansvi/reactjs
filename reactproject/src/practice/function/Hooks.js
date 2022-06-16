import './Hooks.css'
import React, { useState } from 'react';

function Hooks() {
    const [count, setCount] = useState(0);
    const Counter = () => {
        setCount(count + 1)
    };
    return (
        <div className='btn'>
            <h4>{count}</h4>
            <button onClick={Counter}>click me</button>
        </div>
    )
}
export default Hooks;