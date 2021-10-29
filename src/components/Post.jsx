/** @format */
import React, { useEffect, useState } from "react";
import "../css/Post.css";
import CreateIcon from "@mui/icons-material/Create";
import PostOption from "./PostOption";
import PhotoIcon from "@mui/icons-material/Photo";
import VideocamIcon from "@mui/icons-material/Videocam";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArticleIcon from "@mui/icons-material/Article";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { db } from "../firebase";
import firebase from "firebase/compat";
import FlipMove from "react-flip-move";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  const handlePost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      message: input,
      description: user.email,
      photoUrl: user.photoUrl || "",
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("")
  };

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      ))
  }, []);

  return (
    <div className="post">
      <div className="post-header">
        <div className="header-inputz">
          <form onSubmit={handlePost}>
              <CreateIcon className="write-icon" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>
        <div className="header-option">
          <PostOption title="Photo" Icon={PhotoIcon} color="lightblue" />
          <PostOption title="Video" Icon={VideocamIcon} color="lightgreen" />
          <PostOption title="Event" Icon={CalendarTodayIcon} color="orange" />
          <PostOption title="Article" Icon={ArticleIcon} color="pink" />
        </div>
      </div>
      <div className="post-feed">
        <FlipMove>
          {posts.map(
            ({ id, data: { name, description, message, photoUrl } }) => (
              <Feed
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            )
          )}
        </FlipMove>
      </div>
    </div>
  );
};

export default Post;
