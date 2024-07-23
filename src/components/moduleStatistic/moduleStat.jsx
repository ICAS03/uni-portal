import React from 'react';
import ModuleStatCard from './moduleStatCard.jsx'
import TaskTable from './taskTable.jsx'
import './moduleStat.css'
import Navbar from '../Navbar/navbar';

const moduleStat = () =>{
    return (
      <>
      <Navbar/>
      <h1 style={{marginLeft:'70px', marginTop:'30px'}}>Software Engineering</h1>
      <div className='ModuleStatCardMain-Cont'>
      <div className="ModuleStatCard-cont">
      <ModuleStatCard name = "Average Course Score" score = {50} color='#9CCC65'/>
      <ModuleStatCard name = "Average Score" score = {75} color='#F44336'/>
      <ModuleStatCard name = "Progress" score = {33} color='#AB47BC'/>
      <ModuleStatCard name = "Overall Course Mark" score = {10} color='#29B6F6'/>
      </div>
      <div className="aiReview">
      <p>Ivy has been doing great work so far, showing a solid understanding of the material. To improve further, I recommend providing more detailed answers to each question. This will help demonstrate a deeper grasp of the concepts. Keep up the good work!</p>
      </div>
      <TaskTable/>
      </div>
      </>
    )
  }
  
  export default moduleStat