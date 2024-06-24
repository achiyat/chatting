import React, { useState } from "react";
import "./groupSettings.css";
import { AddParticipant } from "../SettingsOFGroup/AddParticipant/addParticipant";
import { ParticipantsInGroup } from "../SettingsOFGroup/ParticipantsInGroup/participantsInGroup";
import { AboutOfGroup } from "../SettingsOFGroup/AboutOfGroup/aboutOfGroup";
import { NavbarSetting } from "../SettingsOFGroup/NavbarSetting/navbarSetting";
export const GroupSettings = (props) => {
  const [selectedComponent, setSelectedComponent] = useState("about");

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "about":
        return <AboutOfGroup />;
      case "participants":
        return <ParticipantsInGroup />;
      case "addParticipant":
        return <AddParticipant />;
      default:
        return null;
    }
  };

  return (
    <div className="groupSettings-container">
      <NavbarSetting onSelectMenuItem={setSelectedComponent} />
      <div className="groupSettings-main-content">
        {renderSelectedComponent()}
      </div>
    </div>
  );
};
