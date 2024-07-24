
import React from 'react'
import Navbar from '../Navbar/navbar';
import ModuleCard from '../Modules/moduleCard';
import '../MyCourses/mycourses.css';
import WeeklyAnalysis from '../Modules/weeklyAnalysis';
import AnalysisCard from '../Modules/analysisCard';
import { Link } from 'react-router-dom';


const mycourses = () => {
  return (
    <>
      <Navbar></Navbar>
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
          <ModuleCard></ModuleCard>
          <ModuleCard></ModuleCard>
          <ModuleCard></ModuleCard>
        </div>
        <AnalysisCard title="Weekly Performance Analysis">
          <WeeklyAnalysis />
        </AnalysisCard>
      </div>
      <div className='modules'>
        <Link to='/coursemenu' className='nav-links'>
          <ModuleCard></ModuleCard>
        </Link>
        <Link to='/coursemenu' className='nav-links'>
          <ModuleCard></ModuleCard>
        </Link>
        <Link to='/coursemenu' className='nav-links'>
          <ModuleCard></ModuleCard>
        </Link>
      </div>
      <AnalysisCard title="Weekly Performance Analysis">
        <WeeklyAnalysis />
      </AnalysisCard>
    </>
  );
};

export default mycourses;
