import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Header = (props) => {
  const [search, setSearch] = useState("");
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const navigate = useNavigate();

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      props.setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      props.setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Searching for " + search);
      props.setSearch(search);
      navigate(`search/${search}`);
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
    <React.Fragment>
      <div className="header">
        <div className="left">
          {/* Replace with logo */}
          <Link to="/" className="logo-text">
            RAMBLING
          </Link>
        </div>
        <div className="center">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            value={search}
            onKeyDown={handleKeyDown}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="right">
          <Popup
            trigger={<button className="register"> Newsletter</button>}
            modal
          >
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
        <div className="hamburger">
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
