import { useState, useEffect } from "react";
import Navbar from "../Navbar/navbar";
import search from "../../assets/icons/search.png";
import "../StudentList/studentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Dummy data
    const fetchedData = Array(12).fill({
      name: "Anoop Singh",
      id: "0351154",
      email: "anoopsingh@sd.taylors.edu.my",
      tutorialGroup: "03",
      programme: "Computer Science",
    });
    setStudents(fetchedData);
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="student-list">
        <h1>Software Engineering</h1>
        <nav className="sub-nav">
          <span className="nav-span">
            <ul className="nav-list">
              <li>
                <a href="/statistics">Statistics</a>
              </li>
              <li>
                <a href="/students" className="active">
                  Student List
                </a>
              </li>
              <li>
                <a href="/materials">Course Material</a>
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
              <th>Name</th>
              <th>ID</th>
              <th>Email</th>
              <th>Tutorial Group</th>
              <th>Programme</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.id}</td>
                <td>{student.email}</td>
                <td>{student.tutorialGroup}</td>
                <td>{student.programme}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </>
  );
};

export default StudentList;
