// //headerWindow.jsx
// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTrash,
//   faPenSquare,
//   faStar,
//   faSearch,
// } from "@fortawesome/free-solid-svg-icons";
// import "./headerWindow.css";
// import { Select } from "../Select/select";
// import { selectJSON } from "../../Objects/jsonSelect";
// import { ModalBox } from "../ModalBox/modalBox";
// import { TooltipIcon } from "../TooltipIcon/tooltipIcon";
// import { useSelector } from "react-redux";
// import { SearchMsg } from "../SearchMsg/searchMsg";

// export const HeaderWindow = ({
//   userName,
//   Img,
//   selectedMessages,
//   onDelete,
//   onFavorite,
//   onSaveMessage,
//   onChange,
//   onSearch,
// }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchText, setSearchText] = useState("");
//   const reduxMyUser = useSelector((state) => state.MyUser);

//   const handleSaveMessage = (newMessage) => {
//     setIsModalOpen(false);
//     onSaveMessage(newMessage);
//   };

//   const handleEditMessage = () => {
//     if (selectedMessages.length === 1) {
//       setIsModalOpen(true);
//     }
//   };

//   const handleImageClick = (e) => {
//     e.stopPropagation();
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSearchButtonClick = () => {
//     setIsSearchOpen(!isSearchOpen);
//     setSearchText("");
//   };

//   const handleSearchInputChange = (event) => {
//     setSearchText(event.target.value);
//   };

//   useEffect(() => {
//     onSearch(searchText);
//   }, [searchText]);

//   const renderIcons = () => {
//     switch (true) {
//       case userName === "Window":
//         return <div className="headerWindow-title">{userName}</div>;

//       case selectedMessages.length === 1 &&
//         !selectedMessages[0].IfDelete &&
//         selectedMessages[0].FromUser === reduxMyUser.Name:
//         return (
//           <>
//             <div>
//               <div className="headerWindow-flex">
//                 <TooltipIcon text="Edit Message">
//                   <div
//                     className="headerWindow-borderIcon"
//                     onClick={handleEditMessage}
//                   >
//                     <FontAwesomeIcon
//                       icon={faPenSquare}
//                       className="headerWindow-icon"
//                     />
//                   </div>
//                 </TooltipIcon>

//                 <TooltipIcon text="Delete Message" placement="bottom">
//                   <div className="headerWindow-borderIcon" onClick={onDelete}>
//                     <FontAwesomeIcon
//                       icon={faTrash}
//                       className="headerWindow-icon"
//                     />
//                   </div>
//                 </TooltipIcon>
//                 <TooltipIcon text="Add to Favorites" placement="bottom">
//                   <div className="headerWindow-borderIcon" onClick={onFavorite}>
//                     <FontAwesomeIcon
//                       icon={faStar}
//                       className="headerWindow-icon"
//                     />
//                   </div>
//                 </TooltipIcon>
//               </div>
//             </div>
//             <SearchMsg
//               isSearchOpen={isSearchOpen}
//               searchText={searchText}
//               handleSearchInputChange={handleSearchInputChange}
//               handleSearchButtonClick={handleSearchButtonClick}
//               onChange={onChange}
//             />
//             {/* <div>
//               <div className="headerWindow-flex">
//                 {isSearchOpen && (
//                   <div className="headerWindow-search-input">
//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       value={searchText}
//                       onChange={handleSearchInputChange}
//                     />
//                   </div>
//                 )}
//                 <TooltipIcon text="Search" placement="bottom">
//                   <div
//                     className="headerWindow-borderIcon"
//                     onClick={handleSearchButtonClick}
//                   >
//                     <FontAwesomeIcon
//                       icon={faSearch}
//                       className="headerWindow-icon"
//                     />
//                   </div>
//                 </TooltipIcon>
//                 <Select onData={onChange} select={selectJSON.Window} />
//               </div>
//             </div> */}

//             {isModalOpen && (
//               <ModalBox
//                 onClose={() => setIsModalOpen(false)}
//                 onHandleFunction={handleSaveMessage}
//                 option="editMessage"
//               />
//             )}
//           </>
//         );
//       case selectedMessages.length > 0:
//         return (
//           <>
//             <div>
//               <div className="headerWindow-flex">
//                 <TooltipIcon text="Delete Message" placement="bottom">
//                   <div className="headerWindow-borderIcon" onClick={onDelete}>
//                     <FontAwesomeIcon
//                       icon={faTrash}
//                       className="headerWindow-icon"
//                     />
//                   </div>
//                 </TooltipIcon>
//                 <TooltipIcon text="Add to Favorites" placement="bottom">
//                   <div className="headerWindow-borderIcon" onClick={onFavorite}>
//                     <FontAwesomeIcon
//                       icon={faStar}
//                       className="headerWindow-icon"
//                     />
//                   </div>
//                 </TooltipIcon>
//               </div>
//             </div>
//             <SearchMsg
//               isSearchOpen={isSearchOpen}
//               searchText={searchText}
//               handleSearchInputChange={handleSearchInputChange}
//               handleSearchButtonClick={handleSearchButtonClick}
//               onChange={onChange}
//             />
//             {/* <div>
//               <div className="headerWindow-flex">
//                 {isSearchOpen && (
//                   <div className="headerWindow-search-input">
//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       value={searchText}
//                       onChange={handleSearchInputChange}
//                     />
//                   </div>
//                 )}
//                 <TooltipIcon text="Search" placement="bottom">
//                   <div
//                     className="headerWindow-borderIcon"
//                     onClick={handleSearchButtonClick}
//                   >
//                     <FontAwesomeIcon
//                       icon={faSearch}
//                       className="headerWindow-icon"
//                     />
//                   </div>
//                 </TooltipIcon>
//                 <Select onData={onChange} select={selectJSON.Window} />
//               </div>
//             </div> */}
//           </>
//         );
//       case userName !== "Window":
//         return (
//           <>
//             <div>
//               <div className="headerWindow-flex">
//                 <div className="headerWindow-overflow">
//                   <div className="headerWindow-profile-image">
//                     <img
//                       src={Img}
//                       alt="User Profile"
//                       onClick={handleImageClick}
//                     />
//                   </div>
//                 </div>
//                 <div className="headerWindow-user">{userName}</div>
//               </div>
//             </div>
//             <SearchMsg
//               isSearchOpen={isSearchOpen}
//               searchText={searchText}
//               handleSearchInputChange={handleSearchInputChange}
//               handleSearchButtonClick={handleSearchButtonClick}
//               onChange={onChange}
//             />
//             {/* <div>
//               <div className="headerWindow-flex">
//                 {isSearchOpen && (
//                   <div className="headerWindow-search-input">
//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       value={searchText}
//                       onChange={handleSearchInputChange}
//                     />
//                   </div>
//                 )}
//                 <TooltipIcon text="Search" placement="bottom">
//                   <div
//                     className="headerWindow-borderIcon"
//                     onClick={handleSearchButtonClick}
//                   >
//                     <FontAwesomeIcon
//                       icon={faSearch}
//                       className="headerWindow-icon"
//                     />
//                   </div>
//                 </TooltipIcon>
//                 <Select onData={onChange} select={selectJSON.Window} />
//               </div>
//             </div> */}

//             {isModalOpen && (
//               <ModalBox
//                 onClose={closeModal}
//                 option={"pic"}
//                 Img={Img}
//               ></ModalBox>
//             )}
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return <div className="headerWindow-container">{renderIcons()}</div>;
// };
