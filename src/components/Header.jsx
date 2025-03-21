import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router";
export const Header = () => {
  let [buttonName, setButtonName] = useState("Login");
  useEffect(() => {
    console.log(" use effect of header is called just now ");
  }, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setButtonName(buttonName === "Login" ? "Logout" : "Login");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};
