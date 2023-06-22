import React, { useState } from "react";
import "./window.css";
import { Message } from "../Message/message";

export const Window = (props) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="window-Container">
      <header className="window-header">Window</header>
      <main className="window-main">
        <Message />
        <Message />
      </main>
      <footer className="window-padding">
        <input
          type="text"
          className="window-form-control"
          placeholder="Type the message here"
          value={message}
          onChange={handleChange}
        />
      </footer>
    </div>
  );
};

// {
//   /* <div className="window-border window-border-dark window-myContainer window-d-flex window-flex-column"> */
// }
// {
//   /* <header className="window-p-2 window-border-bottom window-border-dark"> */
// }
// {
//   /* <main className="window-overflow-auto window-border-bottom window-border-dark window-custom-main"> */
// }
