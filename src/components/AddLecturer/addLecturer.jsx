import React, { useState } from "react";
import AdminNav from "../AdminNav/adminNav";
import { Link } from "react-router-dom";
import search from "../../assets/icons/search.png";
import "../AddLecturer/addLecturer.css";
import { db } from "../../utils/firebase";
import { collection, addDoc ,getFirestore , setDoc ,doc} from "firebase/firestore";
import { useAuth } from "../../utils/AuthContext";

const AddLecturer = () => {
  const { signup } = useAuth();
  const [lecturers, setLecturers] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setLecturers({
      ...lecturers,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmation = async () => {
    const confirmSave = window.confirm("Are you sure you want to submit?");

    if (!confirmSave) {
      return;
    }

    try {
      console.log(lecturers.email, lecturers.password);
      await signup(lecturers.email, lecturers.password);

      alert("Submitted successfully!");
    } catch (e) {
      console.error("Error updating: ", e);
    }
  };

  const handleSave = async () => {
    try {
      // Sign up the user and get the user ID
      const userCredential = await signup(lecturers.email, lecturers.password);
      const userId = userCredential.user.uid; // Get the user ID

      // Get a Firestore instance
      const db = getFirestore();

      // Create or update the document in the "students" collection with the user ID as the document ID
      await setDoc(doc(db, "lecturers", userId), {
        firstName: lecturers.firstName,
        lastName: lecturers.lastName,
        email: lecturers.email,
        phoneNumber: lecturers.phoneNumber,
        password: lecturers.password,
      });

      // Clear the form
      setLecturers({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
      });

      handleConfirmation(); // Confirmation alert
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  
  const handleCancel = () => {
    setLecturers({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
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
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={lecturers.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-actions">
            <button type="button" onClick={handleSave} className="save-button">
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="cancel-button"
            >
              Clear
            </button>
          </div>
        </form>
      </>
    </>
  );
};

export default AddLecturer;
