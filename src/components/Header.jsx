import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
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
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
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
