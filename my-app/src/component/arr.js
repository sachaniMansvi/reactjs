const array = ["onion", "garlic", "potato", "tomato"]
function Arr() {
    return (
        <div className="App">
            <h2>grocery</h2>
            <ol>
                {
                    array.map((value,index) => {
                        return (

                            <div key={index} >
                                <li >{value}</li>
                            </div>
                        )
                    })
                }
            </ol>
        </div>
    )
}
export default Arr;