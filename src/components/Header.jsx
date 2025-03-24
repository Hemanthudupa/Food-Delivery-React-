import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header = () => {
  let [buttonName, setButtonName] = useState("Login");

  const navigate = useNavigate();
  const status = useOnlineStatus();
  return (
    <div
      className="header"
      style={{ backgroundColor: status ? "green" : "red" }}
    >
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          onClick={(e) => {
            navigate("/");
          }}
        />
      </div>
      <div className="nav-items">
        <ul>
          {/* <li>Internet Connection: {status ? "🟢" : "🔴"}</li> */}

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
