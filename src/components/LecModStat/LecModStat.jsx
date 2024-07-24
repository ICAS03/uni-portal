import React from 'react';
import ModuleStatCard from '../moduleStatistic/moduleStatCard.jsx'
import LecStatsTable from './LecStatsTable.jsx'
import './lecModStat.css'
import Navbar from '../Navbar/navbar';
import LecModNav from '../LecNavBar/LecNavBar'

const LecModStat = () =>{
    return (
      <>
      <Navbar/>
      <LecModNav/>

      <div className='ModuleStatCardMain-Cont'>
        <div className="ModuleStatCard-cont">
            <ModuleStatCard name = "Average Completion Score" score = {50} color='#9CCC65'/>
            <ModuleStatCard name = "Average Score" score = {75} color='#F44336'/>
            <ModuleStatCard name = "Top 20%" score = {85} color='#AB47BC'/>
            <ModuleStatCard name = "Bottom 20%" score = {15} color='#29B6F6'/>
        </div>
      </div>
      <div>
        <h1 style={{textAlign:'center'}}>Statistics by task</h1>
        <LecStatsTable/>
      </div>
      </>
    )
  }
  
  export default LecModStat