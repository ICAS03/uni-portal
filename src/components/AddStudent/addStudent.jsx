import React, { useState } from "react";
import AdminNav from "../AdminNav/adminNav";
import { Link } from "react-router-dom";
import search from "../../assets/icons/search.png";
import "../AddStudent/addStudent.css";
import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../../utils/AuthContext";

const AddStudent = () => {
  const { signup } = useAuth();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmation = async () => {
    const confirmSave = window.confirm("Are you sure you want to submit?");

    if (!confirmSave) {
      return;
    }

    try {
      console.log(student.email, student.password);
      await signup(student.email, student.password);

      alert("Authentication updated successfully!");
    } catch (e) {
      console.error("Error updating authentication: ", e);
    }
  };

  const handleSave = async () => {
    try {
      await addDoc(collection(db, "students"), {
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        phoneNumber: student.phoneNumber,
        password: student.password,
      });
      alert("Student data saved to Firestore!");

      // Clear the form after saving
      setStudent({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
      });

      handleConfirmation();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleCancel = () => {
    setStudent({
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
      <div className="add-student">
        <h1>Student</h1>
        <nav className="sub-nav">
          <span className="nav-span">
            <ul className="nav-list">
              <li>
                <Link to="/studentEdit">Student List</Link>
              </li>
              <li>
                <Link to="/addStudent" className="active">
                  Add student
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
          <img src={search} alt="search icon" />
        </div>
        <form className="student-form">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={student.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={student.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={student.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={student.password}
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
              Cancel
            </button>
          </div>
        </form>
      </>
    </>
  );
};

export default AddStudent;
