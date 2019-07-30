import { getMessages } from "../static-data";
import { SEND_MESSAGE , EDIT_MESSAGE, REMOVE_MESSAGE} from "../actions/constants/action-types";
import _ from 'lodash'
export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +_.keys(allUserMsgs).pop() + 1;
      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
    case EDIT_MESSAGE:
    const {activeUserId, numberToEdit,   newText} = action.payload;
    const allActiveUserMessages = state[activeUserId];
    return {
      ...state,
      [activeUserId]: {
        ...allActiveUserMessages,
        [numberToEdit]:{
          text: newText,
          number: numberToEdit,
          is_user_msg:true
        }
      }
    };
    case REMOVE_MESSAGE:
      console.log('odpalam akcje', action, state)
        const {activeUser, numberToRemove} = action.payload;
        const allMessages = state[activeUser];
        delete allMessages[numberToRemove]
        return {
          ...state,
          [activeUser]: {
            ...allMessages,
          }
        };
    default:
      return state;
  }
}