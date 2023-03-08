import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import "../Styles/Login.css";
import Logo from "../logo.ico";
import { login } from "../features/userSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { signInWithGoogle } from "firebase/auth";

function Login() {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Name is required before registering.");
      // return alert("Please enter a name first before registering.");
    } else if (!email) {
      setError("Email is required before registering.");
      // return alert("Please enter an email first before registering.");
    } else if (!password) {
      setError("Password is required before registering.");
      // return alert("Please enter a password first before registering.");
    } else if (!confirmPassword) {
      setError("Please confirm your password before registering.");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // else if (setEmail !== email) {
    // setError("Email is not valid");
    // return;
    // }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        console.log(userAuth);
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          dispatch(
            // type: "LOGIN",
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic,
            })
          );
        });
      })
      .catch((error) => {
        // console.log(error);
        alert(error);
      });
  };

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        // Signed in
        const user = userAuth.user;
        // console.log(user);
        dispatch (
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        )
        // window.location.href = "/";
      })
      .catch((error) => {
        // const errorCode = error.code;
        // console.log(errorCode);
        alert(error);
      });
  };

  return (
    <div className="login">
      Login
      <img src={Logo} alt="logo" />
      <form action="loginToApp">
        <input
          type="text"
          placeholder="Full Name"
          // autocomplete="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profil pic URL"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          autocomplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="New-Password"
          autocomplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          autocomplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
      <input
        type="text"
        placeholder=""
        className="error"
        disabled
        value={error}
        onChange={(e) => setError(e.target.value)}
      />
    </div>
  );
}

export default Login;
