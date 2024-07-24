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
      <nav className="sub-nav">
          <span className="nav-span">
            <ul className="nav-list">
              <li>
                <a href="/lecturestats" className="active">Statistics</a>
              </li>
              <li>
                <a href="/studentlist" >
                  Student List
                </a>
              </li>
              <li>
                <a href="/materials">Course Material</a>
              </li>
            </ul>
          </span>
        </nav>

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