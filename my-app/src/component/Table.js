import './App.css';
const data=[
    {name:"Mansvi",surname:"Sachani",age:"22",Gender:"female",email:"xyz@gmail.com"},
    {name:"Priyal",surname:"Ghevariya",age:"24",Gender:"female",email:"xyz@gmail.com"},
    {name:"Nensi",surname:"Khunt",age:"22",Gender:"female",email:"xyz@gmail.com"},
    {name:"Riddhi",surname:"Koladiya",age:"24",Gender:"female",email:"xyz@gmail.com"}   
]
function Table(){
    return(
        <div className="App">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                </tr>
        {
            data.map((value,key)=>{
                return(
                    <tr key={key}>
                        <td>{value.name}</td>
                        <td>{value.surname}</td>
                        <td>{value.age}</td>
                        <td>{value.Gender}</td>
                        <td>{value.email}</td>
                    </tr>
                )
            })
        }
            </table>
        </div>
    )
}
export default Table;