import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./footerWindow.css";
import { MessageUser, handleIsRead } from "../../Utils/msgUtils";
import { useJsonUtils } from "../../Utils/jsonUtils";

export const FooterWindow = ({
  otherUser,
  myUser,
  group,
  messages,
  setMessages,
  setMessageChange,
}) => {
  const [message, setMessage] = useState("");
  const { updateChatJson } = useJsonUtils();

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newMessage = MessageUser(message, myUser);
      console.log(newMessage);
      console.log(messages);
      const updatedMessages = handleIsRead(messages);
      console.log(updatedMessages);

      updateChatJson([...updatedMessages, newMessage]);
      console.log("Set-Messages");
      setMessages([...updatedMessages, newMessage]);
      setMessage("");
      setMessageChange(true);
    }
  };

  const hasLeft =
    group?.Friends.find((friend) => friend.PhoneNumber === myUser.Id)?.IfLeft ||
    false;

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
        otherUser.Name !== "Window" && (
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
