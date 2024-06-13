import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./box1.css";

export const Box1 = (props) => {
  return (
    <div className="p-2">
      <div className="box-container rounded p-2">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="row flex-row-reverse">
                <div className="col-6" style={{ direction: "rtl" }}>
                  <p>אחיה צוריאל</p>
                </div>
                <div className="col-6">
                  <p>23/11/23</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12" style={{ direction: "rtl" }}>
                  <p>
                    היי מה
                    שלומך??????????????????????????????????????????????????????????????
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4" style={{ direction: "rtl" }}>
              <div
                className="rounded-circle"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "gray",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// <div className="row flex-row-reverse">
// <div className="col-6" style={{ direction: "rtl" }}>

// <div className="col-4 d-flex justify-content-center align-items-center">
//   <img
//     src="file:///C:/Users/achiy/Desktop/react/Chat/chatting/img/myPIC.jpg"
//     alt="Profile"
//     style={{ width: "80px", height: "80px", borderRadius: "50%" }}
//   />
// </div>
