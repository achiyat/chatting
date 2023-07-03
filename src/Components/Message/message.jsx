// import React from "react";
// import "./message.css";

// export const Message = ({ user, userName, msg, time, onClick, selected }) => {
//   return (
//     <div
//       className={`message-container ${selected ? "selected" : ""}`}
//       onClick={onClick}
//     >
//       <div className="message-header">
//         <span className="message-sender">{userName}</span>
//         <span className="message-time">{time}</span>
//       </div>
//       <div className="message-body">{msg}</div>
//     </div>
//   );
// };

import React from "react";
import "./message.css";

export const Message = ({ user, userName, msg, time, onClick, selected }) => {
  const isUserMessage = userName === user;

  return (
    <div
      className={`message-container ${selected ? "selected" : ""} ${
        isUserMessage ? "user-message" : "friend-message"
      }`}
      onClick={onClick}
    >
      <div className="message-header">
        <span className="message-sender">{userName}</span>
        <span className="message-time">{time}</span>
      </div>
      <div className="message-body">{msg}</div>
    </div>
  );
};
