// import React, { useState } from "react";
// import "./chatBox.css";
// import { ModalBox } from "../ModalBox/modalBox";

// export const ChatBox = ({ Chat, onClick }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   console.log(Chat);

//   const handleImageClick = (e) => {
//     //e.stopPropagation(); // Prevent click event from bubbling up to the container
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="chatBox-container" onClick={onClick}>
//       <div className="chatBox-overflow">
//         <div className="chatBox-profile-image">
//           <img
//             src={Chat.Img}
//             alt="User Profile"
//             onClick={handleImageClick}
//             className="chatBox-image"
//           />
//         </div>
//       </div>
//       <div className="chatBox-content">
//         <div className="chatBox-flex">
//           <div className="chatBox-user">{Chat.NameChat}</div>
//           <div className="chatBox-last-message-time">{Chat.DateTimeOfMsg}</div>
//         </div>
//         <div className="chatBox-flex">
//           <div className="chatBox-message">{Chat.message}</div>
//           {Chat.notification > 0 && (
//             <div className="chatBox-notifications">{Chat.notification}</div>
//           )}
//         </div>
//       </div>
//       {isModalOpen && (
//         <ModalBox onClose={closeModal} option={"pic"} Img={Chat.Img}></ModalBox>
//       )}
//     </div>
//   );
// };

//notif

//   <div className="chatBox-overflow"></div>

// import myPIC from "../../../media/img/myPIC.jpg";

// {/* <div className="chatBox-profile-image"></div> */}

import React, { useState } from "react";
import "./chatBox.css";
import { ModalBox } from "../ModalBox/modalBox";
import { getFormattedTime } from "../../Objects/objDetails";

export const ChatBox = ({ Chat, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (e) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formattedTime = getFormattedTime(Chat.DateTimeOfMsg);

  return (
    <div className="chatBox-container" onClick={onClick}>
      <div className="chatBox-overflow">
        <div className="chatBox-profile-image">
          <img
            src={Chat.Img}
            alt="User Profile"
            onClick={handleImageClick}
            className="chatBox-image"
          />
        </div>
      </div>
      <div className="chatBox-content">
        <div className="chatBox-flex">
          <div className="chatBox-user">{Chat.NameChat}</div>
          <div className="chatBox-last-message-time">{formattedTime}</div>
        </div>
        <div className="chatBox-flex">
          <div className="chatBox-message">{Chat.message}</div>
          {Chat.notification > 0 && (
            <div className="chatBox-notifications">{Chat.notification}</div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <ModalBox onClose={closeModal} option={"pic"} Img={Chat.Img}></ModalBox>
      )}
    </div>
  );
};
