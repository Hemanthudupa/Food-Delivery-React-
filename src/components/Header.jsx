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
      style={{
        background: status
          ? "linear-gradient(to right ,rgb(40, 70, 45),rgb(43, 101, 39), #00ad1d, #06d633, #a9ffa5)"
          : "linear-gradient(to right , #6c0000, #a00000, #b70000, #d80000, #ff0000)"
      }}
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
