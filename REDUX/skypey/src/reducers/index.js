import user from "./user";
import contacts from "./contacts";
import {
  combineReducers
} from 'redux';
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";
import isEditing from './isEditing'
/// to bd caly state i jego klucze
// czyli oddzielne reducery, ktore sa pojedyncznymi kluczami a nie calym statem!

export default combineReducers({
  user,
  contacts,
  activeUserId,
  messages,
  typing,
  isEditing
});