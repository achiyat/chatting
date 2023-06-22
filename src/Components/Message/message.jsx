import React from "react";
import "./message.css";

export const Message = () => {
  return (
    <div className="message-container">
      <div className="message-header">
        <span className="message-sender">ACHIYA</span>
        <span className="message-time">14:00</span>
      </div>
      <div className="message-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, harum.
        Quae delectus iusto ad sapiente?
      </div>
    </div>
  );
};
