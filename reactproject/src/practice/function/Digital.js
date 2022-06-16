import './Digital.css'
import React, { useState } from "react";

function Digital() {
    const date = new Date()
    const time=date.toLocaleTimeString();
    const [current_time, setcurrent_time] = useState(time);

    const setTTime=()=>{
        const date = new Date()
    const time=date.toLocaleTimeString();
        setcurrent_time(time)
    }
    setInterval(setTTime, 1000);
    return (
    <div className="clock">
            <h2>Digital clock</h2>
            <h1>{current_time}</h1>
            <button onClick={setTTime}>click to start digital clock</button>
            </div>
    )
}
export default Digital;
