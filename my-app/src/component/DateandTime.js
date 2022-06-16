function DateandTime() {
    const date = new Date()
    const Current_date = date.toLocaleDateString();
    const timeoutId = setTimeout(() => {console.log("helloworld");}, 1000);
    setInterval(() => {setTimeout
        
    }, 1000);
    return (
        <>
            <h2 style={{ color: "grey" }}>Current Date:-{Current_date   }</h2>
        </>
    )
}
export default DateandTime;