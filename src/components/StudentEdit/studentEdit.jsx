import { useState, useEffect } from "react";
import AdminNav from "../AdminNav/adminNav";
import search from "../../assets/icons/search.png";
import "../StudentEdit/studentEdit.css";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const StudentEdit = () => {
  const [students, setStudents] = useState([]);
  const [modules, setModules] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedModules, setSelectedModules] = useState({});
  const [selectedModulesToRemove, setSelectedModulesToRemove] = useState({});

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        const studentsData = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const studentData = { id: doc.id, ...doc.data() };
            const modulesSnapshot = await getDocs(
              collection(db, "students", doc.id, "modules")
            );
            const enrolledModules = modulesSnapshot.docs.map((moduleDoc) => ({
              id: moduleDoc.id,
              title: moduleDoc.data().title,
            }));
            return { ...studentData, enrolledModules };
          })
        );
        setStudents(studentsData);
      } catch (error) {
        console.error("Error fetching students: ", error);
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
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    };

    fetchStudents();
    fetchModules();
  }, []);

  const filteredStudents = students.filter((student) => {
    const term = searchTerm.toLowerCase();
    return (
      student.id.toLowerCase().includes(term) ||
      student.firstName.toLowerCase().includes(term) ||
      student.lastName.toLowerCase().includes(term) ||
      student.email.toLowerCase().includes(term) ||
      student.phoneNumber.toLowerCase().includes(term)
    );
  });

  const handleModuleChange = (studentId, moduleId) => {
    setSelectedModules({
      ...selectedModules,
      [studentId]: moduleId,
    });
  };

  const handleRemoveModuleChange = (studentId, moduleId) => {
    setSelectedModulesToRemove({
      ...selectedModulesToRemove,
      [studentId]: moduleId,
    });
  };

  const handleAssignModule = async (studentId) => {
    const selectedModuleId = selectedModules[studentId];
    if (selectedModuleId) {
      try {
        const moduleData = modules.find(
          (module) => module.id === selectedModuleId
        );
        if (moduleData) {
          const { ...moduleFields } = moduleData;
          const studentRef = doc(
            db,
            "students",
            studentId,
            "modules",
            selectedModuleId
          );
          await setDoc(studentRef, moduleFields);

          setStudents((prevStudents) =>
            prevStudents.map((student) => {
              if (student.id === studentId) {
                return {
                  ...student,
                  enrolledModules: [
                    ...student.enrolledModules,
                    { id: moduleData.id, title: moduleData.title },
                  ],
                };
              }
              return student;
            })
          );

          setSelectedModules((prevSelectedModules) => ({
            ...prevSelectedModules,
            [studentId]: "",
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

  const handleRemoveModule = async (studentId, moduleId) => {
    if (moduleId) {
      try {
        if (typeof moduleId !== "string" || moduleId.trim() === "") {
          alert("Invalid module ID.");
          return;
        }
        const studentRef = doc(db, "students", studentId, "modules", moduleId);

        await deleteDoc(studentRef);
        alert("Module removed successfully!");

        setStudents((prevStudents) =>
          prevStudents.map((student) => {
            if (student.id === studentId) {
              return {
                ...student,
                enrolledModules: student.enrolledModules.filter(
                  (module) => module.id !== moduleId
                ),
              };
            }
            return student;
          })
        );

        setSelectedModulesToRemove((prevSelectedRemoveModules) => ({
          ...prevSelectedRemoveModules,
          [studentId]: "",
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
            <th>Modules</th>
            <th>Assign Module</th>
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
              <td>{student.enrolledModules.map((m) => m.title).join(", ")}</td>
              <td>
                <div className="assign-module-dropdown">
                  <select
                    value={selectedModules[student.id] || ""}
                    onChange={(e) =>
                      handleModuleChange(student.id, e.target.value)
                    }
                  >
                    <option value="">Select a module to assign</option>
                    {modules.map((module) => (
                      <option
                        key={module.id}
                        value={module.id}
                        disabled={student.enrolledModules.some(
                          (enrolledModule) => enrolledModule.id === module.id
                        )}
                        style={{
                          color: student.enrolledModules.some(
                            (enrolledModule) => enrolledModule.id === module.id
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
                    onClick={() => handleAssignModule(student.id)}
                    disabled={!selectedModules[student.id]}
                  >
                    Assign
                  </button>

                  <select
                    value={selectedModulesToRemove[student.id] || ""}
                    onChange={(e) =>
                      handleRemoveModuleChange(student.id, e.target.value)
                    }
                    style={{ marginLeft: "10px" }}
                  >
                    <option value="">Select a module to remove</option>
                    {student.enrolledModules.map((module) => (
                      <option key={module.id} value={module.id}>
                        {module.title}
                      </option>
                    ))}
                  </select>
                  <button
                    className="remove-button"
                    onClick={() =>
                      handleRemoveModule(
                        student.id,
                        selectedModulesToRemove[student.id]
                      )
                    }
                    disabled={!selectedModulesToRemove[student.id]}
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
  );
};

export default StudentEdit;
