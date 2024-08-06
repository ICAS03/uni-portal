import React, { useState } from "react";
import AdminNav from "../AdminNav/adminNav";
import { Link } from "react-router-dom";
import search from "../../assets/icons/search.png";
import "../AddModule/addModule.css";

const AddModule = () => {
  const [modules, setModules] = useState({
    title: "",
    levelOfStudy: "",
    professor: "",
    deadline: "",
    lectureDay: "",
    tutorialDay: "",
    lectureTime: "",
    tutorialTime: "",
    lectureLocation: "",
    tutorialLocation: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setModules({
      ...modules,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("Module data saved:", modules);
    // Implement save functionality here, e.g., sending data to backend
  };

  const handleCancel = () => {
    setModules({
        title: "",
        levelOfStudy: "",
        professor: "",
        deadline: "",
        lectureDay: "",
        tutorialDay: "",
        lectureTime: "",
        tutorialTime: "",
        lectureLocation: "",
        tutorialLocation: "",
    });
  };

  return (
    <>
      <AdminNav />
      <div className="add-module">
        <h1>Module</h1>
        <nav className="sub-nav">
          <span className="nav-span">
            <ul className="nav-list">
              <li>
                <Link to="/moduleEdit">Module List</Link>
              </li>
              <li>
                <Link to="/addModule" className="active">
                  Add module
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
        <form className="module-form">
        <div className="form-group">
            <label>Module title</label>
            <input
              type="text"
              name="title"
              value={modules.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Level of Study</label>
            <input
              type="text"
              name="levelOfStudy"
              value={modules.levelOfStudy}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Module Lecturer</label>
            <input
              type="text"
              name="professor"
              value={modules.professor}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Module Deadline</label>
            <input
              type="text"
              name="deadline"
              value={modules.deadline}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Lecture Day</label>
            <input
              type="text"
              name="lectureDay"
              value={modules.lectureDay}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Tutorial Day</label>
            <input
              type="text"
              name="tutorialDay"
              value={modules.tutorialDay}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Lecture Time</label>
            <input
              type="text"
              name="lectureTime"
              value={modules.lectureTime}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Tutorial Time:</label>
            <input
              type="text"
              name="tutorialTime"
              value={modules.tutorialTime}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Lecture Location</label>
            <input
              type="text"
              name="lectureLocation"
              value={modules.lectureLocation}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Tutorial Location</label>
            <input
              type="email"
              name="tutorialLocation"
              value={modules.tutorialLocation}
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

export default AddModule;