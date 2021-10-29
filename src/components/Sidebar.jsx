/** @format */
import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "../css/Sidebar.css";
import { selectUser } from "../features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (item, span) => {
    return (
      <div className="recent-item">
        <div className="item-left">
          <h6>{span}</h6>
        </div>
        <div className="item-right">
          <p>{item}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQWKv83Cisc2j7V1cQesJ1xv0gA0fyMiEOg&usqp=CAU"
          alt=""
        />
        <div className="sidebar-info">
          <Avatar className="sidebar-icon" src={user.photoUrl}>
            {user.email[0].toUpperCase()}
          </Avatar>
          <h3>{user.displayName}</h3>
          <h6>{user.email}</h6>
        </div>
        <div className="sidebar-stats">
          <h5>who viewed you</h5>
          <small className="stat-number">1230</small>
        </div>
        <div className="sidebar-stats">
          <h5>following you</h5>
          <small className="stat-number">230</small>
        </div>
      </div>
      <div className="sidebar-bottom">
        {recentItem("Styled-components", "#")}
        {recentItem("UI - Design", "#")}
        {recentItem("FrontEnd", "#")}
        {recentItem("BackEnd", "#")}
      </div>
    </div>
  );
};

export default Sidebar;
