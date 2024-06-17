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
// import myIMG from "../../media/img/myIMG.jpg";

// const userReducer = (
//   state = { Name: "Window", Id: null, Img: null },
//   action
// ) => {
//   switch (action.type) {
//     case SET_USER_DETAILS:
//       console.log(action.payload);
//       console.log(action.payload.Id);
//       console.log(action.payload.Name);
//       console.log(action.payload.Img);
//       return {
//         ...state,
//         Id: action.payload.id,
//         Name: action.payload.username,
//         Img: action.payload.img,
//       };
//     default:
//       return state;
//   }
// };

// const userReducer = (
//   state = { Name: "Window", Id: null, Img: null },
//   action
// ) => {
//   switch (action.type) {
//     case SET_USER_DETAILS:
//       return {
//         ...state,
//         Id: action.payload.Id,
//         Name: action.payload.Name,
//         Img: action.payload.Img,
//       };
//     default:
//       return state;
//   }
// };

// const myUserReducer = (
//   state = { Name: "achiya", Id: "308", Img: myIMG },
//   action
// ) => {
//   switch (action.type) {
//     case SET_MY_USER:
//       return {
//         ...state,
//         Id: action.payload.id,
//         Name: action.payload.username,
//         Img: action.payload.img,
//       };
//     default:
//       return state;
//   }
// };

const userReducer = (state = User, action) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      // console.log(action.payload);
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

// User1: userReducer1,
// MyUser1: myUserReducer1,
