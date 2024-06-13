import React, { useState } from "react";
import "./editMessage.css";

export const EditMessage = ({ onSave, onCancel }) => {
  const [newMessage, setNewMessage] = useState("");
  const [isEditButtonActive, setIsEditButtonActive] = useState(false);

  const handleChange = (event) => {
    const message = event.target.value;
    setNewMessage(message);
    setIsEditButtonActive(message.trim() !== "");
  };

  const handleEdit = () => {
    if (isEditButtonActive) {
      onSave(newMessage);
    }
  };

  return (
    <div className="editMessage-overlay">
      <div className="editMessage-container">
        <h2>Edit Message</h2>
        <input type="text" value={newMessage} onChange={handleChange} />
        <button
          className="editMessage-edit-button"
          onClick={handleEdit}
          disabled={!isEditButtonActive}
        >
          Edit
        </button>
        <button className="editMessage-cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};
