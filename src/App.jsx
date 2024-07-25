//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import MyCourses from "./components/MyCourses/mycourses";
import Tutorial from "./components/Tutorial/tutorialpage";
import ModuleStat from "./components/moduleStatistic/moduleStat";
import CourseMenu from "./components/CourseMenu/courseMenu";
import StudentList from "./components/StudentList/studentList";
import LecturerEdit from "./components/LecturerEdit/lecturerEdit";
import StudentEdit from "./components/StudentEdit/studentEdit";
import ModuleEdit from "./components/ModuleEdit/moduleEdit";
import AdminDash from "./components/AdminDash/adminDash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseMenu />}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/mycourses" element={<MyCourses></MyCourses>}></Route>
        <Route path="/tutorial" element={<Tutorial></Tutorial>}></Route>
        <Route path="/modulestat" element={<ModuleStat />}></Route>
        <Route path="/coursemenu" element={<CourseMenu />}></Route>
        <Route path="/studentlist" element={<StudentList />}></Route>
        <Route path="/lectureredit" element={<LecturerEdit />}></Route>
        <Route path="/studentedit" element={<StudentEdit />}></Route>
        <Route path="/moduleedit" element={<ModuleEdit />}></Route>
        <Route path="/admindash" element={<AdminDash />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
