// import React, { useState } from "react";
// import { users } from "../../Objects/objUsers";
// import "./groupSettings.css";
// import { useSelector } from "react-redux";

// export const GroupSettings = ({ onClose }) => {
//   const groupJson = useSelector((state) => state.GroupJson);
//   const reduxUser = useSelector((state) => state.User);

//   const [newGroupName, setNewGroupName] = useState(
//     groupJson[reduxUser.Id].GroupName
//   );

//   const handleGroupNameChange = (event) => {
//     setNewGroupName(event.target.value);
//   };

//   const handleSaveGroupName = () => {
//     // Logic to save the new group name
//     // Update the groupData.GroupName with the newGroupName
//   };

//   const handleAddAdministrator = (phoneNumber) => {
//     // Logic to add an administrator
//     // Update the groupData.Managers array with the new administrator
//   };

//   const handleRemoveManager = (phoneNumber) => {
//     // Logic to remove a manager
//     // Remove the manager from the groupData.Managers array
//   };

//   const handleAddUser = (phoneNumber) => {
//     // Logic to add a user to the group
//     // Update the groupData.Friends array with the new user
//   };

//   const handleLeaveGroup = () => {
//     // Logic to leave the group
//     // Remove the users from the groupData.Friends array
//   };

//   return (
//     <div className="group-settings">
//       <h2>Group Settings</h2>
//       <div>
//         <label>Group Name:</label>
//         <input
//           type="text"
//           value={newGroupName}
//           onChange={handleGroupNameChange}
//         />
//         <button onClick={handleSaveGroupName}>Save</button>
//       </div>
//       {/* Display list of administrators */}
//       <ul>
//         Administrators:
//         {groupJson[reduxUser.Id].Managers.map((manager) => (
//           <li key={manager.PhoneNumber}>{manager.FirstName}</li>
//         ))}
//       </ul>
//       {/* Display list of members */}
//       <ul>
//         Members:
//         {groupJson[reduxUser.Id].Friends.map((member) => (
//           <li key={member.PhoneNumber}>{member.FirstName}</li>
//         ))}
//       </ul>
//       <div>
//         {/* Show options based on user roles */}
//         {users.IfManager && (
//           <div>
//             {/* Add Administrator */}
//             <button
//               onClick={() => handleAddAdministrator("newAdminPhoneNumber")}
//             >
//               Add Administrator
//             </button>
//             {/* Remove Manager */}
//             <button onClick={() => handleRemoveManager("managerPhoneNumber")}>
//               Remove Manager
//             </button>
//           </div>
//         )}
//         {/* Add User */}
//         <button onClick={() => handleAddUser("newUserPhoneNumber")}>
//           Add User
//         </button>
//         {/* Leave Group */}
//         <button onClick={handleLeaveGroup}>Leave Group</button>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import "./groupSettings.css";
import { AddParticipant } from "../SettingsOFGroup/AddParticipant/addParticipant";
import { ParticipantsInGroup } from "../SettingsOFGroup/ParticipantsInGroup/participantsInGroup";
import { AboutOfGroup } from "../SettingsOFGroup/AboutOfGroup/aboutOfGroup";
import { NavbarSetting } from "../SettingsOFGroup/NavbarSetting/navbarSetting";
export const GroupSettings = ({ onClose }) => {
  const [selectedComponent, setSelectedComponent] = useState("about");

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "about":
        return <AboutOfGroup />;
      case "participants":
        return <ParticipantsInGroup />;
      case "addParticipant":
        return <AddParticipant />;
      default:
        return null;
    }
  };

  return (
    <div className="groupSettings-container">
      <NavbarSetting onSelectMenuItem={setSelectedComponent} />
      <div className="groupSettings-main-content">
        {renderSelectedComponent()}
      </div>
    </div>
  );
};
