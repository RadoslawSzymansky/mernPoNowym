import React from "react";
import store from "../store";
import { setTypingValue ,sendMessage, editMessage, isEditing} from "../actions";

class MessageInput extends React.Component {
   
    handleSubmit = e => {
        e.preventDefault();
        const   state = store.getState();
        console.log(state)
        if(!state.isEditing.isEditing){
            const { typing, activeUserId } = state;
            store.dispatch(sendMessage(typing, activeUserId));
            return
        }else{
            const {msgNumber, userId} = store.getState().isEditing;
            const { typing} = state;
            store.dispatch(editMessage(  msgNumber,userId, typing))
            store.dispatch(isEditing(false))
        }
    };
    
    handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    };
    render(){
        const {value}= this.props
        return (
            <form className="Message" onSubmit={this.handleSubmit}>
                <input
                    className="Message__input"
                    onChange={this.handleChange}
                    value={value}
                    placeholder="write a message"
                />
            </form>
        );
    }
  
};

export default MessageInput;