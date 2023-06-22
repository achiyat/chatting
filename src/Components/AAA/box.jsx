import React from "react";
import "./box.css";

export const Box = () => {
  return (
    <div className="example-padding">
      <div className="box-container">
        <div className="example-box">
          <div className="example-left-side">
            <div className="example-top-row">
              <p className="example-margin-0 example-date">23/11/23</p>
              <p className="example-margin-0 example-title">אחיה צוריאל</p>
            </div>
            <div className="example-top-row">
              <p className="example-margin-0 example-Notifications">
                Notifications
              </p>
              <p className="example-margin-0 example-comment">
                היי מה שלומך??היי מה שלומך??היי מה שלומך??היי מה שלומך??היי מה
                שלומך??היי מה שלומך??היי מה שלומך??היי מה שלומך??היי מה שלומך??
              </p>
            </div>
          </div>
          <div className="example-right-side">
            <div className="example-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
