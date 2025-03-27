import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import userContext from "../utils/UserContext";
export const Header = () => {
  let [buttonName, setButtonName] = useState("Login");

  const navigate = useNavigate();
  const status = useOnlineStatus();
  const { name } = useContext(userContext);

  return (
    <div
      className={`flex w-screen h-20 justify-between items-center p-4 ${
        status ? "bg-green-400 text-white" : "bg-red-400 text-white"
      }`}
    >
      <div className=" ">
        <img
          className="w-16  "
          src={LOGO_URL}
          onClick={(e) => {
            navigate("/");
          }}
        />
      </div>
      <div className="nav-items w-8/12 ">
        <ul className="flex justify-around">
          {/* <li>Internet Connection: {status ? "🟢" : "🔴"}</li> */}

          <li className=" hover:text-yellow-200">
            <Link to="/">Home</Link>
          </li>
          <li className=" hover:text-yellow-200">
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li className=" hover:text-yellow-200">
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className=" hover:text-yellow-200">Cart</li>
          <button
            className=" hover:text-yellow-200"
            onClick={() => {
              setButtonName(buttonName === "Login" ? "Logout" : "Login");
            }}
          >
            {buttonName}
            <span>{"  " + name}</span>
          </button>
        </ul>
      </div>
    </div>
  );
};
