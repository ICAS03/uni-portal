//import React from 'react'
import "./courseMenu.css";
import Navbar from "../Navbar/navbar";
import CourseMenuItem from "./CourseMenuItem/courseMenuItem";
import CourseMenuContent from "./CourseMenuContent/courseMenuContent";
import AiChatbot from '../AiChatbot/aiChatbot';


const CourseMenu = () => {
  return (
    <>
      <Navbar />
      <div className="content-div">
        <div className="course-menu">
          <h2>Course Menu</h2>
          <CourseMenuItem
            title="General" 
            content={['Announcement', 'Books']} 
          />
          <CourseMenuItem
            title="Introduction" 
            content={['Module Information', 'Weekly Plan', 'Course Briefing']} 
          />
          <CourseMenuItem
            title="Lectures" 
            content={[
              'Introduction to Software Engineering',
              'Software Tools and Environments',
              'Agile Software Development',
              'Software Quality Reliability'
            ]} 
          />
        </div>
        <div className="right-whole-div">
          <h1 className="course-title">Software Engineering</h1>
          <ul className="selection-list">
            <li>Modules</li>
            <li>Assignments</li>
          </ul>
          <div className="right-content-div">
            <CourseMenuContent />
          </div>
        </div>
        <div className="ai-div">
          <AiChatbot />
        </div>
      </div>
    </>
  );
};

export default CourseMenu;
