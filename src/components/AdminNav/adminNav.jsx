import robot from "../../assets/icons/robot.png";
import bell from "../../assets/icons/bell.png";
import messages from "../../assets/icons/speech-bubble.png";
import user from "../../assets/icons/user.png";
import "../AdminNav/adminNav.css";
import logo from "../../assets/icons/mortarboard.png";
import search from "../../assets/icons/search.png";
import { Link } from "react-router-dom";

const adminNav = () => {
  return (
    <div className="navbar">
      <span className="right-navbar">
        <img src={logo} alt="" className="logo"></img>
        <Link to="/admindash" className="nav-links">
          Home
        </Link>
        <Link to="/lectureredit" className="nav-links">
          Lecturer
        </Link>
        <Link to="/studentedit" className="nav-links">
          Student
        </Link>
        <Link to="/moduleedit" className="nav-links">
          Module
        </Link>
      </span>

      <span className="left-navbar">
        <div className="search-box">
          <input type="text" placeholder="Search"></input>
          <img src={search} alt=""></img>
        </div>
        <div className="icons">
          <img src={robot} alt="" className=""></img>
          <img src={bell} alt="" className=""></img>
          <img src={messages} alt="" className=""></img>
          <img src={user} alt="" className=""></img>
        </div>
      </span>
    </div>
  );
};

export default adminNav;
