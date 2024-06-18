import React, { useEffect, useState } from "react";
import { Message } from "../Message/message";
import { useSelector } from "react-redux";
import "./window.css";
import { HeaderWindow } from "../HeaderWindow/headerWindow";
import {
  filterGroupMessagesByDate,
  getFormattedDate,
} from "../../Objects/objDetails";

import {
  updateMessagesIfDelete,
  updateMessagesIfFavorite,
  updateMessagesIfEdit,
  findFirstMessagesOfDay,
} from "../../Utils/msgUtils";
import { useJsonUtils } from "../../Utils/jsonUtils";
import { FooterWindow } from "../FooterWindow/footerWindow";

export const Window = (props) => {
  // const [message, setMessage] = useState("");
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [messageChange, setMessageChange] = useState(false); // Track whether a message was sent
  const [searchContent, setSearchContent] = useState("");
  const { updateChatJson, setInitialChatData } = useJsonUtils();
  const reduxMyUser = useSelector((state) => state.MyUser);
  const reduxUser = useSelector((state) => state.User);
  const chatJson = useSelector((state) => state.chatJson);
  const thisChat = chatJson[reduxUser.Id];
  const groupJson = useSelector((state) => state.GroupJson);
  const thisGroup = groupJson[reduxUser.Id];
  // console.log(reduxUser.Id);
  // console.log(chatJson);
  // console.log(reduxMyUser);
  // console.log(thisGroup);

  const isGroupContext = groupJson.hasOwnProperty(reduxUser.Id);

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

  const handleSetMessages = (chatData) => {
    if (chatData && chatData.messages) {
      console.log(chatData.messages);
      setMessages(chatData.messages);
    } else {
      setMessages([]);
    }
  };

  const handleUpdateMessages = (updateFunction, newMessage) => {
    const updatedMessages = updateFunction(
      messages,
      selectedMessages,
      newMessage
    );
    setMessages(updatedMessages);
    setSelectedMessages([]); // Clear the selected messages after updating
    setMessageChange(true);
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

  const handleDataFromSelect = (data) => {
    console.log(data);
    setMessages(data);
    setMessageChange(true);
  };

  const setSearchText = (Content) => {
    setSearchContent(Content);
  };

  const firstMessagesOfDay = findFirstMessagesOfDay(messages);

  const firstUnreadMessage = messages.find((m) => !m.IfRead);

  useEffect(() => {
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
  }, [reduxUser.Id, groupJson]);

  useEffect(() => {
    if (messageChange) {
      console.log("useEffect-2", "messageChange");
      updateChatJson(messages);
      setMessageChange(false);
    }
  }, [messages, messageChange]);

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
          onChange={handleDataFromSelect}
          onSearch={setSearchText}
        />
      </header>

      <main className="window-main">
        {messages
          .filter(
            (m) =>
              !m.IfRemoved && (m.IdOfUser === reduxMyUser.Id || !m.IfDelete)
          ) // Filter out removed messages and messages deleted by another user (stranger)
          .map((m, index) => {
            const formattedDate = getFormattedDate(m.DateTimeOfMsg);
            const isFirstMessageOfDay = firstMessagesOfDay[m.MessagesId];
            // console.log(messages);
            return (
              <React.Fragment key={index}>
                {firstUnreadMessage &&
                  m.MessagesId === firstUnreadMessage.MessagesId && (
                    <div className="window-UnreadMessage-separator">
                      <div className="window-unread-line">
                        <p className="window-p-Messages">Unread Messages</p>
                      </div>
                    </div>
                  )}
                {isFirstMessageOfDay && (
                  <div className="window-message-separator">
                    <div className="window-unread-line">
                      <p className="window-p-Messages">{formattedDate}</p>
                    </div>
                  </div>
                )}
                <Message
                  msg={m}
                  searchText={searchContent}
                  onClick={() => handleSelectMessage(m)}
                  selected={selectedMessages.some(
                    (msg) =>
                      msg.MessagesId === m.MessagesId &&
                      msg.IdOfUser === m.IdOfUser
                  )}
                />
              </React.Fragment>
            );
          })}
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
