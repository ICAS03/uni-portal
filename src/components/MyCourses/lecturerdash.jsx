import React , {useEffect , useState}from 'react'
import Navbar from '../Navbar/navbar';
import Lecmodulecard from '../Modules/lecmodulecard';
import '../MyCourses/lecturerdash.css';
import DashboardCalendar from '../Dashboard/dashboardCalendar';
import { Link } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const lecdash = () => {

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
    <Navbar></Navbar>
    <div className='lecdash-body'>
      <div className='lecdash-selection'>
        <h2>My Courses</h2>
       <span className='selection-span'>
      <ul className='selection-list'>
        <li>All</li>
        <li>In Progress</li>
        <li>Completed</li>
        <li>Incomplete</li>
      </ul>
     </span> 
      </div>
      
      {modules.map((module) => (
        <Link to="/lecturestats" className='lecNav'>
          <Lecmodulecard key={module.id} module={module} />
          </Link>
        ))}

      <div className='modules'>
      </div>
      <div classname='calendar'>
      <h2 className='Deadlines'>Deadlines</h2>
      <DashboardCalendar/>
      </div>
     
    </div>
    </>
  )
}

export default lecdash