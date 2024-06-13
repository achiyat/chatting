import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./addParticipant.css";
import { setGroupJson } from "../../../Redux/actions";
import { MessageGroup, getDetails } from "../../../Objects/objDetails";

export const AddParticipant = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContacts, setSelectedContacts] = useState([]);
  const dispatch = useDispatch();
  const chatJSON = useSelector((state) => state.chatJson);
  const groupJson = useSelector((state) => state.GroupJson);
  const reduxUser = useSelector((state) => state.User);
  const reduxMyUser = useSelector((state) => state.MyUser);
  const group = groupJson[reduxUser.Id];

  const participantsInGroup =
    group?.Friends.map((friend) => ({
      phoneNumber: friend.PhoneNumber,
      ifLeft: friend.IfLeft,
    })) || [];

  const fullNames = Object.values(chatJSON).map((user) => user.FullName);
  console.log(fullNames);
  console.log(group);

  const myUser = group.Friends.find(
    (friend) => friend.PhoneNumber === reduxMyUser.Id
  );

  console.log(myUser);
  const filteredContacts = Object.values(chatJSON).filter((user) =>
    user.FullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // console.log(filteredContacts);
  // console.log(group);
  console.log(selectedContacts);

  const handleAddParticipants = () => {
    const details = getDetails();

    // Define default values for JoiningDate and DepartureDate
    const joiningDate = {
      DateIn: details.currentTime,
    };

    const departureDate = { DateOut: null };

    const newParticipants = filteredContacts.filter((contact) =>
      selectedContacts.includes(contact.PhoneNumber)
    );

    const userNames = newParticipants
      .map((contact) => contact.FullName)
      .join(", ");

    console.log(newParticipants);
    console.log(userNames);

    // Generate the message with added user names
    const message = `${reduxMyUser.Name} added ${userNames}`;

    // Create the message object
    // const addedMessages = generateMessage(details, message);
    const addedMessages = MessageGroup(message);
    console.log(addedMessages);
    console.log(newParticipants);
    console.log(userNames);

    // Separate existing friends (to update) and new friends
    const updatedFriends = [];
    const newFriends = [];

    newParticipants.forEach((contact) => {
      const existingFriendIndex = group.Friends.findIndex(
        (friend) => friend.PhoneNumber === contact.PhoneNumber
      );
      console.log(contact);
      console.log(existingFriendIndex);

      if (existingFriendIndex !== -1) {
        console.log(1111);

        // Update DepartureDate and JoiningDate arrays for existing friend
        group.Friends[existingFriendIndex] = {
          ...group.Friends[existingFriendIndex],
          IfLeft: false,
          DepartureDate: [
            ...group.Friends[existingFriendIndex].DepartureDate,
            departureDate,
          ],
          JoiningDate: [
            ...group.Friends[existingFriendIndex].JoiningDate,
            joiningDate,
          ],
        };

        updatedFriends.push(group.Friends[existingFriendIndex]);
      } else {
        console.log(2222);
        // Add new friend with default values
        newFriends.push({
          PhoneNumber: contact.PhoneNumber,
          FirstName: contact.FirstName,
          LastName: contact.LastName,
          Img: contact.Image,
          IfManager: false,
          Status: "",
          IfLeft: false,
          DepartureDate: [departureDate],
          JoiningDate: [joiningDate],
        });
      }
    });

    const updatedGroup = {
      ...group,
      Friends: [...group.Friends, ...newFriends],
      messages: [...group.messages, addedMessages],
    };

    console.log(updatedGroup.Friends[2]);
    console.log(updatedGroup.Friends);

    const updatedGroupJson = {
      ...groupJson,
      [reduxUser.Id]: updatedGroup,
    };

    setSelectedContacts([]);

    dispatch(setGroupJson(updatedGroupJson));
  };

  const handleContactToggle = (phoneNumber, ifLeft) => {
    if (
      !participantsInGroup.some(
        (participant) =>
          participant.phoneNumber === phoneNumber &&
          (!participant.ifLeft || ifLeft)
      )
    ) {
      setSelectedContacts((prevSelected) => {
        if (prevSelected.includes(phoneNumber)) {
          return prevSelected.filter(
            (selectedPhone) => selectedPhone !== phoneNumber
          );
        } else {
          return [...prevSelected, phoneNumber];
        }
      });
    }

    // console.log(selectedContacts);
  };
  console.log(!myUser.IfManager);
  console.log(!myUser.IfLeft && !myUser.IfManager);

  return (
    <div className="addParticipant-container">
      <h2 className="addParticipant-title">Add Participant</h2>
      <input
        type="text"
        placeholder="Search"
        className="addParticipant-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <p className="addParticipant-label">All contacts</p>

      <div className="addParticipant-contacts-list">
        {filteredContacts.map((user) => (
          <div key={user.FullName} className="addParticipant-contactList-item">
            {participantsInGroup.some(
              (participant) =>
                participant.phoneNumber === user.PhoneNumber &&
                !participant.ifLeft
            ) ? (
              <img
                src={user.Image}
                alt={user.FullName}
                className="addParticipant-contactList-img"
              />
            ) : (
              <>
                {!myUser.IfLeft && myUser.IfManager && (
                  <input
                    type="checkbox"
                    defaultChecked={selectedContacts.includes(user.PhoneNumber)}
                    readOnly={participantsInGroup.some(
                      (participant) =>
                        participant.phoneNumber === user.PhoneNumber &&
                        !participant.ifLeft
                    )}
                    onClick={() =>
                      handleContactToggle(user.PhoneNumber, user.IfLeft)
                    }
                  />
                )}
                <img
                  src={user.Image}
                  alt={user.FullName}
                  className="addParticipant-contactList-img"
                />
              </>
            )}
            <p className="addParticipant-contactList-fullname">
              {user.FullName}
            </p>
          </div>
        ))}
      </div>

      <button
        className={`addParticipant-button ${
          selectedContacts.length === 0 ? "inactive" : ""
        }`}
        onClick={handleAddParticipants}
        disabled={selectedContacts.length === 0}
      >
        Add
      </button>
    </div>
  );
};
