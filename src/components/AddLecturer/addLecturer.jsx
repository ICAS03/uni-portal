import React, { useState } from "react";
import AdminNav from "../AdminNav/adminNav";
import { Link } from "react-router-dom";
import search from "../../assets/icons/search.png";
import "../AddLecturer/addLecturer.css";

const AddLecturer = () => {
  const [lecturers, setLecturers] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setLecturers({
      ...lecturers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("Lecturer data saved:", lecturers);
    // Implement save functionality here, e.g., sending data to backend
  };

  const handleCancel = () => {
    setLecturers({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
  };

  return (
    <>
      <AdminNav />
      <div className="add-lecturer">
        <h1>Lecturer</h1>
        <nav className="sub-nav">
          <span className="nav-span">
            <ul className="nav-list">
              <li>
                <Link to="/lecturerEdit">Lecturer List</Link>
              </li>
              <li>
                <Link to="/addLecturer" className="active">
                  Add lecturer
                </Link>
              </li>
            </ul>
          </span>
        </nav>
      </div>
      <>
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={search} alt=""></img>
        </div>
        <form className="lecturer-form">
        <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              name="id"
              value={lecturers.id}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={lecturers.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lecturers.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={lecturers.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={lecturers.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-actions">
            <button type="button" onClick={handleSave} className="save-button">
              Save
            </button>
            <button type="button" onClick={handleCancel} className="cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </>
    </>
  );
};

export default AddLecturer;