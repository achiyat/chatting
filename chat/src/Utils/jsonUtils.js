// // jsonUtils.js
// import { useSelector, useDispatch } from "react-redux";
// import { setChatsJson, setGroupJson } from "../../Redux/actions";

// const dispatch = useDispatch();
// const reduxUser = useSelector((state) => state.User);
// const chatJson = useSelector((state) => state.chatJson);
// const thisChat = chatJson[reduxUser.Id];

// const groupJson = useSelector((state) => state.GroupJson);
// const thisGroup = groupJson[reduxUser.Id];
// const isGroupContext = groupJson.hasOwnProperty(reduxUser.Id);

// export const updateChatJson = (msgs) => {
//   console.log("updateChatJson");
//   if (msgs !== undefined && msgs.length > 0) {
//     const jsonData = thisChat ? chatJson : groupJson;
//     const chatData = thisChat ? thisChat : thisGroup;

//     const updatedChatData = {
//       ...jsonData,
//       [reduxUser.Id]: {
//         ...chatData,
//         messages: [...msgs],
//       },
//     };
//     console.log(updatedChatData);
//     setInitialChatData(updatedChatData);
//   }
// };

// export const setInitialChatData = (dataJSON) => {
//   console.log("setInitialChatData");
//   if (!isGroupContext) {
//     console.log("dispatch");
//     dispatch(setChatsJson(dataJSON));
//   }

//   if (isGroupContext) {
//     dispatch(setGroupJson(dataJSON));
//   }
// };

// export const JsonUtils = () => {
//   const dispatch = useDispatch();
//   const reduxUser = useSelector((state) => state.User);
//   const chatJson = useSelector((state) => state.chatJson);
//   const thisChat = chatJson[reduxUser.Id];

//   const groupJson = useSelector((state) => state.GroupJson);
//   const thisGroup = groupJson[reduxUser.Id];
//   const isGroupContext = groupJson.hasOwnProperty(reduxUser.Id);

//   const updateChatJson = () => {
//     console.log("updateChatJson");
//     if (messages !== undefined && messages.length > 0) {
//       const jsonData = thisChat ? chatJson : groupJson;
//       const chatData = thisChat ? thisChat : thisGroup;

//       const updatedChatData = {
//         ...jsonData,
//         [reduxUser.Id]: {
//           ...chatData,
//           messages: [...messages],
//         },
//       };
//       console.log(updatedChatData);
//       setInitialChatData(updatedChatData);
//     }
//   };

//   const setInitialChatData = (dataJSON) => {
//     console.log("setInitialChatData");
//     if (!isGroupContext) {
//       console.log("dispatch");
//       dispatch(setChatsJson(dataJSON));
//     }

//     if (isGroupContext) {
//       dispatch(setGroupJson(dataJSON));
//     }
//   };
// };

// if (messages !== undefined && messages.length > 0) {
//   const jsonData = thisChat ? chatJson : groupJson;
//   const chatData = thisChat ? thisChat : thisGroup;

//   const updatedChatData = {
//     ...jsonData,
//     [reduxUser.Id]: {
//       ...chatData,
//       messages: [...messages],
//     },
//   };

//   console.log(updatedChatData);
//   setInitialChatData(updatedChatData);

//   if (!isGroupContext) {
//     console.log("dispatch");
//     dispatch(setChatsJson(updatedChatData));
//   }

//   if (isGroupContext) {
//     dispatch(setGroupJson(updatedChatData));
//   }

// }

// jsonUtils.js
// import { useSelector, useDispatch } from "react-redux";
// import { setChatsJson, setGroupJson } from "../../Redux/actions";

import { useDispatch, useSelector } from "react-redux";
import { setChatsJson, setGroupJson } from "../Redux/actions";

export const useJsonUtils = () => {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.User);
  const chatJson = useSelector((state) => state.chatJson);
  const thisChat = chatJson[reduxUser.Id];

  const groupJson = useSelector((state) => state.GroupJson);
  const thisGroup = groupJson[reduxUser.Id];
  const isGroupContext = groupJson.hasOwnProperty(reduxUser.Id);

  const updateChatJson = (messages) => {
    console.log("updateChatJson");
    console.log(messages);
    // if (messages !== undefined && messages.length > 0) {
    if (1 === 1) {
      const jsonData = thisChat ? chatJson : groupJson;
      const chatData = thisChat ? thisChat : thisGroup;

      const updatedChatData = {
        ...jsonData,
        [reduxUser.Id]: {
          ...chatData,
          messages: [...messages],
        },
      };
      console.log(updatedChatData);
      setInitialChatData(updatedChatData);
    }
  };

  const setInitialChatData = (dataJSON) => {
    console.log("setInitialChatData");
    if (!isGroupContext) {
      dispatch(setChatsJson(dataJSON));
    }

    if (isGroupContext) {
      dispatch(setGroupJson(dataJSON));
    }
  };

  return {
    updateChatJson,
    setInitialChatData,
  };
};
