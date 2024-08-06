import { useState, useEffect } from "react";
import "./moduleEdit.css";
import AdminNav from "../AdminNav/adminNav";
import search from "../../assets/icons/search.png";
import { Link } from "react-router-dom";

const ModuleEdit = () => {
  const [modules, setModules] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchModules = async () => {
      const data = [
        {
          id: 1,
          title: "Software Engineering",
          levelOfStudy: "Bachelor's Degree",
          professor: "Prof. Siti Aishah",
          deadline: "2024-08-15",
          lectureDay: "Monday",
          tutorialDay: "Wednesday",
          lectureTime: "10:30 AM - 12:30 PM",
          tutorialTime: "8:00 AM - 12:00 PM",
          lectureLocation: "Lecture Theatre 1",
          tutorialLocation: "Block C, Computer Lab 7",
        },

        {
          id: 2,
          title: "System Fundamentals",
          levelOfStudy: "Bachelor's Degree",
          professor: "Dr. Ariff Azman",
          deadline: "2024-09-10",
          lectureDay: "Monday",
          tutorialDay: "Tuesday",
          lectureTime: "2:00 PM - 4:00 PM",
          tutorialTime: "8:00 AM - 12:00 AM",
          lectureLocation: "Lecture Theatre 3",
          tutorialLocation: "Block C, Computer Lab 3",
        },
      ];
      setModules(data);
    };

    fetchModules();
  }, []);

  const filteredModules = modules.filter((module) => {
    const term = searchTerm.toLowerCase();
    return (
      module.title.toLowerCase().includes(term) ||
      module.levelOfStudy.toLowerCase().includes(term) ||
      module.professor.toLowerCase().includes(term) ||
      module.deadline.includes(term) ||
      module.lectureDay.toLowerCase().includes(term) ||
      module.tutorialDay.toLowerCase().includes(term) ||
      module.lectureTime.toLowerCase().includes(term) ||
      module.tutorialTime.toLowerCase().includes(term) ||
      module.lectureLocation.toLowerCase().includes(term) ||
      module.tutorialLocation.toLowerCase().includes(term)
    );
  });

  return (
    <>
      <AdminNav />
      <div className="module-list">
        <h1>Module</h1>
        <nav className="sub-nav">
          <span className="nav-span">
            <ul className="nav-list">
              <li>
                <a href="/module-list" className="active">
                  Module List
                </a>
              </li>
              <li>
              <Link to="/addModule">Add module</Link>  
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
          <img src={search} alt="" />
        </div>
        <div className="module-list-container">
          <div className="module-list">
            {filteredModules.map((module) => (
              <div className="module" key={module.id}>
                <h2>{module.title}</h2>
                <div className="module-details">
                  <div className="module-info">
                    <p>
                      <strong>Level of Study:</strong> {module.levelOfStudy}
                    </p>
                    <p>
                      <strong>Module Lecturer:</strong> {module.professor}
                    </p>
                    <p>
                      <strong>Module Deadline:</strong> {module.deadline}
                    </p>
                  </div>
                  <div className="module-schedule">
                    <p>
                      <strong>Lecture Day:</strong> {module.lectureDay}
                    </p>
                    <p>
                      <strong>Tutorial Day:</strong> {module.tutorialDay}
                    </p>
                    <p>
                      <strong>Lecture Time:</strong> {module.lectureTime}
                    </p>
                    <p>
                      <strong>Tutorial Time:</strong> {module.tutorialTime}
                    </p>
                    <p>
                      <strong>Lecture Location:</strong>{" "}
                      {module.lectureLocation}
                    </p>
                    <p>
                      <strong>Tutorial Location:</strong>{" "}
                      {module.tutorialLocation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default ModuleEdit;
