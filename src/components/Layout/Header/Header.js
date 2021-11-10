import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Search from "./Search";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        />
        </Link>
      </div>
      <div className="header_center">
        <input
          onChange={(e) => setQuery(e.target.value)}
          className="input"
          placeholder="Search here"
          value={query}
          type="text"
        />
        
        <Link to={`/search/${query}`}>
        <SearchIcon className="searchIcon" />
        </Link>

        
      </div>
      <div className="header_right">
        <VideoCallIcon className="videoCall" />
        <AppsIcon className="appsIcon" />
        <NotificationsIcon className="notifications" />
        <Avatar className="avatar" />
      </div>
    </div>
  );
};

export default Header;
