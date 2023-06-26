import React from "react";
import "./headerWindow.css";

export const HeaderWindow = ({ userName }) => {
  return (
    <div className="headerWindow-container">
      <div className="headerWindow-profile-image"></div>
      <div className="headerWindow-user">{userName}</div>
    </div>
  );
};
