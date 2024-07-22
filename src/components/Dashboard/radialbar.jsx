import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './radialbar.css';

const radialbar = (props) => {
  return (
    <CircularProgressbar
    className="circle"
    value={props.score}
    text={`${props.score}%`}
    styles={buildStyles({
        pathColor: props.color,
        textColor: props.color,
    })}
/>
  )
}

export default radialbar