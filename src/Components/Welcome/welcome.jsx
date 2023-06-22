import React from "react";
import "./welcome.css";
import { Window } from "../Window/window";
import { Chats } from "../Chats/chats";

export const Welcome = (props) => {
  return (
    <div className="welcome-Container">
      <div className="welcome-box-window">
        <Window />
      </div>
      <div className="welcome-box-chats">
        <Chats />
      </div>
    </div>
  );
};

// export const Welcome = (props) => {
//   return (
//     <>
//       <div className="welcome-container">
//         <div className="welcome-container__container">
//           <div className="welcome-container__row">
//             <div className="welcome-container__col">
//               <div className="welcome-container__box welcome-container__box--window">
//                 <Window />
//               </div>
//             </div>
//             <div className="welcome-container__col">
//               <div className="welcome-container__box welcome-container__box--chats">
//                 <Chats />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export const Welcome = (props) => {
//   return (
//     <>
//       <div className="container">
//         <div className="row g-0">
//           <div className="col">
//             <div className="box bg-light border scrollable-window">
//               <Window />
//             </div>
//           </div>
//           <div className="col">
//             <div
//               className="box border scrollable-chats"
//               style={{ backgroundColor: "lightgray" }}
//             >
//               <Chats />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

/* <div className="container-fluid">
  <div className="row">
    <div>
      <Window />
    </div>
    <div>
      <Chats />
    </div>
  </div>
</div>
<br></br>
<br></br>
<br></br>

<div className="container border border-dark">
  <div className="row">
    <div className="col-md-6">
      <div className="box">
        <h3>Box 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div className="col-md-6">
      <div className="box border-start border-dark">
        <h3>Box 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div> */
