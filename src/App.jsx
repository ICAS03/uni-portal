import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard/dashboard'
import MyCourses from './components/MyCourses/mycourses'
import Tutorial from './components/Tutorial/tutorialpage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/mycourses' element={<MyCourses></MyCourses>}></Route>
        <Route path='/tutorial' element={<Tutorial></Tutorial>}></Route>
      </Routes>
    </Router>
  )
}

export default App
