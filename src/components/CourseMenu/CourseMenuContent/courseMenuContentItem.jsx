//import React from 'react'
import "./courseMenuContentItem.css";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../utils/AuthContext';

const CourseMenuContent = ({menutitle , menulist}) => {
  const navigate = useNavigate();
  const { userRole } = useAuth();

  const handleClick = () => {
    navigate('/lecturer-upload-tutorial'); // Replace with the desired path
  };

  return (
    <div>
      <li className="menu-title">{menutitle}</li>
      <ul>
      {menulist.map((item, index) => (
          <li key={index} className="f-li">
            {item}
          </li>
        ))}
      </ul>
      {menutitle === "Tutorial" && userRole === "lecturer" && (
        <button className="menu-button" onClick={handleClick}>
         Add Tutorials
        </button>
      )}
    </div>
  );
};

export default CourseMenuContent;
