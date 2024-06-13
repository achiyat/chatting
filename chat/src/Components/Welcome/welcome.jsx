import React from "react";
import "./welcome.css";
import { Window } from "../Window/window";
import { Chats } from "../Chats/chats";

export const Welcome = (props) => {
  return (
    <div className="welcome-Container">
      <div className="welcome-box-window">
        <Window />
      </div>
      <div className="welcome-box-chats">
        <Chats />
      </div>
    </div>
  );
};
