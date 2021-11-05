import React from 'react'
import SidebarRow from './SidebarRow';
import './SideBar.css';
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

const SideBar = () => {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={ExploreIcon} title="Explore"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More"/>
            <hr/>
        </div>
    )
}

export default SideBar
