import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import './dashboardCard.css';
import './dashboardCalendar.css'

const dashboardCalendar = () => {
    const [value, setValue] = useState(new Date());
  return (
    <div className="dashboardCalendar-container">
    <div className="dashboardCards-container">
      <div className="deadline-card">
        <h2 className="deadline-card-title">Monday, 24 June 2024</h2>
        <p className="deadline-card-description">Ideating Start-Up</p>
        <p className="deadline-card-message">Assignment 2 is Due</p>
      </div>
      <div className="deadline-card">
        <h2 className="deadline-card-title">Monday, 29 July 2024</h2>
        <p className="deadline-card-description">Communication Theory</p>
        <p className="deadline-card-message">Assignment 2 is Due</p>
      </div>
      {/* Add more cards as needed */}
    </div>
    <div className="calendar-container">
      <Calendar onChange={setValue} value={value} />
    </div>
  </div>
  )
}

export default dashboardCalendar