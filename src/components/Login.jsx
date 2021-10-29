/** @format */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/Login.css";
import { login } from "../features/userSlice";
import { auth } from "../firebase";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const Register = () => {
    if (!name) {
      return alert("please provide a full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                displayName: name,
                uid: userAuth.user.uid,
                photoUrl: profilePic,
                email: userAuth.user.email,
              })
            );
          });
      })
      .catch((err) => alert(err.message));
  };

  const Login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            displayName: userAuth.user.displayName,
            uid: userAuth.user.uid,
            profileUrl: userAuth.user.photoURL,
            email: userAuth.user.email,
          })
        );
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <form>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile Pic Url Optional"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={Login}>Login</button>
      </form>{" "}
      <p>Not a member ?</p>
      <span onClick={Register}>Register</span>
    </div>
  );
};

export default Login;
