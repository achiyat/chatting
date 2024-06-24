import React from "react";
import "./modalBox.css";
import { AddFriend } from "../AddFriend/addFriend";
import { EditMessage } from "../EditMessage/editMessage";
import { CreateGroup } from "../CreateGroup/createGroup";
import { GroupSettings } from "../GroupSettings/groupSettings";
import { Favorites } from "../Favorites/favorites";

export const ModalBox = ({ onClose, onHandleFunction, option, Img }) => {
  const renderModalContent = () => {
    switch (option) {
      case "addFriend":
        return <AddFriend onClose={onClose} />;
      case "createGroup":
        return <CreateGroup onClose={onClose} />; // Render appropriate component for createGroup option
      case "groupSettings":
        return <GroupSettings />;
      case "favorites":
        return <Favorites />;
      case "pic":
        return (
          <div className="modalBox-image">
            <img src={Img} alt="User Profile" onClick={onClose} />
          </div>
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
