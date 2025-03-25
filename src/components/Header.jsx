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
      className={`flex w-screen h-20 justify-between items-center p-4 ${
        status ? "bg-green-900 text-white" : "bg-red-600 text-white"
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
          </button>
        </ul>
      </div>
    </div>
  );
};
