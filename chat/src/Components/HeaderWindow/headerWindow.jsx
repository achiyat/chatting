//headerWindow.jsx
import React, { useEffect, useState } from "react";
import "./headerWindow.css";
import { ModalBox } from "../ModalBox/modalBox";
import { useSelector } from "react-redux";
import { SearchMsg } from "../SearchMsg/searchMsg";
import { ActionIcon } from "../ActionIcon/actionIcon";

export const HeaderWindow = ({
  userName,
  Img,
  selectedMessages,
  onDelete,
  onFavorite,
  onSaveMessage,
  // onChange,
  onSearch,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const reduxMyUser = useSelector((state) => state.MyUser);

  const handleSaveMessage = (newMessage) => {
    setIsModalOpen(false);
    onSaveMessage(newMessage);
  };

  const handleEditMessage = () => {
    if (selectedMessages.length === 1) {
      setIsModalOpen(true);
    }
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleSearchButtonClick = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchText("");
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    onSearch(searchText);
  }, [searchText]);

  const canEdit =
    selectedMessages.length === 1 &&
    !selectedMessages[0].IfDelete &&
    selectedMessages[0].FromUser === reduxMyUser.Name;

  const renderIcons = () => {
    if (userName === "Window") {
      return <div className="headerWindow-title">{userName}</div>;
    }

    if (userName !== "Window") {
      return (
        <>
          <div>
            {selectedMessages.length > 0 && (
              <ActionIcon
                onEdit={canEdit ? handleEditMessage : null}
                onDelete={onDelete}
                onFavorite={onFavorite}
                canEdit={canEdit}
              />
            )}
            {selectedMessages.length === 0 && (
              <div className="headerWindow-flex">
                <div className="headerWindow-overflow">
                  <div className="headerWindow-profile-image">
                    <img
                      src={Img}
                      alt="User Profile"
                      onClick={handleImageClick}
                    />
                  </div>
                </div>
                <div className="headerWindow-user">{userName}</div>
              </div>
            )}
          </div>
          <SearchMsg
            isSearchOpen={isSearchOpen}
            searchText={searchText}
            handleSearchInputChange={handleSearchInputChange}
            handleSearchButtonClick={handleSearchButtonClick}
            // onChange={onChange}
          />
          {isModalOpen && (
            <ModalBox
              onClose={() => setIsModalOpen(false)}
              onHandleFunction={handleSaveMessage}
              option={canEdit ? "editMessage" : "pic"}
              Img={Img}
            />
          )}
        </>
      );
    }

    return null;
  };

  return <div className="headerWindow-container">{renderIcons()}</div>;
};
