import React, { useState } from "react";
import "./createGroup.css";
import profile from "../../../src/media/img/profile-picture.jpg";
import { useSelector, useDispatch } from "react-redux";
import { setGroupJson } from "../../Redux/actions";
import {
  MessageGroup,
  createFriendOfGroup,
  getDetails,
} from "../../Objects/objDetails";
import { chatJSON } from "../../Objects/objChats";

export const CreateGroup = ({ onClose }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [image, setImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const reduxMyUser = useSelector((state) => state.MyUser);
  const groupJson = useSelector((state) => state.GroupJson);
  const dispatch = useDispatch();

  // const fullNames = Object.values(chatJSON).map((user) => user.FullName);
  // console.log(fullNames);

  const handleCreateGroup = () => {
    const details = getDetails();
    const isUserMessage = true;

    // Generate a unique ID for the new group
    const newGroupId = details.NewId;

    // Create the object representing the PrincipalAdmin
    const adminContact = createFriendOfGroup(reduxMyUser, isUserMessage);

    console.log(adminContact);
    console.log(filteredContacts);
    console.log(selectedContacts);
    // Get details of the selected contacts and set ifManager to false for them
    const peopleContacts = filteredContacts
      .filter((user) => selectedContacts.includes(user.PhoneNumber))
      .map((user) => createFriendOfGroup(user, !isUserMessage));

    console.log(peopleContacts);

    const userNames = peopleContacts
      .map((contact) => `${contact.FirstName} ${contact.LastName}`)
      .join(", ");

    const initialMessages = [
      MessageGroup(`${reduxMyUser.Name} created the group`),
      MessageGroup(`${reduxMyUser.Name} added ${userNames}`),
    ];

    console.log(initialMessages);

    // Add the new group to the existing GroupJSON object
    const addNewGroupToJson = {
      ...groupJson,
      [newGroupId]: {
        GroupName: groupName,
        ImgGroup: image ? URL.createObjectURL(image) : profile,
        DateTime: details.currentTime,
        Description: "description of the group",
        PrincipalAdminId: reduxMyUser.Id,
        PrincipalAdminName: `${adminContact.FirstName} ${adminContact.LastName}`, // Use the logged-in user's name as the PrincipalAdmin
        Friends: [adminContact, ...peopleContacts], // Combine PrincipalAdmin and selected contacts
        messages: initialMessages, // Add the initial messages
      },
    };

    console.log(addNewGroupToJson);

    // Dispatch an action to update the Redux state with the modified GroupJSON
    dispatch(setGroupJson(addNewGroupToJson));

    // Clear form fields after creating the group
    setGroupName("");
    setSelectedContacts([]);
    setImage(null);
    setSearchTerm("");
    onClose();
  };

  const handleContactCheckboxChange = (event, phoneNumber) => {
    if (event.target.checked) {
      setSelectedContacts((prevSelectedContacts) => [
        ...prevSelectedContacts,
        phoneNumber,
      ]);
    } else {
      setSelectedContacts((prevSelectedContacts) =>
        prevSelectedContacts.filter((contact) => contact !== phoneNumber)
      );
    }
  };

  const filteredContacts = Object.values(chatJSON).filter((user) =>
    user.FullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(filteredContacts);
  const isCreateButtonDisabled = selectedContacts.length === 0;

  return (
    <div className="createGroup-container">
      <h2>New Group</h2>
      <input
        type="text"
        placeholder="Team Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        className="createGroup-input"
      />
      <div className="createGroup-imageUpload">
        <label htmlFor="createGroup-imageUpload">
          Adding a photo to the group
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="createGroup-input"
        />
      </div>
      <button
        className="createGroup-btn"
        onClick={handleCreateGroup}
        disabled={isCreateButtonDisabled}
      >
        Create
      </button>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="createGroup-input"
      />
      <p>All contacts</p>
      <div className="createGroup-contactsList">
        {filteredContacts.map((user) => (
          <label className="createGroup-label" key={user.PhoneNumber}>
            <input
              type="checkbox"
              checked={selectedContacts.includes(user.PhoneNumber)}
              onChange={(e) => handleContactCheckboxChange(e, user.PhoneNumber)}
              className="createGroup-checkbox"
            />
            <img
              className="createGroup-img"
              src={user.Image}
              alt={user.FullName}
            />
            {user.FullName}
          </label>
        ))}
      </div>
    </div>
  );
};
