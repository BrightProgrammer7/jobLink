import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice.js";
import "../Styles/Sidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_item">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      {/* <h1>Hello SideBar</h1> */}
      <div className="side_top">
        <img src="https://picsum.photos/500/500" alt="backimg" />
        <Avatar
          src={user?.photoURL ? user.photoURL : { AccountCircleIcon }}
          className="sidebar_avatar"
        />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="side_stats">
        <div className="side_stat">
          <p>Profil Views</p>
          <p className="stat_number">2,543</p>
        </div>
        <div className="side_stat">
          <p>Posts Views</p>
          <p className="stat_number">5,543</p>
        </div>
      </div>
      <div className="side_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("software enginnering")}
        {recentItem("developement")}
        {recentItem("design")}
        {recentItem("programming")}
      </div>
    </div>
  );
}

export default Sidebar;
