import Message from "./Message";
function MailBox() {
    const message= ["hello","hey!","Good morning","Good EVEning"]
    return ( 
        <div>
            <h1>Mail-Box</h1>
            <Message unReadMessage={message}></Message>
        </div>
     );
}
export default MailBox;