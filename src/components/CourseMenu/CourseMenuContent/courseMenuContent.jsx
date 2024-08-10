import React, { useEffect, useState } from 'react';
import "./courseMenuContent.css";
import CourseMenuContentItem from "./courseMenuContentItem";
import speechBubble from "../../../assets/icons/speech-bubble.png";
import Announcement from "../../../assets/icons/announcement.png";
import Book from "../../../assets/icons/book.png";
import { doc, collection, getDocs ,getFirestore , onSnapshot} from 'firebase/firestore';
import { useAuth } from '../../../utils/AuthContext';
import { db } from '../../../utils/firebase';


const CourseMenuContent = ({module}) => {
  const [tutorials, setTutorials] = useState([]);
const db = getFirestore();
const {userId , userRole} = useAuth();



  useEffect(() => {
    const fetchTutorials = () => {
      try {
      const moduleDocRef = doc(db , `modules/${module.id}`);
      const tutorialsCollectionRef = collection(moduleDocRef , "tutorials");

      const unsubscribe = onSnapshot(tutorialsCollectionRef , (snapshot) => {
        const tutorialsData = snapshot.docs.map((doc) => ({
          id : doc.id,
          ...doc.data(),
        }));
        setTutorials(tutorialsData);
      });
      return () => unsubscribe();
      }
       catch (error) {
      console.error('Error fetching data');
    }
  };
  fetchTutorials();
  } ,[userId , module.id ,userRole]);



  return (
    <>
      <div className="course-menu-content-body">
        
          <CourseMenuContentItem
            module = {module}
            title="General" 
            content={['Announcement', 'Books']} 
            icon = {[Announcement, Book]}
            mini_title = {['Blog', 'Blog']}
          />
          <CourseMenuContentItem
          module = {module}
            title="Introduction" 
            content={['Module Information', 'Weekly Plan', 'Course Briefing']} 
            icon = {[Book, Book, Book]}
            mini_title = {['File','File', 'File']}
          />
          <CourseMenuContentItem
          module = {module}
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
          module={module}
          title="Tutorial" 
          content={tutorials.map(tutorial => ({id : tutorial.id , name: tutorial.tutorialName}))}
          icon={tutorials.map(() => Book)}
          mini_title={tutorials.map(() => 'File')}
        />
      </div>
    </>
  );
};

export default CourseMenuContent;

