//import React from "react";
import "./courseMenuContent.css";
import CourseMenuContentItem from "./courseMenuContentItem";
import speechBubble from "../../../assets/icons/speech-bubble.png";
import Announcement from "../../../assets/icons/announcement.png";
import Book from "../../../assets/icons/book.png";


const CourseMenuContent = () => {
  return (
    <>
      <div className="course-menu-content-body">
        
          <CourseMenuContentItem
            title="General" 
            content={['Announcement', 'Books']} 
            icon = {[Announcement, Book]}
            mini_title = {['Blog', 'Blog']}
          />
          <CourseMenuContentItem
            title="Introduction" 
            content={['Module Information', 'Weekly Plan', 'Course Briefing']} 
            icon = {[Book, Book, Book]}
            mini_title = {['File','File', 'File']}
          />
          <CourseMenuContentItem
            title="Lectures" 
            content={[
              'Introduction to Software Engineering',
              'Software Tools and Environments',
              'Agile Software Development',
              'Software Quality Reliability'
            ]} 
            icon = {[Book, Book, Book, Book]}
            mini_title = {['File','File', 'File', 'File']}a
          />
          <CourseMenuContentItem
            title="Tutorial" 
            content={[
              'W1: Introduction to Software Engineering',
              'W2: Software Tools and Environments',
              'W3: Agile Software Development',
              'W4: Software Quality Reliability'
            ]} 
            icon = {[Book, Book, Book, Book]}
            mini_title = {['File','File', 'File', 'File']}a
          />
      </div>
    </>
  );
};

export default CourseMenuContent;

