import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard/dashboard'
import MyCourses from './components/MyCourses/mycourses'
import CourseMenu from './components/CourseMenu/courseMenu'


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<CourseMenu/>} />
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/mycourses' element={<MyCourses/>}></Route>
          <Route path='/coursemenu' element={<CourseMenu/>}></Route>
        </Routes>
      </Router>
  )
}

export default App
