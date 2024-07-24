//import React from 'react';
import ModuleStatCard from "./moduleStatCard.jsx";
import TaskTable from "./taskTable.jsx";
import "./moduleStat.css";
import Navbar from "../Navbar/navbar";


function moduleStat(){

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
      </div>
    </>
  );
};

export default moduleStat;
