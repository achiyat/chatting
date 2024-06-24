import React from "react";
import { Select } from "../Select/select";
import { selectJSON } from "../../Objects/jsonSelect";
import "./headerChats.css";

export const HeaderChats = ({ onSave }) => {
  return (
    <div className="headerChats-container">
      <div className="headerChats-title">Chats</div>
      <div>
        <Select select={selectJSON.Chats} />
      </div>
    </div>
  );
};
