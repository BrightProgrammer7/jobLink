import React from "react";
import "./Styles/App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widget from "./Components/Widget";
import Login from "./Components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is signed in.
        dispatch(
          login({
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            email: userAuth.email,
            photoURL: userAuth.photoURL,
            // emailVerified: user.emailVerified,
          })
        );
        // console.log("user is signed in");
      } else {
        // user is signed out.
        dispatch(logout());
        // console.log("user is signed out");
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {/* <header className="app-header">
        <h1>Hello JobLink</h1>
      </header> */}
      {/* Header */}
      <Header />
      {/* App Body */}
      {!user ? (
        <Login />
      ) : (
        <div className="appBody">
          {/* SideBar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
