import {
    IS_EDITING
} from "../actions/constants/action-types";
import store from '../store'
export default function typing(state = {}, action) {

    switch (action.type) {
        case IS_EDITING:
            return {
                isEditing: action.payload.isEditing,
                msgNumber: action.payload.msgNumber,
                userId: action.payload.userId
            }
    
        default:
            return state;
    }
}