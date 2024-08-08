//import React from 'react'
import prof from "../../assets/icons/lecturer.png";
import calendar from "../../assets/icons/calendar.png";
import clock from "../../assets/icons/time.png";
import location from "../../assets/icons/location.png";
import "../Modules/moduleCard.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const moduleCard = ({module}) => {
  return (
    <div className="module-card">
      <div className="module-card-body">
        <h3 className="module-card-title">{module.name}</h3>
        <h5 className="module-card-subtitle mb-2 text-body-secondary">
          Bachelors Degree
        </h5>
        <div className="module-card-content">
          <div className="module-card-description">
            <div className="description-item">
              <img src={prof} alt="" className="module-card-icons"></img>
              <ul>Prof</ul>
            </div>

            <div className="description-item">
              <img src={calendar} alt="" className="module-card-icons"></img>
              <ul className="day">
                <li>[Lecture] {module.lecture_date}</li>
                <li>[Tutorial] {module.tutorial_date}</li>
              </ul>
            </div>

            <div className="description-item">
              <img src={clock} alt="" className="module-card-icons"></img>
              <ul className="time">
                <li>[Lecture] {module.lecture_time}</li>
                <li>[Tutorial] {module.tutorial_time}</li>
              </ul>
            </div>

            <div className="description-item">
              <img src={location} alt="" className="module-card-icons"></img>
              <ul className="location">
                <li>[Lecture] {module.lecture_location}</li>
                <li>[Tutorial] {module.tutorial_location}</li>
              </ul>
            </div>
          </div>
          <div className="circularbar-container">
            <CircularProgressbar
              className="module-circle"
              text={`${30}%`}
              styles={buildStyles({
                pathColor: "#AB47BC",
                textColor: "#AB47BC",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default moduleCard;
