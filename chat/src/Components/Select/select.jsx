//select.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { ModalBox } from "../ModalBox/modalBox";
import "./select.css";
import { useSelector } from "react-redux";
import { useJsonUtils } from "../../Utils/jsonUtils";

export const Select = ({ select }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const reduxUser = useSelector((state) => state.User);
  const groupJson = useSelector((state) => state.GroupJson);
  const isGroupContext = groupJson.hasOwnProperty(reduxUser.Id);

  const { updateChatJson } = useJsonUtils();

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    if (
      option === "addFriend" ||
      option === "createGroup" ||
      option === "groupSettings"
    ) {
      console.log(option);
      setIsOpen(false);
      setSelectedOption(option);
    }

    if (option === "delete") {
      ClearAllChat();
    }

    if (option === "favorites") {
      setSelectedOption(option);
    }

    if (option === "groupSettings") {
      console.log(option);
    }
  };

  const ClearAllChat = () => {
    updateChatJson([]);
    setSelectedOption(null);
  };

  const closeModal = () => {
    setSelectedOption(null);
  };

  const handleDropdownBlur = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`select-dropdown ${isOpen ? "open" : ""}`}
        onClick={handleButtonClick}
        onBlur={handleDropdownBlur}
        tabIndex={0}
      >
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          size="lg"
          className="select-dropdown-icon"
        />
        <ul className="select-dropdown-menu">
          {select.Options.map(
            (o) =>
              (isGroupContext || o.option !== "groupSettings") && (
                <li key={o.id} onClick={() => handleOptionSelect(o.option)}>
                  {o.title}
                </li>
              )
          )}
        </ul>
      </div>

      {selectedOption && (
        <ModalBox onClose={closeModal} option={selectedOption} />
      )}
    </>
  );
};
