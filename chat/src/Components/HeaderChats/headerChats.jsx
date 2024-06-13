import React from "react";
import { Select } from "../Select/select";
import { selectJSON } from "../../Objects/jsonSelect";
import "./headerChats.css";

export const HeaderChats = ({ onSave }) => {
  const handleDataFromSelect = (Data) => {
    console.log(Data);
    if (Data) {
      onSave(Data);
    }
  };

  return (
    <div className="headerChats-container">
      <div className="headerChats-title">Chats</div>
      <div>
        <Select onData={handleDataFromSelect} select={selectJSON.Chats} />
      </div>
    </div>
  );
};
