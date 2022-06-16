function Message(props) {
    const unReadMessage=props.unReadMessage

    return ( <div>
        <h1>hello Manasvi,</h1>
        {unReadMessage.length>0 &&
          <h1> you have {unReadMessage.length} Unseen Message</h1>
          }
      
    </div> );
}

export default Message;