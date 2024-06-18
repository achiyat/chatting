// mainWindow.jsx
import React from "react";
import { Message } from "../Message/message";
import { getFormattedDate } from "../../Objects/objDetails";
import { findFirstMessagesOfDay } from "../../Utils/msgUtils";
import "./mainWindow.css";

export const MainWindow = ({
  MyUser,
  messages,
  searchContent,
  selectedMessages,
  handleSelectMessage,
}) => {
  const firstMessagesOfDay = findFirstMessagesOfDay(messages);
  const firstUnreadMessage = messages.find((m) => !m.IfRead);

  return (
    <main className="mainWindow-main">
      {messages
        .filter(
          (m) => !m.IfRemoved && (m.IdOfUser === MyUser.Id || !m.IfDelete)
        ) // Filter out removed messages and messages deleted by another user (stranger)
        .map((m, index) => {
          const formattedDate = getFormattedDate(m.DateTimeOfMsg);
          const isFirstMessageOfDay = firstMessagesOfDay[m.MessagesId];
          return (
            <React.Fragment key={index}>
              {firstUnreadMessage &&
                m.MessagesId === firstUnreadMessage.MessagesId && (
                  <div className="mainWindow-UnreadMessage-separator">
                    <div className="mainWindow-unread-line">
                      <p className="mainWindow-p-Messages">Unread Messages</p>
                    </div>
                  </div>
                )}
              {isFirstMessageOfDay && (
                <div className="mainWindow-message-separator">
                  <div className="mainWindow-unread-line">
                    <p className="mainWindow-p-Messages">{formattedDate}</p>
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
  );
};
