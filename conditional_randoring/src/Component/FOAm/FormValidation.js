import { useState } from "react";
function FormVAlidation() {
    //Form values
    const [data, setdata] = useState({ user: "", email: "", password: "" });
    const [errors, setErrors] = useState({ user: "", email: "", password: "" });

    const Inputchangehandler = (event) => {
        let name1 = event.target.name;
        let value1 = event.target.value;
        //spread operator to store old values
        setdata({ ...data, [name1]: value1 })
        // call function by passing perameter
        validation(name1, value1)
    }
    const validation = (name1, value1) => {
        switch (name1) {
            case 'user':
                {
                    value1.length <= 4 ?
                    setErrors({ ...errors, user: "Username atleast have 5 letters'" }) :
                    setErrors({ ...errors, user: "" })
                }
                break;
            case 'password':
                if (
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value1)
                ) {
                    setErrors({ ...errors, password: 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers' })
                } else {
                    setErrors({ ...errors, password: "" })
                }
                break;
            case 'email':
                if (
                    !new RegExp(/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/i).test(value1)
                ) {
                    setErrors({ ...errors, email: 'Enter a valid email address' })
                }
                else {
                    setErrors({ ...errors, email: "" })
                }
                break;
            default: console.log("not valid data");
        }
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(data);
    }
    return (<div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="enter username" className="input" onChange={Inputchangehandler} name="user" value={data.user} required></input><br />
            <p style={{ color: "red", fontSize: "13px" }}>{errors.user}</p>
            <input type="text" placeholder="enter email" className="input" onChange={Inputchangehandler} name="email" value={data.email} required></input><br />
            <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>
            <input type="text" placeholder="enter password" className="input" onChange={Inputchangehandler} name="password" value={data.password} required></input><br />
            <p style={{ color: "red", fontSize: "13px" }}>{errors.password}</p>
            <button className="btn" style={{marginLeft:"29%"}}>Submit</button>
        </form>
    </div>);
}
export default FormVAlidation;