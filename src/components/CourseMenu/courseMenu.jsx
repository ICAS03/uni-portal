import React from 'react'
import './courseMenu.css'
import Navbar from '../Navbar/navbar';
import CourseMenuItem from './CourseMenuItem/courseMenuItem';
import CourseMenuContent from './CourseMenuContent/courseMenuContent';

const CourseMenu = () => {
  return (
        <>
        <Navbar/>
        <div className='content-div'>
            <div className='course-menu'>
                <h2>Course Menu</h2>
                <CourseMenuItem/>
                <CourseMenuItem/>
                <CourseMenuItem/>
            </div>
            <div className="right-content-div">
                <h2 className='course-title'>Software Engineering</h2>
                <ul className='selection-list'>
                    <li>Modules</li>
                    <li>Assignments</li>
                </ul>
            </div>
            <CourseMenuContent/>
            
        </div>
        </>
  )
}

export default CourseMenu
