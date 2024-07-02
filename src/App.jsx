import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </Router>
  )
}

export default App
