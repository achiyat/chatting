import React from "react";
import "./modalBox.css";
import { AddFriend } from "../AddFriend/addFriend";
import { EditMessage } from "../EditMessage/editMessage";
import { CreateGroup } from "../CreateGroup/createGroup";
import { GroupSettings } from "../GroupSettings/groupSettings";

export const ModalBox = ({ onClose, onHandleFunction, option, Img }) => {
  const renderModalContent = () => {
    switch (option) {
      case "addFriend":
        return <AddFriend onClose={onClose} onSave={onHandleFunction} />;
      case "createGroup":
        return <CreateGroup onClose={onClose} onSave={onHandleFunction} />; // Render appropriate component for createGroup option
      case "GroupSettings":
        return <GroupSettings onClose={onClose} onSave={onHandleFunction} />;
      case "pic":
        return (
          <img
            className="image"
            src={Img}
            alt="User Profile"
            onClick={onClose}
          />
        );
      case "editMessage":
        return <EditMessage onSave={onHandleFunction} onCancel={onClose} />;
      default:
        return null;
    }
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up to the outer div
  };

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className="modalBox" onClick={handleCloseModal}>
      <div className="modalBox-content" onClick={handleModalClick}>
        {renderModalContent()}
      </div>
    </div>
  );
};
