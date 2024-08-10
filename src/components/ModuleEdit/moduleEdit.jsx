import { useState, useEffect } from "react";
import "./moduleEdit.css";
import AdminNav from "../AdminNav/adminNav";
import search from "../../assets/icons/search.png";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const ModuleEdit = () => {
  const [modules, setModules] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "modules"));
        const modulesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched modules:", modulesData);
        setModules(modulesData);
      } catch (error) {
        console.error("Error fetching modules: ", error);
      }
    };

    fetchModules();
  }, []);

  const deleteModule = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this module?"
    );
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "modules", id));
        setModules(modules.filter((module) => module.id !== id));
      } catch (error) {
        console.error("Error deleting module: ", error);
      }
    }
  };

  const filteredModules = modules.filter((module) => {
    const term = searchTerm.toLowerCase();
    return (
      module.title.toLowerCase().includes(term) ||
      module.levelOfStudy.toLowerCase().includes(term) ||
      module.professor.toLowerCase().includes(term) ||
      module.deadline.toLowerCase().includes(term) ||
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
                <Link to="/module-list" className="active">
                  Module List
                </Link>
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
          <img src={search} alt="Search icon" />
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
                <button
                  className="delete-button"
                  onClick={() => deleteModule(module.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default ModuleEdit;
