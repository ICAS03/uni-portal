import React from 'react'
import { Navbar , Container , Nav } from "react-bootstrap";
import robot from '../../assets/icons/robot.png';
import bell from '../../assets/icons/bell.png';
import messages from '../../assets/icons/speech-bubble.png';
import user from '../../assets/icons/user.png';
import { useEffect, useState } from "react";
import '../Navbar/navbar.css';
import logo from '../../assets/icons/mortarboard.png';
import search from '../../assets/icons/search.png';

const navbar = () => {

  return (
  <div className='navbar'>
    <span className='right-navbar'>
    <img src={logo} alt="" className='logo'></img>
   
   <ul className='nav-links'>
     <li>Home</li>
     <li>Dashboard</li>
     <li>My Courses</li>
   </ul>
   
    </span>
   
    <span className='left-navbar'>
    <div className='search-box'>
      <input type='text' placeholder='Search'></input>
      <img src={search} alt=""></img>
    </div>
    <div className='icons'>
      <img src={robot} alt="" className=''></img>
      <img src={bell} alt="" className=''></img>
      <img src={messages} alt="" className=''></img>
      <img src={user} alt="" className=''></img>
    </div>
    </span>
  
  </div>
  )
}

export default navbar