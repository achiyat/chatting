// rootReducer.js

import { combineReducers } from "redux";
import {
  SET_USER_DETAILS,
  SET_CHATS_JSON,
  SET_GROUP_JSON,
  SET_MY_USER,
} from "./actions";
import { chatJSON } from "../Objects/objChats";
import { GroupJSON } from "../Objects/jsonGroup";
import { MyUser, User } from "../Objects/objUsers";

const userReducer = (state = User, action) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

const myUserReducer = (state = MyUser, action) => {
  switch (action.type) {
    case SET_MY_USER:
      return action.payload;
    default:
      return state;
  }
};

const chatJsonReducer = (state = chatJSON, action) => {
  switch (action.type) {
    case SET_CHATS_JSON:
      return action.payload;
    default:
      return state;
  }
};

const groupJsonReducer = (state = GroupJSON, action) => {
  switch (action.type) {
    case SET_GROUP_JSON:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  User: userReducer,
  MyUser: myUserReducer,
  chatJson: chatJsonReducer,
  GroupJson: groupJsonReducer,
});

export default rootReducer;
