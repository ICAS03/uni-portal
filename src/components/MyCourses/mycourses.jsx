//import React from 'react';
import Navbar from "../Navbar/navbar";
import ModuleCard from "../Modules/moduleCard";
import "../MyCourses/mycourses.css";
import WeeklyAnalysis from "../Modules/weeklyAnalysis";
import AnalysisCard from "../Modules/analysisCard";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { useAuth } from "../../utils/AuthContext";

const MyCourses = () => {
const {userId} = useAuth();
const [modules , setModules]= useState([]);
const db = getFirestore();

useEffect(() => {
  console.log(userId);
  if (userId !== null) {
    const modulesCollectionRef = collection(db, `students/${userId}/modules`);

    const unsubscribe = onSnapshot(modulesCollectionRef, (snapshot) => {
      const moduleList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      console.log('Fetched Modules:', moduleList); // Log the fetched data here
      setModules(moduleList); // Update state after logging the fetched data
    }, (error) => {
      console.error('Error fetching modules: ', error);
    });

    return () => unsubscribe();
  } else {
    console.log('User not logged in');
  }
}, [userId, db]);

  return (
    <>
      <Navbar />
      <div className="mycourses-body">
        <div className="mycourses-selection">
          <h2>My Courses</h2>
          <span className="selection-span">
            <ul className="selection-list">
              <li>All</li>
              <li>In Progress</li>
              <li>Completed</li>
              <li>Incomplete</li>
            </ul>
          </span>
        </div>
        <div className="modules">
        {modules.map((module) => {
  console.log('Module:', module);  
  return (
    <Link 
      key={module.id} 
      to="/coursemenu" 
      state={{ module }} 
      className='nav-links'
    >
      <ModuleCard module={module} />
    </Link>
  );
})}
        </div>
        <AnalysisCard title="Weekly Performance Analysis">
          <WeeklyAnalysis />
        </AnalysisCard>
      </div>
      
    </>
  );
};

export default MyCourses;
