//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentList from "./components/StudentList/studentList";
import LecturerEdit from "./components/LecturerEdit/lecturerEdit";
import StudentEdit from "./components/StudentEdit/studentEdit";
import ModuleEdit from "./components/ModuleEdit/moduleEdit";
import AddStudent from "./components/AddStudent/addStudent";
import AddLecturer from "./components/AddLecturer/addLecturer";
import AddModule from "./components/AddModule/addModule";
import AdminDash from "./components/AdminDash/adminDash";
import Dashboard from "./components/Dashboard/dashboard";
import MyCourses from "./components/MyCourses/mycourses";
import Tutorial from "./components/Tutorial/tutorialpage";
import ModuleStat from "./components/moduleStatistic/moduleStat";
import LecturerUploadTutorial from "./components/LecturerUploadTutorial/LecturerUploadTutorial";
import CourseMenu from "./components/CourseMenu/courseMenu";
import LecModStat from './components/LecModStat/LecModStat';
import AdminLogin from "./components/AdminLogin/adminLogin";
import LectureUpload from './components/LectureUpload/LectureUpload';
import ProfilePage from './components/ProfilePage/profilePage';
import Lecturerdash from './components/MyCourses/lecturerdash'
import LecturerCourses from './components/MyCourses/lecturercourses';


function App() {
  return (
      <Routes>
        <Route path='/' element={<AdminLogin/>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/mycourses' element={<MyCourses></MyCourses>}></Route>
        <Route path='/tutorial' element={<Tutorial></Tutorial>}></Route>
        <Route path='/modulestat' element={<ModuleStat/>}></Route>
        <Route path='/lecturer-upload-tutorial' element={<LecturerUploadTutorial/>}></Route>
        <Route path='/coursemenu' element={<CourseMenu/>}></Route>
        <Route path='/lecturestats' element={<LecModStat/>}></Route>
        <Route path="/studentlist" element={<StudentList />}></Route>
        <Route path='/lecturerdash' element={<Lecturerdash/>}></Route>
        <Route path="/lectureredit" element={<LecturerEdit />}></Route>
        <Route path="/studentedit" element={<StudentEdit />}></Route>
        <Route path="/moduleedit" element={<ModuleEdit />}></Route>
        <Route path="/admindash" element={<AdminDash />}></Route>
        <Route path="/addstudent" element= {<AddStudent />}></Route>
        <Route path="/addLecturer" element= {<AddLecturer />}></Route>
        <Route path="/addModule" element= {<AddModule />}></Route>
        <Route path="/lecture-upload" element={<LectureUpload />}></Route>
        <Route path="/profilepage" element={<ProfilePage />}></Route>
        <Route path="/lecturercourses" element={<LecturerCourses />}></Route>
      </Routes>
  );
}

export default App;
