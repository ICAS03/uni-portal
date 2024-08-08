import { useState, useEffect } from "react";
import AdminNav from "../AdminNav/adminNav";
import search from "../../assets/icons/search.png";
import "../StudentEdit/studentEdit.css";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase"; // Adjust the import path as necessary
import { collection, getDocs } from "firebase/firestore";

const StudentEdit = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        const studentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudents(studentsData);
      } catch (error) {
        console.error("Error fetching students: ", error);
      }
    };

    fetchStudents();
  }, []);

  const filteredStudents = students.filter((student) => {
    const term = searchTerm;
    return (
      student.id.includes(term) ||
      student.firstname.includes(term) ||
      student.lastname.includes(term) ||
      student.email.includes(term) ||
      student.phone.includes(term)
    );
  });

  return (
    <>
      <AdminNav />
      <div className="student-list">
        <h1>Student</h1>
        <nav className="sub-nav">
          <span className="nav-span">
            <ul className="nav-list">
              <li>
                <a href="/students" className="active">
                  Student List
                </a>
              </li>
              <li>
                <Link to="/addstudent">Add student</Link>
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
        <table className="students-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </>
  );
};

export default StudentEdit;
