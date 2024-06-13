import React from "react";
import "./navbarSetting.css";

export const NavbarSetting = ({ onSelectMenuItem }) => {
  return (
    <div className="navbarSetting-navbar">
      <ul>
        <li onClick={() => onSelectMenuItem("about")}>About</li>
        <li onClick={() => onSelectMenuItem("participants")}>Participants</li>
        <li onClick={() => onSelectMenuItem("addParticipant")}>
          Add Participant
        </li>
      </ul>
    </div>
  );
};
