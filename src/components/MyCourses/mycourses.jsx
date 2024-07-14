import React from 'react'
import Navbar from '../Navbar/navbar';
import ModuleCard from '../Modules/moduleCard';
import '../MyCourses/mycourses.css';


const mycourses = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='mycourses-body'>
      <div className='mycourses-selection'>
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
      <div className='content'>
        <div className='modules'>
          <ModuleCard></ModuleCard>
          <ModuleCard></ModuleCard>
          <ModuleCard></ModuleCard>
        </div>
        
        <div className='visuals'>
          <h2>Course Visuals</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default mycourses