import { useState } from 'react';
import './foam.css'
function Foam() {
    const [formData,setFormData]=useState({
        firstname:"",
        lastname:"",
        adress:"",
        city:"",
        state:"",
        mobile:"",
        phone:"",
        dob:"",
        gender:"",
        mail:"",
        password:"",

    })
    const handleChange=(event)=>{
       const {name,value}=event.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
   const onSubmit=(event)=>{
    event.preventDefault()

    setFormData({firstname:"",
    lastname:"",
    adress:"",
    city:"",
    state:"",
    mobile:"",
    phone:"",
    dob:"",
    gender:"",
    mail:"",
    password:"",
   })
   console.log(formData.dob);
   setCheck(
    {
        male:false,
        female:false
    }
   )
}
   const [checked,setCheck]=useState(
    {
    male:false,
    female:false
    }
   )
   const handleRadio=(e)=>{
    const {name,value}=e.target;
    console.log(e.target)
    setCheck({
        ...checked,
     [e.target.value]:true})
     
        setFormData(
            {
                ...formData,
                gender:value
            }
        )
   }

    return (
    <div className="Main_div">
        <form onSubmit={onSubmit}>
            <h2 className='heading'>Registration form</h2>
            <table>
                <tr>
                    <td>
                        <label htmlFor="firstname" className="label">FirstName : </label>
                    </td>
                    <td>
                        <input htmlFor="firstname" type="text" name="firstname" className="input" value={formData.firstname} onChange={handleChange}></input>
                    </td>
                    <td>
                        <label htmlFor="lasttname" className="label">LastName : </label>
                    </td>
                    <td><input htmlFor="Lastname" type="text" name="lastname" className="input" value={formData.lastname} onChange={handleChange}></input>

                    </td>

                </tr>
                <tr>
                    <td><label className='label'>Adress : </label></td>
                    <td colSpan={3}><input style={{ width: "93.5%" }} htmlFor="adress" type="text" name="adress" className="input" value={formData.adress} onChange={handleChange}></input></td>
                </tr>
                <tr>
                    <td></td>
                    <td colSpan={3}><input style={{ width: "93.5%" }} htmlFor="adress" type="text" name="adress" className="input" value={formData.adress} onChange={handleChange}></input></td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="city" className="label">City : </label>
                    </td>
                    <td>
                        <input htmlFor="city" type="text" name="city" className="input" value={formData.city} onChange={handleChange}></input>
                    </td>
                    <td>
                        <label htmlFor="state" className="label">State : </label>
                    </td>
                    <td>
                        <input htmlFor="state" type="text" name="state" className="input" value={formData.state} onChange={handleChange}></input>
                    </td>
                </tr>

                <tr>
                    <td>
                        <label htmlFor="mobile" className="label">Mobile No : </label>
                    </td>
                    <td>
                        <input htmlFor="mobile" type="text" name="mobile" className="input" value={formData.mobile} onChange={handleChange}></input>
                        </td>
                    <td>
                        <label htmlFor="Phone" className="label">Phone No : </label>
                    </td>
                    <td>
                        <input htmlFor="Phone" type="text" name="phone" className="input" value={formData.phone} onChange={handleChange}></input>
                        </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="dob" className="label">DOB : </label>
                        </td>
                    <td>
                        <input htmlFor="password" type="date" name="dob" className="input" value={formData.dob} onChange={handleChange}></input></td>
                    <td>
                    </td>
                    <td>
                        <label htmlFor="gender" className="label">Gender : </label>
                        <input htmlFor="gender" type="radio" name="gender" className="input" checked={checked.female} value={"female"}  onChange={handleRadio}></input>
                        <label className='label'>Female</label> 
                        <input  htmlFor="gender" type="radio" name="gender" className="input" checked={checked.male} value={"male"} onChange={handleRadio}></input><label className='label'>Male</label>
                    </td>
                </tr>

                <tr>
                    <td>
                        <label htmlFor="mail" className="label">Email : </label>
                    </td>
                    <td>
                        <input htmlFor="mail" type="email" name="mail" className="input" value={formData.mail} onChange={handleChange}></input>
                    </td>
                    <td>
                        <label htmlFor="password" className="label">Password : </label>
                    </td>
                    <td>
                        <input htmlFor="password" type="password" name="password" className="input" value={formData.password} onChange={handleChange}></input>
                    </td>
                </tr>
            </table>
            <button className='btn'>Submit</button>
        </form>
    </div>);
}

export default Foam;