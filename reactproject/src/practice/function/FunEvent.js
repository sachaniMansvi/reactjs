const nameArray=["mansvi","priyal","Riddhi"]
function NameArray() {
    return(
        <div>
            <h2>Name</h2>
            {
                nameArray.map((value)=>{
                    return(
                        <div>
                            <ul>
                                <li>{value}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default NameArray;