import React from 'react';
import './LecNavBar.css';

const LecNavBar = () => {
  return (
    <>
    <div className="LecNavBar">
      <ul className="nav">
        <li className="nav-item">
          <a href="#statistics" className="nav-link active">Statistics</a>
        </li>
        <li className="nav-item">
          <a href="#student-list" className="nav-link">Student List</a>
        </li>
        <li className="nav-item">
          <a href="#course-material" className="nav-link">Course Material</a>
        </li>
      </ul>
    </div>
    </>
  );

};

export default LecNavBar