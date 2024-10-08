//import React from 'react'
import robot from "../../assets/icons/robot.png";
import bell from "../../assets/icons/bell.png";
import messages from "../../assets/icons/speech-bubble.png";
import user from "../../assets/icons/user.png";
import "../Navbar/navbar.css";
import logo from "../../assets/icons/mortarboard.png";
import search from "../../assets/icons/search.png";
import { Link } from "react-router-dom";
import {useAuth} from '../../utils/AuthContext';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AiChatbot from "../AiChatbot/aiChatbot";

const navbar = () => {
  const {userRole}= useAuth();
  return (
    <div className="navbar">
      <span className="right-navbar">
        <img src={logo} alt="" className="logo"></img>

        {userRole && userRole === "lecturer" ? (
          <Link to="/lecturerdash" className="nav-links">
            Dashboard
          </Link>
        ) : (
          <Link to="/dashboard" className="nav-links">
            Dashboard
          </Link>
        )}
        {userRole && userRole === "lecturer" ? (
          <Link to="/lecturercourses" className="nav-links">
            My Courses
          </Link>
        ) : (
          <Link to="/mycourses" className="nav-links">
            My Courses
          </Link>
        )}
      </span>

      <span className="left-navbar">
        <div className="search-box">
          <input type="text" placeholder="Search"></input>
          <img src={search} alt=""></img>
        </div>
        <div className="icons">
          <Popup trigger={<img src={robot} alt="" className=""></img>} position="bottom center">
            <div className="pop-up-ai">
              <AiChatbot />
            </div>
          </Popup>
          {/* <img src={robot} alt="" className=""></img> */}
          <img src={bell} alt="" className=""></img>
          <img src={messages} alt="" className=""></img>
          <Link to="/profilepage" className="nav-links">
            <img src={user} alt="" className=""></img>
          </Link>
        </div>
      </span>
    </div>
  );
};

export default navbar;
