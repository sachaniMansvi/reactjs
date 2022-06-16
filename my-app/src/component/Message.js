import Loging from "./Loging";
import Gender from "../Gender";
import './Message.css'
function Message(props) {
    return (
        <div className="MainDiv">
            {
                props.person.map((value,index) => {
                    console.log(value.email);
                    return (
                        
                        <div className="mainDiv">
                            <div className="card">
                                {/* <img src="img_avatar.png" alt="Avatar" style={{ width: "100%" }} /> */}
                                <div className="container"  key={index}>
                                    <h4>First Name : {value.first_name}</h4>
                                    <h4>Last Name : {value.last_name}</h4>
                                    <img  className="imgDiv"src={value.url} width="100px"></img>
                                    <Loging loging={value.email}></Loging>
                                    <Gender gender={value.gender}></Gender>
                                </div>
                            </div>
                            </div>
                        
                    )

                })
            }
        </div>
    )
}

export default Message;
