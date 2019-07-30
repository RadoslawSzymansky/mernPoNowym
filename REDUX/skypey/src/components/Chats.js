import React, { Component } from "react";
import {editMessage, setTypingValue, isEditing, removeMessage} from '../actions/index'
import store from '../store';
const handleEdit = number=>{
  const activeUserId = store.getState().activeUserId;
  const text=  store.getState().messages[activeUserId][number].text
  store.dispatch(setTypingValue(text))
  store.dispatch(isEditing(true,number, activeUserId))
}
const deleteMessage = (number) =>{
  const activeUserId = store.getState().activeUserId;
  store.dispatch(removeMessage(number, activeUserId))
}
const Chat = ({ message }) => {
  const { text, is_user_msg , number} = message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}
    {is_user_msg? <button onClick={handleEdit.bind(null, number)}>Edit</button>: null}
    <button onClick={deleteMessage.bind(null, number)}>X</button>
    </span>
  );
};

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };
  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;