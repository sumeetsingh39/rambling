import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import parse from "html-react-parser";

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.image} alt="post_image" />
      <div className="content">
        <h1>{post.blog_title}</h1>
        <p className="post-desc">{parse(post.blog_content)}</p>
        <div className="post-footer">
          <desc>{post.publish_date}</desc>
          <Link to={`/rambling/blog/${post.id}`} className="button">
            Read
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
