import React from "react";
import "./courseMenuContent.css";

const CourseMenuContent = () => {

  return (
    <>
        <div className="course-menu-content-body">
            <ul>
                <li className="menu-title" >General</li>
                    <ul>
                        <li className="f-li">Course Overview</li>
                        <li className="f-li">Course Syllabus</li>
                        <li className="f-li">Course Schedule</li>
                    </ul>
                <li className="menu-title" >Lecture</li>
                    <ul>
                        <li className="f-li">Week 1</li>
                        <li className="f-li">Week 2</li>
                        <li className="f-li">Week 3</li>
                    </ul>
                <li className="menu-title" >Practical</li>
                    <ul>
                        <li className="f-li">Week 1</li>
                        <li className="f-li">Week 2</li>
                        <li className="f-li">Week 3</li>
                    </ul>
            </ul>
        </div>  
    </>
  );
  };

export default CourseMenuContent;