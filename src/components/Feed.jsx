/** @format */
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "../css/Feed.css";
import PostOption from "./PostOption";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Feed = forwardRef(({ name, message, description, photoUrl }, ref) => {
  const user = useSelector(selectUser);

  return (
    <div className="feed" ref={ref}>
      <div className="feed-header">
        <Avatar className="feed-icon" src={user.photoUrl}>
          {user.email[0].toUpperCase()}
        </Avatar>
        <div className="feed-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="feed-body">
        <p>{message}</p>
      </div>
      <div className="feed-options">
        <PostOption title="Like" Icon={ThumbUpIcon} />
        <PostOption title="Comment" Icon={MessageIcon} />
        <PostOption title="Share" Icon={ShareIcon} />
        <PostOption title="Send" Icon={SendIcon} />
      </div>
    </div>
  );
});

export default Feed;
