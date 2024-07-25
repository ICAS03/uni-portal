import React from 'react'
import Navbar from '../Navbar/navbar';
import Lecmodulecard from '../Modules/lecmodulecard';
import '../MyCourses/lecturerdash.css';
import DashboardCalendar from '../Dashboard/dashboardCalendar';
import { Link } from "react-router-dom";

const lecdash = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='lecdash-body'>
      <div className='lecdash-selection'>
        <h2>My Courses</h2>
       <span className='selection-span'>
      <ul className='selection-list'>
        <li>All</li>
        <li>In Progress</li>
        <li>Completed</li>
        <li>Incomplete</li>
      </ul>
     </span> 
      </div>
      <div className='modules'>
      <Link to="/lecturestats" className='lecNav'>
      <Lecmodulecard/>
      </Link>
      <Link to="/lecturestats" className='lecNav'>
      <Lecmodulecard/>
      </Link>
      <Link to="/lecturestats" className='lecNav'>
      <Lecmodulecard/>
      </Link>
    
      </div>
      <div classname='calendar'>
      <h2 className='Deadlines'>Deadlines</h2>
      <DashboardCalendar/>
      </div>
     
    </div>
    </>
  )
}

export default lecdash