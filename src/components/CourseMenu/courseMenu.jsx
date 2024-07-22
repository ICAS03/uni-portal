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
                <CourseMenuItem/>
                <CourseMenuItem/>
            </div>
            <div className='right-whole-div'>
                <h1 className='course-title'>Software Engineering</h1>
                    <ul className='selection-list'>
                        <li>Modules</li>
                        <li>Assignments</li>
                    </ul>
                <div className="right-content-div">
                    <CourseMenuContent/>
                </div>
            </div>
            <div className='ai-div'>For AI bot</div>
        </div>
        </>
  )
}

export default CourseMenu
