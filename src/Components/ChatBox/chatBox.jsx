import React from "react";
import "./chatBox.css";

export const ChatBox = () => {
  return (
    <div className="chatBox-container">
      <div className="chatBox-profile-image"></div>
      <div className="chatBox-content">
        <div className="chatBox-flex">
          <div className="chatBox-user">User Name</div>
          <div className="chatBox-last-message-time">12:34 PM</div>
        </div>
        <div className="chatBox-flex">
          <div className="chatBox-message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit aliquid amet quia iste similique nostrum numquam
            doloremque ipsam provident ratione veritatis corporis sequi
            explicabo, sed facere inventore rerum ipsum temporibus. Ut debitis
            asperiores, ad adipisci fugiat repudiandae illum impedit laborum
            minus nemo perspiciatis tempora qui quidem sint similique alias
            voluptatem facilis porro saepe. Culpa aspernatur minima dicta
            accusamus incidunt soluta eos labore dolore quos! Doloribus amet,
            ipsum, ab, distinctio dolor perspiciatis velit culpa sed nesciunt
            corrupti repudiandae temporibus. Similique incidunt, laborum libero
            doloremque, aut sed delectus fugit asperiores deleniti rem ut quidem
            numquam, in illo perferendis. Amet, voluptates? Ducimus, eaque.
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            nesciunt quidem minima repudiandae accusantium commodi quo? Fugiat,
            autem ad quas natus illum, facilis cum eos repellat minus totam
            commodi voluptate obcaecati corrupti neque! Quae repellendus harum
            aut nesciunt officiis, delectus ipsum, molestiae soluta sit illo ad
            vitae, consequuntur aspernatur tempora? */}
          </div>
          <div className="chatBox-notifications">2</div>
        </div>
      </div>
    </div>
  );
};

// export const ChatBox = () => {
//   return (
//     <div className="chatBox-container">
//       <div className="chatBox-profile-image"></div>
//       <div className="chatBox-content">
//         <div className="chatBox-flex">
//           <div className="chatBox-user">User Name</div>
//           <div className="chatBox-last-message-time">12:34 PM</div>
//         </div>
//         <div className="chatBox-flex">
//           <div className="chatBox-message">
//             <p className="chatBox-comment">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
//               corporis enim doloremque itaque cumque beatae!
//             </p>
//           </div>
//           <div className="chatBox-notifications">2</div>
//         </div>
//       </div>
//     </div>
//   );
// };

//   <div className="chatBox-overflow"></div>
