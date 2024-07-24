//import React from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./moduleStat.css";

function moduleStatCard(props) {
  return (
    <div className="card">
      <CircularProgressbar
        className="circle"
        value={props.score}
        text={`${props.score}%`}
        styles={buildStyles({
          pathColor: props.color,
          textColor: props.color,
        })}
      />
      <h3 className="card-title">{props.name}</h3>
    </div>
  );
}
export default moduleStatCard;
