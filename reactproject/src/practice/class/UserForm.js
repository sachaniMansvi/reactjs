function Register(props) {
   const btnstyle={
    color:"white",
    backgroundColor:"green",
    margin:"5px",
    padding:"5px"
   }
   let btntext;
   let passWordBoxTYpe;
   let btn
   if(props.showpass===true)
   {
    btnstyle.backgroundColor="red"
    btntext="Hide password"
    passWordBoxTYpe="text";
   }
   else{
    btnstyle.backgroundColor="green"
    btntext="Show password"
    passWordBoxTYpe="password"
   }
    return (
        <div >
            <h3>Registration form</h3>
            <form onSubmit={props.submit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="name">Name : </label></td>
                            <td> <input type="text" name="name" required></input></td>
                        </tr>
                        <tr>
                            <td> <label htmlFor="email">Email : </label></td>
                            <td><input type="text" name="email" required></input></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password : </label></td>
                            <td><input type={passWordBoxTYpe} name="password" required></input></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button>Register</button>
                               
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <button style={btnstyle} onClick={props.click}>{btntext}</button>
        </div>
    );
}

export default Register;