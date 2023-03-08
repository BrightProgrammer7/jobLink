// import Avatar from '@mui/material/Avatar';
import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice.js";
import "../Styles/HeaderOption.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {/* HeaderOption */}
      {Icon && <Icon className="headerOption_icon" id='icon' />}
      {
        avatar && (
          // <AccountCircleIcon className="headerOption_icon" />
          <Avatar
            src={user?.photoURL ? user.photoURL : { AccountCircleIcon }}
            className="headerOption_icon" id='avatar'
          />
        )
        //  <Avatar src={user.displayName[0]} className="headerOption_icon" />
      }

      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
