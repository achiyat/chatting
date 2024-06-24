// window.jsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HeaderWindow } from "../HeaderWindow/headerWindow";
import { filterGroupMessagesByDate } from "../../Objects/objDetails";
import { useJsonUtils } from "../../Utils/jsonUtils";
import { FooterWindow } from "../FooterWindow/footerWindow";
import { MainWindow } from "../MainWindow/mainWindow";
import {
  updateMessagesIfDelete,
  updateMessagesIfFavorite,
  updateMessagesIfEdit,
} from "../../Utils/msgUtils";
import "./window.css";

export const Window = (props) => {
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [messageChange, setMessageChange] = useState(false); // Track whether a message was sent
  const [searchContent, setSearchContent] = useState(""); //
  const { updateChatJson, setInitialChatData } = useJsonUtils();
  const reduxMyUser = useSelector((state) => state.MyUser);
  const reduxUser = useSelector((state) => state.User);
  const chatJson = useSelector((state) => state.chatJson);
  const thisChat = chatJson[reduxUser.Id];
  const groupJson = useSelector((state) => state.GroupJson);
  const thisGroup = groupJson[reduxUser.Id];
  const isGroupContext = groupJson.hasOwnProperty(reduxUser.Id);

  // console.log(messages);

  const handleSelectMessage = (message) => {
    const isSelected = selectedMessages.some(
      (msg) =>
        msg.MessagesId === message.MessagesId &&
        msg.IdOfUser === message.IdOfUser
    );

    if (isSelected) {
      setSelectedMessages((prevSelectedMessages) =>
        prevSelectedMessages.filter(
          (msg) =>
            msg.MessagesId !== message.MessagesId ||
            msg.IdOfUser !== message.IdOfUser
        )
      );
    } else {
      setSelectedMessages((prevSelectedMessages) => [
        ...prevSelectedMessages,
        message,
      ]);
    }
  };

  const handleUpdateMessages = (updateFunction, newMessage) => {
    // console.log(selectedMessages);
    // const msgs = updateFunction(messages, selectedMessages, newMessage);
    // updateChatJson(msgs);
    updateChatJson(updateFunction(messages, selectedMessages, newMessage));
    setSelectedMessages([]);
  };

  const handleDeleteMessages = () => {
    handleUpdateMessages(updateMessagesIfDelete);
  };

  const handleMarkAsFavorite = () => {
    handleUpdateMessages(updateMessagesIfFavorite);
  };

  const handleSaveEditMessage = (newMessage) => {
    handleUpdateMessages(updateMessagesIfEdit, newMessage);
  };

  const setSearchText = (Content) => {
    setSearchContent(Content);
  };

  const handleSetMessages = (chatData) => {
    console.log("Set-Messages");
    if (chatData && chatData.messages) {
      console.log(chatData.messages);
      setMessages(chatData.messages);
    } else {
      setMessages([]);
    }
  };

  useEffect(() => {
    console.log("useEffect-1");
    console.log("Set-Messages");
    if (!isGroupContext) {
      console.log("useEffect-1", "isChat");
      setInitialChatData(chatJson);
      handleSetMessages(thisChat);
    }

    if (isGroupContext) {
      console.log("useEffect-1", "isGroup");
      setInitialChatData(groupJson);
      const newGroup = filterGroupMessagesByDate(thisGroup, reduxMyUser.Id);
      handleSetMessages(newGroup);
    }
  }, [thisChat, thisGroup]);

  return (
    <div className="window-Container">
      <header className="window-header">
        <HeaderWindow
          userName={reduxUser.Name}
          Img={reduxUser.Img}
          selectedMessages={selectedMessages}
          onDelete={handleDeleteMessages}
          onFavorite={handleMarkAsFavorite}
          onSaveMessage={handleSaveEditMessage}
          // onChange={handleDataFromSelect}
          onSearch={setSearchText}
        />
      </header>

      <main className="window-main">
        <MainWindow
          MyUser={reduxMyUser}
          messages={messages}
          searchContent={searchContent}
          selectedMessages={selectedMessages}
          handleSelectMessage={handleSelectMessage}
        />
      </main>

      <FooterWindow
        otherUser={reduxUser}
        myUser={reduxMyUser}
        group={thisGroup}
        messages={messages}
        setMessages={setMessages}
        setMessageChange={setMessageChange}
      />
    </div>
  );
};
