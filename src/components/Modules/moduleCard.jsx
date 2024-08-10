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
        <h3 className="module-card-title">{module.title}</h3>
        <h5 className="module-card-subtitle mb-2 text-body-secondary">
          {module.levelOfStudy}
        </h5>
        <div className="module-card-content">
          <div className="module-card-description">
            <div className="description-item">
              <img src={prof} alt="" className="module-card-icons"></img>
              <ul>{module.professor}</ul>
            </div>

            <div className="description-item">
              <img src={calendar} alt="" className="module-card-icons"></img>
              <ul className="day">
                <li>[Lecture] {module.lectureDay}</li>
                <li>[Tutorial] {module.tutorialDay}</li>
              </ul>
            </div>

            <div className="description-item">
              <img src={clock} alt="" className="module-card-icons"></img>
              <ul className="time">
                <li>[Lecture] {module.lectureTime}</li>
                <li>[Tutorial] {module.tutorialTime}</li>
              </ul>
            </div>

            <div className="description-item">
              <img src={location} alt="" className="module-card-icons"></img>
              <ul className="location">
                <li>[Lecture] {module.lectureLocation}</li>
                <li>[Tutorial] {module.tutorialLocation}</li>
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
