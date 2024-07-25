//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentList from "./components/StudentList/studentList";
import Dashboard from './components/Dashboard/dashboard'
import MyCourses from './components/MyCourses/mycourses'
import Tutorial from './components/Tutorial/tutorialpage'
import ModuleStat from './components/moduleStatistic/moduleStat';
import LecturerUploadTutorial from './components/LecturerUploadTutorial/LecturerUploadTutorial';
import CourseMenu from './components/CourseMenu/courseMenu';
import LecModStat from './components/LecModStat/LecModStat';
import LectureUpload from './components/LectureUpload/LectureUpload';
import ProfilePage from './components/ProfilePage/profilePage';
import Lecturerdash from './components/MyCourses/lecturerdash'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/mycourses' element={<MyCourses></MyCourses>}></Route>
        <Route path='/tutorial' element={<Tutorial></Tutorial>}></Route>
        <Route path='/modulestat' element={<ModuleStat/>}></Route>
        <Route path='/lecturer-upload-tutorial' element={<LecturerUploadTutorial/>}></Route>
        <Route path='/coursemenu' element={<CourseMenu/>}></Route>
        <Route path='/lecturestats' element={<LecModStat/>}></Route>
        <Route path="/studentlist" element={<StudentList />}></Route>
        <Route path='/lecture-upload' element={<LectureUpload/>}></Route>
        <Route path='/profilepage' element={<ProfilePage/>}></Route>
        <Route path='/lecturerdash' element={<Lecturerdash/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
