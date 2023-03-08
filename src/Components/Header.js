import React from "react";
import "../Styles/Header.css";
import HeaderOption from "./HeaderOption";
import Logo from "../logo.ico";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    // dispatch({ type: "SET_PROFILE_OPEN", payload: true });
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("logged out");
        // dispatch({ type: "SET_PROFILE_OPEN", payload: false });
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        // dispatch({ type: "SET_ERROR", payload: error });
      });
  };

  return (
    <div className="header">
      {/* <h1>Hello Header</h1> */}

      <div className="navbar_left">
        <img src={Logo} alt="Logo" />
        <div className="searchbar">
          {/* SearchIcon */}
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            name="searcher"
            id="searcher"
          />
        </div>
      </div>

      <div className="navbar_right">
        {/* NavBarIcons */}
        <div className="icons">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        </div>
        <div className="avatar">
          <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
        </div>
      </div>
    </div>
  );
}

export default Header;
