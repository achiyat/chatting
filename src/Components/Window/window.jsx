import React, { useState } from "react";
import { Message } from "../Message/message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./window.css";
import { HeaderWindow } from "../HeaderWindow/headerWindow";

export const Window = (props) => {
  const username = useSelector((state) => state.username);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedMessages, setSelectedMessages] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const currentTime = new Date();
      const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
      const newMessage = {
        userName: String(username),
        message: message,
        time: formattedTime,
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
    console.log(messages);
  };

  const handleSelectMessage = (index) => {
    // Toggle the selection of the message
    const isSelected = selectedMessages.includes(index);
    if (isSelected) {
      setSelectedMessages(
        selectedMessages.filter((msgIndex) => msgIndex !== index)
      );
    } else {
      setSelectedMessages([...selectedMessages, index]);
    }
    console.log(selectedMessages);
  };

  return (
    <div className="window-Container">
      <header className="window-header">
        <HeaderWindow userName={username} selectedMessages={selectedMessages} />
      </header>
      <main className="window-main">
        {messages && messages !== undefined
          ? messages.map((m, index) => {
              const isSelected = selectedMessages.includes(index);
              return (
                <Message
                  key={index}
                  user={username}
                  userName={m.userName}
                  msg={m.message}
                  time={m.time}
                  onClick={() => handleSelectMessage(index)}
                  selected={isSelected}
                />
              );
            })
          : null}
      </main>
      <footer className="window-padding">
        <div className="send-container">
          <input
            type="text"
            className="window-form-control"
            placeholder="Type the message here"
            value={message}
            onChange={handleChange}
          />
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            size="2xl"
            style={{ color: "#2fe44d" }}
            className="send-icon"
            onClick={handleSendMessage}
          />
        </div>
      </footer>
    </div>
  );
};

// const [msgs, setMsgs] = useState([
//   {
//     userName: "achiya",
//     message:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid amet",
//   },
//   {
//     userName: "achiya",
//     message: "Hi, how are you?",
//   },
// ]);
