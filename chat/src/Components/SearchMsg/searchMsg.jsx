// searchMsg.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TooltipIcon } from "../TooltipIcon/tooltipIcon";
import { Select } from "../Select/select";
import { useSelector } from "react-redux";
import { selectJSON } from "../../Objects/jsonSelect";
import "./searchMsg.css";

export const SearchMsg = ({
  isSearchOpen,
  searchText,
  handleSearchInputChange,
  handleSearchButtonClick,
  onChange,
}) => {
  return (
    <div>
      <div className="searchMsg-flex">
        {isSearchOpen && (
          <div className="searchMsg-search-input">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleSearchInputChange}
            />
          </div>
        )}
        <TooltipIcon text="Search" placement="bottom">
          <div
            className="searchMsg-borderIcon"
            onClick={handleSearchButtonClick}
          >
            <FontAwesomeIcon icon={faSearch} className="searchMsg-icon" />
          </div>
        </TooltipIcon>
        <Select select={selectJSON.Window} />
      </div>
    </div>
  );
};
