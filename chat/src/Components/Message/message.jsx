import React, { useMemo } from "react";
import "./message.css";
import { useSelector } from "react-redux";
import { getFormattedTime } from "../../Objects/objDetails";

export const Message = ({ msg, searchText, onClick, selected }) => {
  const reduxMyUser = useSelector((state) => state.MyUser);
  //console.log(msg.IfDelete, msg);
  // console.log(reduxMyUser.Name);

  const isUserMessage = msg.FromUser === reduxMyUser.Name;

  const formattedTime = getFormattedTime(msg.DateTimeOfMsg);

  // Function to escape special characters in a string for use in a regular expression
  const escapeRegExp = (text) => {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  // Function to create a highlighting span
  const createHighlightSpan = (text, key) => (
    <span key={key} className="message-highlight">
      {text}
    </span>
  );

  // Function to apply highlighting to the message content
  const highlightSearchText = useMemo(() => {
    if (
      searchText &&
      msg.message.toLowerCase().includes(searchText.toLowerCase())
    ) {
      const escapedSearchText = escapeRegExp(searchText);
      const parts = msg.message.split(
        new RegExp(`(${escapedSearchText})`, "gi")
      );
      return (
        <>
          {parts.map((part, index) =>
            part.toLowerCase() === searchText.toLowerCase()
              ? createHighlightSpan(part, index)
              : part
          )}
        </>
      );
    }
    return msg.message;
  }, [searchText, msg.message]);

  if (msg.IfDelete) {
    return (
      <div
        className={`message-container ${selected ? "selected" : ""} ${
          isUserMessage ? "user-message" : "friend-message"
        }`}
        onClick={onClick}
      >
        <div className="message-body">{msg.message}</div>
      </div>
    );
  }

  if (msg.IfMessageGroup) {
    //const isMessageUser = msg.IfMessageGroup;
    return (
      <div className="message-container-center">
        <div className="message-container message-center" onClick={onClick}>
          <div className="message-body-center">{msg.message}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`message-container ${selected ? "selected" : ""} ${
        isUserMessage ? "user-message" : "friend-message"
      }`}
      onClick={onClick}
    >
      <div className="message-sender">{msg.FromUser}</div>
      <div className="message-header">
        <span className="message-body">{highlightSearchText}</span>
        <span className="message-time">{formattedTime}</span>
      </div>
    </div>
  );
};
