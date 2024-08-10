import { useState, useEffect } from "react";
import AdminNav from "../AdminNav/adminNav";
import search from "../../assets/icons/search.png";
import "../LecturerEdit/lecturerEdit.css";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const LecturerEdit = () => {
  const [lecturers, setLecturers] = useState([]);
  const [modules, setModules] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedModules, setSelectedModules] = useState({});
  const [selectedModulesToRemove, setSelectedModulesToRemove] = useState({});

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "lecturers"));
        const lecturersData = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const lecturerData = { id: doc.id, ...doc.data() };
            const modulesSnapshot = await getDocs(
              collection(db, "lecturers", doc.id, "modules")
            );
            const assignedModules = modulesSnapshot.docs.map((moduleDoc) => ({
              id: moduleDoc.id,
              title: moduleDoc.data().title,
            }));
            return { ...lecturerData, assignedModules };
          })
        );
        setLecturers(lecturersData);
      } catch (error) {
        console.error("Error fetching lecturers: ", error);
      }
    };

    const fetchModules = async () => {
      try {
        const modulesSnapshot = await getDocs(collection(db, "modules"));
        const modulesList = modulesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setModules(modulesList);
        console.log("Fetched modules:", modulesList);
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    };

    fetchLecturers();
    fetchModules();
  }, []);

  const filteredLecturers = lecturers.filter((lecturer) => {
    const term = searchTerm.toLowerCase();
    return (
      lecturer.id.toLowerCase().includes(term) ||
      lecturer.firstName.toLowerCase().includes(term) ||
      lecturer.lastName.toLowerCase().includes(term) ||
      lecturer.email.toLowerCase().includes(term) ||
      lecturer.phoneNumber.toLowerCase().includes(term)
    );
  });

  const handleModuleChange = (lecturerId, moduleId) => {
    setSelectedModules({
      ...selectedModules,
      [lecturerId]: moduleId,
    });
  };

  const handleRemoveModuleChange = (lecturerId, moduleId) => {
    setSelectedModulesToRemove({
      ...selectedModulesToRemove,
      [lecturerId]: moduleId,
    });
  };

  const handleAssignModule = async (lecturerId) => {
    const selectedModuleId = selectedModules[lecturerId];
    if (selectedModuleId) {
      try {
        const moduleData = modules.find(
          (module) => module.id === selectedModuleId
        );
        if (moduleData) {
          const { ...moduleFields } = moduleData;
          const lecturerRef = doc(
            db,
            "lecturers",
            lecturerId,
            "modules",
            selectedModuleId
          );
          await setDoc(lecturerRef, moduleFields);

          setLecturers((prevLecturers) =>
            prevLecturers.map((lecturer) => {
              if (lecturer.id === lecturerId) {
                return {
                  ...lecturer,
                  assignedModules: [
                    ...lecturer.assignedModules,
                    { id: moduleData.id, title: moduleData.title },
                  ],
                };
              }
              return lecturer;
            })
          );

          setSelectedModules((prevSelectedModules) => ({
            ...prevSelectedModules,
            [lecturerId]: "",
          }));

          alert("Module assigned successfully!");
        } else {
          alert("Selected module not found.");
        }
      } catch (e) {
        console.error("Error assigning module: ", e);
        alert("Error assigning module");
      }
    } else {
      alert("Please select a module.");
    }
  };

  const handleRemoveModule = async (lecturerId, moduleId) => {
    if (moduleId) {
      try {
        if (typeof moduleId !== "string" || moduleId.trim() === "") {
          alert("Invalid module ID.");
          return;
        }

        const lecturerRef = doc(
          db,
          "lecturers",
          lecturerId,
          "modules",
          moduleId
        );

        await deleteDoc(lecturerRef);
        alert("Module removed successfully!");

        // Optimistic UI update
        setLecturers((prevLecturers) =>
          prevLecturers.map((lecturer) => {
            if (lecturer.id === lecturerId) {
              return {
                ...lecturer,
                assignedModules: lecturer.assignedModules.filter(
                  (module) => module.id !== moduleId
                ),
              };
            }
            return lecturer;
          })
        );

        // Clear selection
        setSelectedModulesToRemove((prevSelectedRemoveModules) => ({
          ...prevSelectedRemoveModules,
          [lecturerId]: "",
        }));
      } catch (e) {
        alert(`Error removing module: ${e.message}`);
        console.error("Error removing module: ", e);
      }
    } else {
      alert("Please select a module to remove.");
    }
  };

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
              <th>Modules</th>
              <th>Assign Module</th>
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
                <td>
                  {lecturer.assignedModules.map((mod) => mod.title).join(", ")}
                </td>
                <td>
                  <div className="assign-module-dropdown">
                    <select
                      value={selectedModules[lecturer.id] || ""}
                      onChange={(e) =>
                        handleModuleChange(lecturer.id, e.target.value)
                      }
                    >
                      <option value="">Select a module to assign</option>
                      {modules.map((module) => (
                        <option
                          key={module.id}
                          value={module.id}
                          disabled={lecturer.assignedModules.some(
                            (assignedModule) => assignedModule.id === module.id
                          )}
                          style={{
                            color: lecturer.assignedModules.some(
                              (assignedModule) =>
                                assignedModule.id === module.id
                            )
                              ? "grey"
                              : "black",
                          }}
                        >
                          {module.title}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => handleAssignModule(lecturer.id)}
                      disabled={!selectedModules[lecturer.id]}
                    >
                      Assign
                    </button>

                    <select
                      value={selectedModulesToRemove[lecturer.id] || ""}
                      onChange={(e) =>
                        handleRemoveModuleChange(lecturer.id, e.target.value)
                      }
                      style={{ marginLeft: "10px" }}
                    >
                      <option value="">Select a module to remove</option>
                      {lecturer.assignedModules.map((module) => (
                        <option key={module.id} value={module.id}>
                          {module.title}
                        </option>
                      ))}
                    </select>
                    <button
                      className="remove-button"
                      onClick={() =>
                        handleRemoveModule(
                          lecturer.id,
                          selectedModulesToRemove[lecturer.id]
                        )
                      }
                      disabled={!selectedModulesToRemove[lecturer.id]}
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </>
  );
};

export default LecturerEdit;

