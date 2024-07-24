//import React from "react";
import "./courseMenuContent.css";
import CourseMenuContentItem from "./courseMenuContentItem";

const CourseMenuContent = () => {
  return (
    <>
      <div className="course-menu-content-body">
        <ul>
          <CourseMenuContentItem />
          <CourseMenuContentItem />
          <CourseMenuContentItem />
          <CourseMenuContentItem />
          <CourseMenuContentItem />
        </ul>
      </div>
    </>
  );
};

export default CourseMenuContent;
