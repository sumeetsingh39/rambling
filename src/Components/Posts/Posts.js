import React from "react";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = (props) => {
  return (
    <div className="posts">
      {props.data.map((blog) => (
        <Post key={blog.id} post={blog}></Post>
      ))}
    </div>
  );
};

export default Posts;
