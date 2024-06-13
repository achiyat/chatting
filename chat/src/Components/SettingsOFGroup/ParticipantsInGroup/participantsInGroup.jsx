import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./participantsInGroup.css";
import { setGroupJson } from "../../../Redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { MessageGroup, getDetails } from "../../../Objects/objDetails";

export const ParticipantsInGroup = () => {
  const groupJson = useSelector((state) => state.GroupJson);
  const reduxUser = useSelector((state) => state.User);
  const reduxMyUser = useSelector((state) => state.MyUser);
  const [searchQuery, setSearchQuery] = useState("");
  const group = groupJson[reduxUser.Id];
  const dispatch = useDispatch();

  const currentUserRole = group.Friends.find(
    (friend) => friend.PhoneNumber === reduxMyUser.Id
  )?.Status;

  //const filteredParticipants = group.Friends.filter((friend) => !friend.IfLeft);

  const filteredParticipants = group.Friends.filter(
    (friend) =>
      !friend.IfLeft &&
      (friend.FirstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        friend.LastName.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  //console.log(group);

  const removeParticipant = (user) => {
    const details = getDetails();
    console.log(user);
    const fullName = `${user.FirstName} ${user.LastName}`;
    console.log(fullName);
    console.log(group);
    const updatedFriends = group.Friends.map((friend) => {
      console.log(1);
      if (friend.PhoneNumber === user.PhoneNumber) {
        const departureDate = [
          ...friend.DepartureDate.slice(0, -1), // Remove the last item
          { DateOut: details.currentTime }, // Add the new departureDate
        ];
        //console.log(departureDate);
        return {
          ...friend,
          IfLeft: true,
          IfManager: false,
          Status: "",
          DepartureDate: departureDate,
        };
      }
      return friend;
    });

    const removedMessages = MessageGroup(
      `${reduxMyUser.Name} removed ${fullName} from the group`
    );

    const updatedGroup = {
      ...group,
      Friends: updatedFriends,
      messages: [...group.messages, removedMessages],
    };

    console.log(updatedGroup.Friends[2]);

    const updatedGroupJson = {
      ...groupJson,
      [reduxUser.Id]: updatedGroup,
    };

    dispatch(setGroupJson(updatedGroupJson));
  };

  const setAsAdmin = (user) => {
    const fullName = `${user.FirstName} ${user.LastName}`;

    const updatedFriends = group.Friends.map((friend) => {
      if (friend.PhoneNumber === user.PhoneNumber) {
        return { ...friend, Status: "Administrator" };
      }
      return friend;
    });

    const Message = MessageGroup(
      `${reduxMyUser.Name} set ${fullName} as Administrator`
    );

    const updatedGroup = {
      ...group,
      Friends: updatedFriends,
      messages: [...group.messages, Message],
    };

    console.log(updatedGroup);

    const updatedGroupJson = {
      ...groupJson,
      [reduxUser.Id]: updatedGroup,
    };
    dispatch(setGroupJson(updatedGroupJson));
  };

  const renderIcon = (icon, onClickAction) => {
    return (
      <div className="participant-borderIcon">
        <FontAwesomeIcon
          icon={icon}
          className="participant-icon"
          onClick={onClickAction}
        />
      </div>
    );
  };

  const renderParticipantOptions = (participant) => {
    if (currentUserRole === "" && participant.IfLeft) {
      return (
        <>
          {renderIcon(faTrash, () => removeParticipant(participant))}
          {renderIcon(faUserTie, () => setAsAdmin(participant))}
        </>
      );
    }
    if (
      currentUserRole === "Administrator" &&
      participant.Status !== "Principal Admin" &&
      participant.PhoneNumber !== reduxMyUser.Id
    ) {
      return (
        <>
          {renderIcon(faTrash, () => removeParticipant(participant))}
          {renderIcon(faUserTie, () => setAsAdmin(participant))}
        </>
      );
    }
    if (
      currentUserRole === "Principal Admin" &&
      participant.Status !== "Principal Admin"
    ) {
      return (
        <>
          {renderIcon(faTrash, () => removeParticipant(participant))}
          {renderIcon(faUserTie, () => setAsAdmin(participant))}
        </>
      );
    }
    return null;
  };

  return (
    <div className="participant-container">
      <h2 className="participant-title">Participants</h2>
      <input
        type="text"
        placeholder="Search by full name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="participant-search-input"
      />
      <p className="participant-label">All contacts</p>

      <div className="participant-list">
        {filteredParticipants.map((participant) => (
          <div key={participant.PhoneNumber} className="participant-item">
            <img
              src={participant.Img}
              alt={participant.FirstName}
              className="participant-image"
            />
            <div className="participant-info">
              <span className="participant-name">
                {participant.FirstName} {participant.LastName}
              </span>
              <span className="participant-status">{participant.Status}</span>
            </div>
            <div className="participant-options">
              {renderParticipantOptions(participant)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
