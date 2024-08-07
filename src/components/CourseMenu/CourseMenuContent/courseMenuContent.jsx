//import React from "react";
import "./courseMenuContent.css";
import CourseMenuContentItem from "./courseMenuContentItem";

const CourseMenuContent = () => {
  return (
    <>
      <div className="course-menu-content-body">
        <ul>
        <CourseMenuContentItem
            menutitle="General"
            menulist={["Course Overview", "Course Syllabus", "Course Schedule"]}
          />
          <CourseMenuContentItem
            menutitle="Lecture"
            menulist={["Introduction", "Lecture Notes", "Assignments"]}
          />
          <CourseMenuContentItem
            menutitle="Tutorial"
            menulist={["Tutorial 1" , "Tutorial 2" , "Tutorial 3"]}
          />
          <CourseMenuContentItem
            menutitle="Assignment"
            menulist={["Project Work", "Group Discussions", "Exams"]}
          />
      
        </ul>
      </div>
    </>
  );
};

export default CourseMenuContent;
