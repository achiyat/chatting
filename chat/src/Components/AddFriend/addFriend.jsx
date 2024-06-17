import React, { useState } from "react";
import "./addFriend.css";
import { users } from "../../Objects/objUsers";
import profile from "../../../media/img/profile-picture.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setChatsJson } from "../../Redux/actions";

export const AddFriend = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState(null);
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(false);
  const chatJSON = useSelector((state) => state.chatJson);

  const dispatch = useDispatch();

  const AddNewUser = () => {
    const newUser = {
      PhoneNumber: phoneNumber,
      FirstName: firstName,
      LastName: lastName,
      FullName:
        firstName && lastName ? `${firstName} ${lastName}` : phoneNumber,
      Img: image ? URL.createObjectURL(image) : profile,
    };

    console.log(newUser);

    if (newUser && newUser.PhoneNumber) {
      const userExists = users.some(
        (user) => user.PhoneNumber === newUser.PhoneNumber
      );

      console.log(userExists);

      if (userExists) {
        SaveUser(newUser);
      }
    }

    onClose();
  };

  const SaveUser = async (friendData) => {
    if (friendData) {
      const updatedChatJSON = {
        ...chatJSON,
        [friendData.PhoneNumber]: {
          PhoneNumber: friendData.PhoneNumber,
          FirstName: friendData.FirstName,
          LastName: friendData.LastName,
          FullName: friendData.FullName,
          Image: friendData.Img,
          messages: [],
        },
      };
      dispatch(setChatsJson(updatedChatJSON));
    }
  };

  const handleSave = () => {
    if (isSaveButtonActive) {
      AddNewUser();
    }
  };

  const handleChange = (event) => {
    const phoneNumber = event.target.value;
    setPhoneNumber(phoneNumber);
    setIsSaveButtonActive(phoneNumber.trim() !== "");
  };

  return (
    <div className="addFriend-container">
      <h2>New Contact</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="addFriend-input"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="addFriend-input"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={handleChange}
        className="addFriend-input"
      />
      <div className="addFriend-imageUpload">
        <label htmlFor="addFriend-imageUpload">Add a photo</label>
        <input
          type="file"
          id="addFriend-imageUpload"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="addFriend-input"
        />
      </div>
      {image && (
        <img
          className="addFriend-preview"
          src={URL.createObjectURL(image)}
          alt="Preview"
        />
      )}
      <button
        className="addFriend-SaveBtn"
        onClick={handleSave}
        disabled={!isSaveButtonActive}
      >
        Save
      </button>
      <button className="addFriend-CloseBtn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

// const newChat = {
//   IdChat: friendData.PhoneNumber,
//   FirstName: friendData.FirstName,
//   LastName: friendData.LastName,
//   NameChat: friendData.FullName,
//   img: friendData.Img,
//   TimeOfMsg: "",
//   DateOfMsg: "",
//   message: "",
//   notification: 0,
// };

// const newChat = {
//   FirstName: friendData.FirstName,
//   LastName: friendData.LastName,
//   FullName: friendData.FullName,
//   Image: friendData.Img,
//   messages: [],
// };
// console.log(newChat);

//setChats((prevChats) => [...prevChats, newChat]);
//await addChatToJSON(newChat);
// chatJSON[friendData.PhoneNumber] = newChat;
// console.log(chatJSON);
// console.log(newChat);
