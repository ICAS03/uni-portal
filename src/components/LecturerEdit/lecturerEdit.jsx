import { useState, useEffect } from "react";
import AdminNav from "../AdminNav/adminNav";
import search from "../../assets/icons/search.png";
import "../LecturerEdit/lecturerEdit.css";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

const LecturerEdit = () => {
  const [lecturers, setLecturers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "lecturers"));
        const lecturersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLecturers(lecturersData);
      } catch (error) {
        console.error("Error fetching lecturers: ", error);
      }
    };

    fetchLecturers();
  }, []);

  const filteredLecturers = lecturers.filter((lecturer) => {
    const term = searchTerm;
    return (
      lecturer.id.includes(term) ||
      lecturer.firstname.includes(term) ||
      lecturer.lastname.includes(term) ||
      lecturer.email.includes(term) ||
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
                <Link to="/addLecturer">Add lecturer</Link>
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
            {filteredLecturers.map((lecturer) => (
              <tr key={lecturer.id}>
                <td>{lecturer.id}</td>
                <td>{lecturer.firstName}</td>
                <td>{lecturer.lastName}</td>
                <td>{lecturer.email}</td>
                <td>{lecturer.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </>
  );
};

export default LecturerEdit;
