import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenSquare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./headerWindow.css";
import myPIC from "../../img/myPIC.jpg";

export const HeaderWindow = ({ userName, selectedMessages }) => {
  const renderIcons = () => {
    if (selectedMessages.length === 1) {
      return (
        <>
          <FontAwesomeIcon
            icon={faPenSquare}
            size="xl"
            className="headerWindow-icon"
          />
          <FontAwesomeIcon
            icon={faTrash}
            size="xl"
            className="headerWindow-icon"
          />
          <FontAwesomeIcon
            icon={faStar}
            size="xl"
            className="headerWindow-icon"
          />
        </>
      );
    } else if (selectedMessages.length > 1) {
      return (
        <>
          <FontAwesomeIcon
            icon={faTrash}
            size="xl"
            className="headerWindow-icon"
          />
          <FontAwesomeIcon
            icon={faStar}
            size="xl"
            className="headerWindow-icon"
          />
        </>
      );
    } else {
      return (
        <>
          {/* <div className="headerWindow-profile-image"></div> */}
          <div className="headerWindow-overflow">
            <div className="headerWindow-profile-image">
              <img src={myPIC} alt="User Profile" />
            </div>
          </div>
          <div className="headerWindow-user">{userName}</div>
        </>
      );
    }
  };

  return <div className="headerWindow-container">{renderIcons()}</div>;
};
