import React from "react";
import "./chatBox.css";

export const ChatBox = ({ userName, time, message, onClick }) => {
  return (
    <div className="chatBox-container" onClick={onClick}>
      <div className="chatBox-profile-image"></div>
      <div className="chatBox-content">
        <div className="chatBox-flex">
          <div className="chatBox-user">{userName}</div>
          <div className="chatBox-last-message-time">{time}</div>
        </div>
        <div className="chatBox-flex">
          <div className="chatBox-message">{message}</div>
          <div className="chatBox-notifications">2</div>
        </div>
      </div>
    </div>
  );
};

//   <div className="chatBox-overflow"></div>
