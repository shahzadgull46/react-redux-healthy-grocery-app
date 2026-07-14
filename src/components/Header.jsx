import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

import { useState } from "react";

import { Link } from "react-router-dom";

import { useContext } from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Logout");

  const onlineStatus = useOnlineStatus()

  const {loggedInUser} = useContext(UserContext)
  // console.log(loggedInUser)
  // Subsrcibing to the store using selector
  const grocery = useSelector((store)=>store.grocery.items)
  console.log(grocery)
  return (

    <div className="h-25 bg-blue-900 flex items-center px-6 justify-between">
      <div className="logo-container  ">
        <img className="w-50 max-h-42 object-contain  " src="logo.png" />
      </div>

      <div className="nav-items flex ">
        <ul className="flex items-center justify-end gap-1.5 m-3 p-4 ">
          <li className="px-4 text-white text-lg font-medium hover:scale-105 transition-all duration-300"> Online Status: {onlineStatus ? " ✅" : "🔴"  }</li>
          <li className="px-4 text-white text-lg font-medium hover:scale-105 transition-all duration-300 ">
          <Link 
  to="/" 
  onClick={() => window.location.reload()}
>
  Home
</Link>
          </li>
          <li className="px-4 text-white text-lg font-medium hover:scale-105 transition-all duration-300">
            <Link to="/grocery">Grocery List🛒({grocery.length})</Link>
          </li>
          <li className="px-4 text-white text-lg font-medium hover:scale-105 transition-all duration-300">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4 text-white text-lg font-medium hover:scale-105 transition-all duration-300"> <Link to=  "/userprofile">User Profile</Link></li>
          <li className="px-4 text-white text-lg font-medium hover:scale-105 transition-all duration-300"> <Link to=  "/userprofile">{loggedInUser}</Link></li>

          <button
           className="px-4 text-white text-lg font-medium cursor-pointer bg-[hsla(98,100%,60%,0.904)] rounded-xl w-23 h-10  hover:scale-105 transition-all duration-300 shadow-lg " 
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
      
    </div>
  );
};

export default Header;
