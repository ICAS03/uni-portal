import React from 'react'
import './courseMenu.css'
import Navbar from '../Navbar/navbar';
import CourseMenuItem from '../CourseMenuItem/courseMenuItem';

const CourseMenu = () => {
  return (
    <div className='main-div'>
        <Navbar/>
        <div className='content-div'>
            <div className='course-menu'>
                <h2>Course Menu</h2>
                <CourseMenuItem/>
                <CourseMenuItem/>
                <CourseMenuItem/>
            </div>
            <div className="right-content-div">
                <h1 className='course-title'>Software Engineering</h1>
                <span className='course-selection-span'>
                    <ul className='selection-list'>
                        <li>Modules</li>
                        <li>Assignments</li>
                    </ul>
                </span>
            </div>
        </div>
    </div>
  )
}

export default CourseMenu
