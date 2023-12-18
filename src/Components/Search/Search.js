import { Link, Navigate, redirect, useParams } from "react-router-dom";
import { data } from "../../data";
import Post from "../Post/Post";

const Search = ({ search, notify }) => {
  const { string } = useParams();
  if (!search || search.length < 3) {
    console.log("Invalid search");
    notify("Search is invalid", "error");
    return <Navigate to="/" />;
  } else {
    console.log(string);
    const filtered = data.filter((blog) =>
      blog.tags.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filtered);
    if (filtered.length) {
      return (
        <div className="posts">
          {filtered.map((blog) => (
            <Post key={blog.id} post={blog}></Post>
          ))}
        </div>
      );
    } else {
      return (
        <div className="">
          <h2>No Posts found for "{search}"</h2>
          <Link to="/">Go home</Link>
        </div>
      );
    }
  }
};

export default Search;
