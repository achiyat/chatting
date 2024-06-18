import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./footerWindow.css";

export const FooterWindow = ({
  hasLeft,
  reduxUser,
  message,
  handleChange,
  handleSendMessage,
}) => {
  return (
    <footer
      className={
        hasLeft ? "footerWindow-comment-padding" : "footerWindow-padding"
      }
    >
      {hasLeft ? (
        <div className="footerWindow-comment">
          You have left the group so you can no longer send messages
        </div>
      ) : (
        reduxUser.Name !== "Window" && (
          <div className="footerWindow-send-container">
            <input
              type="text"
              className="footerWindow-form-control"
              placeholder="Type the message here"
              value={message}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="footerWindow-send-icon"
              onClick={handleSendMessage}
            />
          </div>
        )
      )}
    </footer>
  );
};
