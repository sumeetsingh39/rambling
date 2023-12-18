import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "./Sidebar.css";

const Sidebar = (props) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Searching for " + search);
      props.setSearch(search);
      navigate(`/rambling/search/${search}`);
    }
  };
  const handleKeyDownEmail = (event) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(event);
    if (event.key === "Enter") {
      if (event.target.value.match(validRegex)) {
        props.notify(`${event.target.value} submitted successfully`, "success");
      } else {
        props.notify("Enter valid email!!", "warning");
      }
    }
  };
  return (
    <div className="sidebar">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        value={search}
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearch(e.target.value)}
      />
      <hr />
      <Popup trigger={<button className="register"> Newsletter</button>} modal>
        {(close) => (
          <div className="modal">
            {" "}
            <div className="close" onClick={close}>
              {" "}
              &times;{" "}
            </div>{" "}
            <div className="header"> Register for newsletter </div>{" "}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onKeyDown={handleKeyDownEmail}
            />
          </div>
        )}
      </Popup>
    </div>
  );
};

export default Sidebar;
