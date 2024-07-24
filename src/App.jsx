import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard/dashboard'
import MyCourses from './components/MyCourses/mycourses'
import Tutorial from './components/Tutorial/tutorialpage'
import ModuleStat from './components/moduleStatistic/moduleStat';
import LecturerUploadTutorial from './components/LecturerUploadTutorial/LecturerUploadTutorial';
import CourseMenu from './components/CourseMenu/courseMenu';
import LectureUpload from './components/LectureUpload/LectureUpload';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CourseMenu/>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/mycourses' element={<MyCourses></MyCourses>}></Route>
        <Route path='/tutorial' element={<Tutorial></Tutorial>}></Route>
        <Route path='/modulestat' element={<ModuleStat/>}></Route>
        <Route path='/lecturer-upload-tutorial' element={<LecturerUploadTutorial/>}></Route>
        <Route path='/coursemenu' element={<CourseMenu/>}></Route>
        <Route path='/lecture-upload' element={<LectureUpload/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
