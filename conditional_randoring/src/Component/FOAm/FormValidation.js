import { useState } from "react";
function FormVAlidation() {
    //Form values
    const [data, setdata] = useState({
        user: "",
        email: "",
        password: ""

    });
    const [errors, setErrors] = useState("");
    const Inputchangehandler = (event) => {
        let name1 = event.target.name;
        let value1 = event.target.value;
        setdata({
            ...data,   //spread operator to store old values
            [name1]: value1,
        })
        validation(name1, value1)
    }
    const validation = (name1, value1) => {
        switch (name1) {
            case 'user':
                if (value1.length <= 4) {
                    setErrors('Username atleast have 5 letters')
                }
                else{
                    setErrors("")
                }
                break; 
                case 'password':
                    if(
                        !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value1)
                    ){
                        setErrors(
                           'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                        )
                    } 
                    else{
                        setErrors("")
                    }    
                    break;
                    case 'email':
                        if(
                            !new RegExp( /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/i).test(value1)
                        ){
                            setErrors(
                                'Enter a valid email address'
                            )
                        }else{
                          setErrors("")

                        }
                    break;
                default:console.log("not valid data");
        }
    }

        const submitHandler = (event) => {
            event.preventDefault();
            console.log(data);

        }

        return (<div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="enter username" className="input" onChange={Inputchangehandler} name="user" value={data.user}></input><br /><br />
                <p>{errors}</p>
                <input type="text" placeholder="enter email" className="input" onChange={Inputchangehandler} name="email" value={data.email}></input><br /><br />
                <input type="text" placeholder="enter password" className="input" onChange={Inputchangehandler} name="password" value={data.password}></input><br /><br />
                <button className="btn" >Submit</button>
            </form>
        </div>);
}
export default FormVAlidation;