// actionIcon.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenSquare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { TooltipIcon } from "../TooltipIcon/tooltipIcon";
import "./actionIcon.css";

export const ActionIcon = ({ onEdit, onDelete, onFavorite, canEdit }) => (
  <div>
    <div className="actionIcon-flex">
      {canEdit && (
        <TooltipIcon text="Edit Message">
          <div className="actionIcon-borderIcon" onClick={onEdit}>
            <FontAwesomeIcon icon={faPenSquare} className="actionIcon-icon" />
          </div>
        </TooltipIcon>
      )}
      <TooltipIcon text="Delete Message" placement="bottom">
        <div className="actionIcon-borderIcon" onClick={onDelete}>
          <FontAwesomeIcon icon={faTrash} className="actionIcon-icon" />
        </div>
      </TooltipIcon>
      <TooltipIcon text="Add to Favorites" placement="bottom">
        <div className="actionIcon-borderIcon" onClick={onFavorite}>
          <FontAwesomeIcon icon={faStar} className="actionIcon-icon" />
        </div>
      </TooltipIcon>
    </div>
  </div>
);
