import React, { useState } from "react";
import "./chats.css";
import { ChatBox } from "../ChatBox/chatBox";
import { Box } from "../AAA/box";

export const Chats = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="chats-Container">
      <header className="chats-header">Chats</header>
      <main className="chats-main">
        <ChatBox />
        <ChatBox />
        <Box />
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
