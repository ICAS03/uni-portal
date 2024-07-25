import React from 'react'
import Navbar from '../Navbar/navbar';
import DashboardCard from './dashboardCard'
import RadialBar from './radialbar';
import AlertCard from './alertCard';
import DashboardCalendar from './dashboardCalendar';

const dashboard = () => {
  return (
    <>
    <Navbar></Navbar>
     <h1>Welcome Back!</h1>
        <DashboardCard module="Software Engineering" color="blue"/>
    <DashboardCard module="System Architecture" color="purple"/>
    <DashboardCard module="Database Structure" color="yellow"/>
    <RadialBar score={75}/>
    <h1>Deadlines</h1>
    <DashboardCalendar/>
    <h1>Alerts</h1>
    <AlertCard alertdate="Monday, 29 July 2024" alertmodule="Ideating Start-Up" alertmessage="Good Afternoon Students, I would like to inform that your assignment has extended to 27/06"/>
    </>
  );
};

export default dashboard;
