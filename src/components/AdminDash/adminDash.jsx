import "./adminDash.css";
import adminImage from "../../assets/icons/admin.png";
import bell from "../../assets/icons/bell.png";
import messages from "../../assets/icons/speech-bubble.png";
import { Link } from "react-router-dom";

const AdminDash = () => {
  return (
    <div className="admin-dashboard">
      <header className="admin-top-bar">
        <div className="admin-icons">
          <img src={bell} alt="Notifications" className="admin-icon" />
          <img src={messages} alt="Chat" className="admin-icon" />
        </div>
      </header>
      <div className="admin-header">
        <div className="admin-image">
          <img src={adminImage} alt="Admin Illustration" />
        </div>
        <div className="admin-text">
          <h1>Hi Admin,</h1>
          <h2>What do you want to do?</h2>
        </div>
      </div>
      <nav className="admin-nav">
        <ul>
          <li>
            <Link to="/lectureredit">Lecturer</Link>
          </li>
          <li>
            <Link to="/studentedit">Student</Link>
          </li>
          <li>
            <Link to="/moduleedit">Module</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDash;
