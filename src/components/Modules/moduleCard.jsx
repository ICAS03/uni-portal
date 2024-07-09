import React from 'react'
import prof from '../../assets/icons/lecturer.png';
import calendar from '../../assets/icons/calendar.png';
import clock from '../../assets/icons/time.png';
import location from '../../assets/icons/location.png';
import '../Modules/moduleCard.css';

const moduleCard = () => {
  return (
    <div className="card">
    <div className="card-body">
      <h3 className="card-title">Software Engineering</h3>
      <h5 className="card-subtitle mb-2 text-body-secondary">Bachelor's Degree</h5>
      <div className='card-content'>
      <span className='card-description'>

          <div className='description-item'>
          <img src={prof} alt="" className='card-icons'></img>
          <ul>Prof</ul>
          </div>

          <div className='description-item'>
                <img src={calendar} alt="" className='card-icons'></img>
                <ul className='day'>
                <li>[Lecture] Monday</li>
                <li>[Tutorial] Wednesday</li>
            </ul>
          </div>
          
          <div className='description-item'>
            <img src={clock} alt="" className='card-icons'></img>
            <ul className='time'> 
                <li>[Lecture] 10.30 AM - 12.30 PM </li>
                <li>[Tutorial] 8.00 AM -12.00 PM</li>
            </ul>
          </div>

          <div className='description-item'>
            <img src={location} alt="" className='card-icons'></img>
            <ul className='location'>
                <li>[Lecture] Lecture Theatre 1</li>
                <li>[Tutorial] Block C, Computer Lab 7</li>
            </ul>
          </div>
        
      </span>
      <div className="progress-bar-container">
            {/* Circular Progress Bar Placeholder */}
            <div className="progress-bar">75%</div>
      </div>
      </div>

    </div>
  </div>
  )
}

export default moduleCard