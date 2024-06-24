// favorites.jsx
import React from "react";
import { Message } from "../Message/message";
import "./favorites.css";
import { useSelector } from "react-redux";

export const Favorites = (props) => {
  const reduxUser = useSelector((state) => state.User);
  const groupJson = useSelector((state) => state.GroupJson);
  const chatJSON = useSelector((state) => state.chatJson);
  const isGroupContext = groupJson.hasOwnProperty(reduxUser.Id);

  const messages = isGroupContext
    ? groupJson[reduxUser.Id].messages
    : chatJSON[reduxUser.Id].messages;

  console.log(messages);

  const favoriteMessages = messages.filter(
    (msg) => msg.IfFavorite && !msg.IfDelete
  );
  console.log(favoriteMessages);
  // <Message key={msg.id} msg={msg} />
  return (
    <div className="favorites-container">
      {favoriteMessages.length > 0 ? (
        favoriteMessages.map((msg) => <Message msg={msg} />)
      ) : (
        <div className="favorites-display">
          <div className="favorites-no-message">
            There are no favorite messages.
          </div>
        </div>
      )}
    </div>
  );
};
