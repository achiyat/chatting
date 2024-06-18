import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setGroupJson, setUserDetails } from "../../../Redux/actions";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./aboutOfGroup.css";
import {
  getDetails,
  getFormattedDate,
  getFormattedTime,
} from "../../../Objects/objDetails";
import { MessageGroup } from "../../../Utils/msgUtils";

export const AboutOfGroup = () => {
  const groupJson = useSelector((state) => state.GroupJson);
  const reduxUser = useSelector((state) => state.User);
  const reduxMyUser = useSelector((state) => state.MyUser);
  const group = groupJson[reduxUser.Id];
  const dispatch = useDispatch();

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [groupName, setGroupName] = useState(group.GroupName);
  const [groupDescription, setGroupDescription] = useState(group.Description);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  console.log(group);
  const handleSelectNewAdmin = (selectedUserId) => {
    setSelectedAdmin((prevSelectedAdmin) => {
      if (prevSelectedAdmin === selectedUserId) {
        return null;
      } else {
        return selectedUserId;
      }
    });
  };

  const handleAdminChange = (newAdminId) => {
    console.log(group);

    const NewAdmin = group.Friends.find(
      (friend) => friend.PhoneNumber === newAdminId
    );

    console.log(NewAdmin);

    const setAdminMessage = MessageGroup(
      `${reduxMyUser.Name} transferred the position of Principal Admin to ${NewAdmin.FirstName} ${NewAdmin.LastName}, ${reduxMyUser.Name} is no longer an administrator`
    );

    console.log(setAdminMessage);

    const updatedFriends = group.Friends.map((friend) => {
      if (friend.PhoneNumber === newAdminId) {
        return { ...friend, Status: "Principal Admin" };
      } else if (friend.PhoneNumber === reduxMyUser.Id) {
        return { ...friend, Status: "" };
      }
      return friend;
    });

    const updatedGroup = {
      ...group,
      Friends: updatedFriends,
      messages: [...group.messages, setAdminMessage],
    };
    const updatedGroupJson = { ...groupJson, [reduxUser.Id]: updatedGroup };

    console.log(updatedGroup);
    dispatch(setGroupJson(updatedGroupJson));
    setSelectedAdmin(null);
  };

  const handleLeaveGroup = () => {
    if (selectedAdmin && selectedAdmin !== reduxUser.Id) {
      handleAdminChange(selectedAdmin);
    }

    if (reduxUser.Id !== group.PrincipalAdminId) {
      const details = getDetails();

      const leaveMessage = MessageGroup(
        `${reduxMyUser.Name} has left the group`
      );

      const updatedFriends = group.Friends.map((friend) => {
        if (friend.PhoneNumber === reduxMyUser.Id) {
          const departureDate = [
            ...friend.DepartureDate.slice(0, -1), // Remove the last item
            { DateOut: details.currentTime }, // Add the new departureDate
          ];

          return {
            ...friend,
            IfLeft: true,
            IfManager: false,
            Status: "",
            DepartureDate: departureDate,
            // JoiningDate: friend.JoiningDate,
          };
        }
        return friend;
      });

      const updatedGroup = {
        ...group,
        Friends: updatedFriends,
        messages: [...group.messages, leaveMessage],
      };

      const updatedGroupJson = {
        ...groupJson,
        [reduxUser.Id]: updatedGroup,
      };

      dispatch(setGroupJson(updatedGroupJson));
    }
  };

  const canSaveChanges =
    groupName !== group.GroupName ||
    groupDescription !== group.Description ||
    selectedImage !== null;

  useEffect(() => {
    if (selectedImage) {
      handleSaveChanges();
      setSelectedImage(null);
    }
  }, [selectedImage]);

  const handleSaveChanges = () => {
    const updatedGroup = {
      ...group,
      GroupName: groupName,
      Description: groupDescription,
      ImgGroup: selectedImage
        ? URL.createObjectURL(selectedImage)
        : group.ImgGroup,
    };

    const updatedGroupJson = {
      ...groupJson,
      [reduxUser.Id]: updatedGroup,
    };

    dispatch(setGroupJson(updatedGroupJson));
    dispatch(
      setUserDetails(
        reduxUser.Id,
        groupName,
        selectedImage ? URL.createObjectURL(selectedImage) : group.ImgGroup
      )
    );

    setIsEditingName(false);
    setIsEditingDescription(false);
  };

  const handleCloseEditing = () => {
    setIsEditingName(false);
    setIsEditingDescription(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const date = getFormattedDate(group.DateTime);
  const time = getFormattedTime(group.DateTime);

  return (
    <div className="aboutGroup-container">
      <div className="aboutGroup-container-image">
        <label className="aboutGroup-label">
          <img
            src={
              selectedImage
                ? URL.createObjectURL(selectedImage)
                : group.ImgGroup
            }
            alt="Group"
            className="aboutGroup-image"
          />
          <input
            type="file"
            accept="image/*"
            className="aboutGroup-input-img"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <div className="aboutGroup-samp-container">
        {isEditingName ? (
          <>
            <input
              type="text"
              className="aboutGroup-input-txt"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
            <button
              className="aboutGroup-save aboutGroup-btn"
              disabled={!canSaveChanges}
              onClick={handleSaveChanges}
            >
              Save
            </button>
            <button
              className="aboutGroup-close aboutGroup-btn"
              onClick={handleCloseEditing}
            >
              Close
            </button>
          </>
        ) : (
          <>
            <samp>{groupName}</samp>
            <button
              className="aboutGroup-edit"
              onClick={() => setIsEditingName(true)}
            >
              <FontAwesomeIcon icon={faPen} className="aboutGroup-icon" />
            </button>
          </>
        )}
      </div>
      <p>
        Created on {date} {time}
      </p>
      <div className="aboutGroup-samp-container">
        {isEditingDescription ? (
          <>
            <textarea
              className="aboutGroup-input-txt"
              value={groupDescription}
              onChange={(e) => setGroupDescription(e.target.value)}
            />
            <button
              className="aboutGroup-save aboutGroup-btn"
              disabled={!canSaveChanges}
              onClick={handleSaveChanges}
            >
              Save
            </button>
            <button
              className="aboutGroup-close aboutGroup-btn"
              onClick={() => setIsEditingDescription(false)}
            >
              Close
            </button>
          </>
        ) : (
          <>
            <samp>{groupDescription}</samp>
            <button
              className="aboutGroup-edit"
              onClick={() => setIsEditingDescription(true)}
            >
              <FontAwesomeIcon icon={faPen} className="aboutGroup-icon" />
            </button>
          </>
        )}
      </div>

      {group.Friends.find(
        (friend) =>
          friend.Status === "Principal Admin" &&
          friend.PhoneNumber === reduxMyUser.Id
      ) && (
        <>
          <p className="aboutGroup-p-Note">
            You cannot leave the group because you are "Principal Admin", If you
            want to leave the group, you must first transfer the role to one of
            the users!
          </p>
          <div className="aboutGroup-adminSelection">
            <p>Select New Admin:</p>
            <ul>
              {group.Friends.map(
                (friend) =>
                  friend.Status !== "Principal Admin" && (
                    <li key={friend.PhoneNumber}>
                      <input
                        type="checkbox"
                        className="aboutGroup-checkbox"
                        checked={selectedAdmin === friend.PhoneNumber}
                        onChange={() =>
                          handleSelectNewAdmin(friend.PhoneNumber)
                        }
                        disabled={friend.Status === "Principal Admin"}
                      />
                      <span>
                        {friend.FirstName} {friend.LastName}
                      </span>
                    </li>
                  )
              )}
            </ul>
          </div>
          <button
            className="aboutGroup-changeAdmin aboutGroup-btn"
            onClick={() => handleAdminChange(selectedAdmin)}
            disabled={!selectedAdmin || selectedAdmin === reduxMyUser.Id}
          >
            Change Admin
          </button>
        </>
      )}

      {group.Friends.find(
        (friend) =>
          friend.Status !== "Principal Admin" &&
          friend.PhoneNumber === reduxMyUser.Id &&
          !friend.IfLeft
      ) ? (
        <button
          className="aboutGroup-leaveGroup aboutGroup-btn"
          onClick={handleLeaveGroup}
        >
          Leave Group
        </button>
      ) : group.Friends.find(
          (friend) =>
            friend.Status !== "Principal Admin" &&
            friend.PhoneNumber === reduxMyUser.Id &&
            friend.IfLeft
        ) ? (
        <p className="aboutGroup-p-Note">
          You have left the group, you cannot write or perform actions in the
          group!
        </p>
      ) : null}
    </div>
  );
};
