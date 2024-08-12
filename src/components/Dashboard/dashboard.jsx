import React from 'react'
import Navbar from '../Navbar/navbar';
import DashboardCard from './dashboardCard'
import RadialBar from './radialbar';
import AlertCard from './alertCard';
import DashboardCalendar from './dashboardCalendar';
import ModuleCard from '../Modules/moduleCard';
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { useAuth } from "../../utils/AuthContext";

const dashboard = () => {
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
    <Navbar></Navbar>
      <h1>Welcome Back!</h1>
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
              <DashboardCard  module={module} color="purple"/>
            </Link>
          );
        })}
        <RadialBar score={75}/>
      </div>
    <h1>Deadlines</h1>
    <DashboardCalendar/>
    <h1>Alerts</h1>
    <AlertCard alertdate="Monday, 29 July 2024" alertmodule="Ideating Start-Up" alertmessage="Good Afternoon Students, I would like to inform that your assignment has extended to 27/06"/>
    </>
  );
};

export default dashboard;
