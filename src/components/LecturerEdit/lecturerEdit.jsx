import { useState, useEffect } from "react";
import AdminNav from "../AdminNav/adminNav";
import search from "../../assets/icons/search.png";
import "../LecturerEdit/lecturerEdit.css";

const LecturerEdit = () => {
  const [lecturers, setLecturers] = useState([]);
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
    setLecturers(fetchedData);
  }, []);

  const filteredLecturers = lecturers.filter((lecturer) => {
    const term = searchTerm.toLowerCase();
    return (
      lecturer.id.includes(term) ||
      lecturer.firstname.toLowerCase().includes(term) ||
      lecturer.lastname.toLowerCase().includes(term) ||
      lecturer.email.toLowerCase().includes(term) ||
      lecturer.phone.includes(term)
    );
  });

  return (
    <>
      <AdminNav />
      <div className="lecturer-list">
        <h1>Lecturer</h1>
        <nav className="sub-nav">
          <span className="nav-span">
            <ul className="nav-list">
              <li>
                <a href="/lecturers" className="active">
                  Lecturer List
                </a>
              </li>
              <li>
                <a href="/add lecturer">Add lecturer</a>
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
        <table className="lecturers-table">
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
            {filteredLecturers.map((lecturer, index) => (
              <tr key={index}>
                <td>{lecturer.id}</td>
                <td>{lecturer.firstname}</td>
                <td>{lecturer.lastname}</td>
                <td>{lecturer.email}</td>
                <td>{lecturer.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </>
  );
};

export default LecturerEdit;
