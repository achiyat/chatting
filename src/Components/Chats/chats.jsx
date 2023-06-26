import React, { useState } from "react";
import "./chats.css";
import { ChatBox } from "../ChatBox/chatBox";
import { useDispatch } from "react-redux";
import { setUsername } from "../../Redux/actions";

export const Chats = (props) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [chats, setChats] = useState([
    {
      userName: "User Name",
      time: "12:34 PM",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid amet",
    },
    {
      userName: "achiya",
      time: "16:00 PM",
      message: "Hi, how are you?",
    },
  ]);

  // Get the first userName from the chats array, or use "Window" if the array is empty
  const firstUserName = chats.length > 0 ? chats[0].userName : "Window";

  // Dispatch the setUsername action to set the initial username in the Redux store
  dispatch(setUsername(firstUserName));

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleChatBoxClick = (userName) => {
    console.log(userName);
    dispatch(setUsername(userName));
  };

  return (
    <div className="chats-Container">
      <header className="chats-header">Chats</header>
      <main className="chats-main">
        {chats && chats !== undefined
          ? chats.map((c) => {
              return (
                <ChatBox
                  key={c.userName}
                  userName={c.userName}
                  time={c.time}
                  message={c.message}
                  onClick={() => handleChatBoxClick(c.userName)}
                />
              );
            })
          : null}
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
