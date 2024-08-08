//import React from 'react';
import Navbar from "../Navbar/navbar";
import Lecmodulecard from "../Modules/lecmodulecard";
import "../MyCourses/lecturercourses.css";
import WeeklyAnalysis from "../Modules/weeklyAnalysis";
import AnalysisCard from "../Modules/analysisCard";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const MyCourses = () => {
const [modules , setModules]= useState([]);
const auth = getAuth();
const db = getFirestore();


useEffect(()=> {
  const fetchModules = async () => {
    try {
      const lecturerId = auth.currentUser.uid;
      const modulesCollectionRef = collection(db , `lecturers/${lecturerId}/modules`);
      const modulesSnapShot = await getDocs(modulesCollectionRef);

      const moduleList = modulesSnapShot.docs.map(doc => ({
        id : doc.id,
        ...doc.data(),
      }));
    
    
    setModules(moduleList);
      } catch (error) {
        console.error('Error fetching modules: ', error);
      }
    };

    fetchModules();
}, [auth , db]);

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
        {modules.map((module) => (
         <Link to="/coursemenu" className='lecNav'>
          <Lecmodulecard key={module.id} module={module} />
          </Link>
        ))}
        </div>
        <AnalysisCard title="Weekly Performance Analysis">
          <WeeklyAnalysis />
        </AnalysisCard>
      </div>
      
    </>
  );
};

export default MyCourses;
