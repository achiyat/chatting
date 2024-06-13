import React, { useEffect, useState } from "react";
import "./chats.css";
import { ChatBox } from "../ChatBox/chatBox";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserDetails,
  setChatsJson,
  setGroupJson,
} from "../../Redux/actions";
import { HeaderChats } from "../HeaderChats/headerChats";
import { getDetails } from "../../Objects/objDetails";

export const Chats = (props) => {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.User);
  const chatJSON = useSelector((state) => state.chatJson);
  const groupJson = useSelector((state) => state.GroupJson);
  const [searchQuery, setSearchQuery] = useState("");
  const [chats, setChats] = useState([]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterChats = (chats, query) => {
    if (query.trim() === "") {
      return chats; // Return all chats when the search query is empty
    } else {
      return chats.filter(
        (chat) =>
          chat.NameChat &&
          chat.NameChat.toLowerCase().includes(query.toLowerCase())
      ); // Filter chats based on the search query
    }
  };

  const handleChatBoxClick = async (id, FullName, img) => {
    // console.log(id, FullName);
    // console.log(reduxUser.Id);
    if (reduxUser.Id !== null) {
      await updateChatInJSON(reduxUser.Id);
    }
    updatedChats(id);
    dispatch(setUserDetails(id, FullName, img));
  };

  const updatedChats = (id) => {
    const updatedChats = chats.map((chat) => {
      if (chat.IdChat === id) {
        return {
          ...chat,
          notification: 0,
        };
      }
      return chat;
    });
    setChats(updatedChats);
  };

  const updateChatInJSON = async (id) => {
    let updatedChatData;

    if (chatJSON[id]) {
      // If the user's chatJSON already exists, update it with new messages
      updatedChatData = {
        ...chatJSON,
        [id]: {
          ...chatJSON[id],
          messages: chatJSON[id].messages.map((message) => ({
            ...message,
            IfRead: true,
          })),
        },
      };

      // Dispatch an action to update the chatJSON state in Redux
      dispatch(setChatsJson(updatedChatData));
    } else {
      // If the user's chatJSON doesn't exist, use the groupJson instead
      updatedChatData = {
        ...groupJson,
        [id]: {
          ...groupJson[id],
          messages: groupJson[id].messages.map((message) => ({
            ...message,
            IfRead: true,
          })),
        },
      };

      //Dispatch an action to update the Redux state with the modified GroupJSON
      dispatch(setGroupJson(updatedChatData));
    }
  };

  const initializeJSONS = (jsonData, isGroup = false) => {
    const details = getDetails();

    if (jsonData) {
      return Object.entries(jsonData).map(([chatId, chat]) => {
        const lastNonRemovedMessageIndex = chat.messages
          ? chat.messages
              .slice()
              .reverse()
              .findIndex((message) => !message.IfRemoved)
          : -1;

        const lastMessage =
          chat.messages && chat.messages.length > 0
            ? chat.messages[
                lastNonRemovedMessageIndex >= 0
                  ? chat.messages.length - 1 - lastNonRemovedMessageIndex
                  : chat.messages.length - 1
              ]
            : {
                DateTimeOfMsg: details.currentTime,
                message: "",
              };

        const UnreadUser = chat.messages
          ? chat.messages.filter((message) => !message.IfRead).length
          : 0;

        const UnreadGroup = chat.messages
          ? chat.messages.filter(
              (message) => !message.IfRead && message.IfMessageGroup
            ).length
          : 0;

        return {
          IdChat: chatId,
          NameChat: isGroup ? chat.GroupName || "" : chat.FullName || "",
          Img: isGroup ? chat.ImgGroup || "" : chat.Image || "",
          DateTimeOfMsg: lastMessage.DateTimeOfMsg || "",
          message: lastMessage.message,
          notification: UnreadUser - UnreadGroup,
        };
      });
    } else {
      return [];
    }
  };

  const filteredChats = filterChats(chats, searchQuery);

  useEffect(() => {
    const chatChats = initializeJSONS(chatJSON, false);
    const groupChats = initializeJSONS(groupJson, true);

    // Concatenate the chatChats and groupChats arrays
    const combinedChats = [...chatChats, ...groupChats];

    setChats(combinedChats);
  }, [chatJSON, groupJson]);

  return (
    <div className="chats-Container">
      <header className="chats-header">
        <HeaderChats />
      </header>
      <main className="chats-main">
        {filteredChats.map((c) => (
          <ChatBox
            Chat={c}
            onClick={() => handleChatBoxClick(c.IdChat, c.NameChat, c.Img)}
          />
        ))}
      </main>
      <footer className="chats-padding">
        <input
          type="text"
          className="chats-form-control"
          placeholder="Chat search"
          value={searchQuery}
          onChange={handleChange}
        />
      </footer>
    </div>
  );
};

// const [isDataSave, setIsDataSave] = useState(false);

// {
//   /* <HeaderChats onSave={handleSaveData} /> */
// }
// const handleSaveData = (groupData) => {
//   console.log(groupData);
//   console.log(chats);
//   if (groupData) {
//     //setIsDataSave(groupData);
//   }
// };
