import React from 'react'
import analytics from '../../assets/icons/Futures.png'
import './dashboardCard.css';

const dashboardCard = (props) => {
  const { module, color } = props;
  
  const progressLineClass = `card-progress-line ${color}`;
  return (
    <div className="dashboard-card">
    <h2 className="dashboard-card-title">{module}</h2>
    <img className="dashboard-card-button" src={analytics} alt="" href={props.page} />
    <p className="dashboard-card-description">Bachelor Degree</p>
    <div className="dashboard-card-progbar">
      <span className={progressLineClass}></span>
    </div>
  </div>
  )
}

export default dashboardCard