import React from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon/>
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt=""/>
            </div>
            <div className="header_center">
                <input className="input" placeholder="Search here" type="text"/>
                <SearchIcon className="searchIcon"/>
            </div>
            <div className="header_right">
                <VideoCallIcon className="videoCall"/>
                <AppsIcon className="appsIcon"/>
                <NotificationsIcon className="notifications"/>
                <Avatar className="avatar"/>
            </div>
        </div>
    )
}

export default Header
