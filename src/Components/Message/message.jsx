import React from "react";
import "./message.css";

export const Message = ({ userName, msg }) => {
  return (
    <div className="message-container">
      <div className="message-header">
        <span className="message-sender">{userName}</span>
        <span className="message-time">14:00</span>
      </div>
      <div className="message-body">{msg}</div>
    </div>
  );
};
