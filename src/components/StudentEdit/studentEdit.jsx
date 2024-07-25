import { useState, useEffect } from "react";
import AdminNav from "../AdminNav/adminNav";
import search from "../../assets/icons/search.png";
import "../StudentEdit/studentEdit.css";

const StudentEdit = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Dummy data
    const fetchedData = Array(12).fill({
      id: "0351154",
      firstname: "Singh",
      lastname: "Anoop",
      email: "anoopsingh@sd.taylors.edu.my",
      phone: "011-111111",
    });
    setStudents(fetchedData);
  }, []);

  const filteredStudents = students.filter((student) => {
    const term = searchTerm.toLowerCase();
    return (
      student.id.includes(term) ||
      student.firstname.toLowerCase().includes(term) ||
      student.lastname.toLowerCase().includes(term) ||
      student.email.toLowerCase().includes(term) ||
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
                <a
                  href="src\components\StudentEdit\studentList.jsx"
                  className="active"
                >
                  Student List
                </a>
              </li>
              <li>
                <a href="/add student">Add student</a>
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
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </>
  );
};

export default StudentEdit;
