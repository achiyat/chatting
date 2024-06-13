import React from "react";
import "./tooltipIcon.css";

export const TooltipIcon = ({ text, children }) => {
  return (
    <div className="tooltip" data-tooltip={text}>
      {children}
    </div>
  );
};
