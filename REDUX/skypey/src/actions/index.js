import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE, EDIT_MESSAGE, IS_EDITING, REMOVE_MESSAGE} from "./constants/action-types";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});


export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
})
export const sendMessage = (message, userId) => {
  return ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
})}

export const editMessage = ( numberToEdit,activeUserId, newText) => ({
  type: EDIT_MESSAGE,
  payload: {
    activeUserId,
    numberToEdit,
    newText
  }
})
export const isEditing = (isEditing, msgNumber, userId) =>({
  type: IS_EDITING,
  payload: {
    isEditing,
    msgNumber,
    userId
  }
})
export const removeMessage = ( numberToRemove, activeUser) => ({
  type: REMOVE_MESSAGE,
  payload: {
    activeUser,
    numberToRemove,
  }
})