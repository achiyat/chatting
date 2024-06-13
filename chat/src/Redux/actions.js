// actions.js

export const SET_USER_DETAILS = "SET_USER_DETAILS";

export const setUserDetails = (id, name, img) => {
  const user_details = {
    Name: name,
    Id: id,
    Img: img,
  };

  return {
    type: SET_USER_DETAILS,
    payload: user_details,
  };
};

export const SET_MY_USER = "SET_MY_USER";
export const setMyUser = (id, name, img) => {
  const my_user_details = {
    Name: name,
    Id: id,
    Img: img,
  };
  return {
    type: SET_MY_USER,
    payload: my_user_details,
  };
};

export const SET_CHATS_JSON = "SET_CHATS_JSON";
export const setChatsJson = (newChatsJson) => {
  return {
    type: SET_CHATS_JSON,
    payload: newChatsJson,
  };
};

export const SET_GROUP_JSON = "SET_GROUP_JSON";
export const setGroupJson = (newGroupJson) => {
  return {
    type: SET_GROUP_JSON,
    payload: newGroupJson,
  };
};

// export const setUserDetails = (id, username, img) => {
//   // console.log(img);
//   // console.log(id, username);
//   return {
//     type: SET_USER_DETAILS,
//     payload: { id, username, img },
//   };
// };

// export const setMyUser = (id, username, img) => {
//   return {
//     type: SET_MY_USER,
//     payload: { id, username, img },
//   };
// };
