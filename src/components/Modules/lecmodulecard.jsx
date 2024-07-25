import React from 'react'
import prof from '../../assets/icons/lecturer.png';
import calendar from '../../assets/icons/calendar.png';
import clock from '../../assets/icons/time.png';
import location from '../../assets/icons/location.png';
import '../Modules/lecmodulecard.css';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


const Lecmodulecard = () => {
  return (
    <div className="module-card">
    <div className="module-card-body">
      <h3 className="module-card-title">Software Engineering</h3>
      <h5 className="module-card-subtitle mb-2 text-body-secondary">Bachelor's Degree</h5>
      <div className='module-card-content'>
      <div className='module-card-description'>

          <div className='description-item'>
          
          </div>

          <div className='description-item'>
                <img src={calendar} alt="" className='module-card-icons'></img>
                <ul className='day'>
                <li>[Lecture] Monday</li>
                <li>[Tutorial] Wednesday</li>
            </ul>
          </div>
          
          <div className='description-item'>
            <img src={clock} alt="" className='module-card-icons'></img>
            <ul className='time'> 
                <li>[Lecture] 10.30 AM - 12.30 PM </li>
                <li>[Tutorial] 8.00 AM -12.00 PM</li>
            </ul>
          </div>

          <div className='description-item'>
            <img src={location} alt="" className='module-card-icons'></img>
            <ul className='location'>
                <li>[Lecture] Lecture Theatre 1</li>
                <li>[Tutorial] Block C, Computer Lab 7</li>
            </ul>
            </div>
          </div>
          <div className="circularbar-container">
      <CircularProgressbar className="module-circle"  text = {`${30}%`} styles={
        buildStyles({
                    pathColor:'#AB47BC' ,
                    textColor: '#AB47BC'
      })}/>
      </div>
      </div>

     
      </div>
      </div>
  )
}

export default Lecmodulecard