import "./courseMenuContentItem.css";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../utils/AuthContext';
import dropDownIcon from '../../../assets/icons/drop_down_black.png'; 

const CourseMenuContentItem = ({ title, content, icon, mini_title , module }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { userRole } = useAuth();

  const handleClick = () => {
    navigate('/lecturer-upload-tutorial' , {state : {module}});
  };

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-card">
      <div className="header" onClick={toggleCard}>
        <span>{title}</span>
        <img 
          src={dropDownIcon} 
          alt="Dropdown Icon" 
          className={`arrow ${isOpen ? 'open' : ''}`} 
        />
      </div>
      {isOpen && (
        <>
          {content.map((item, index) => (
            <button key={index} className="content-item">
              <img src={icon[index]} alt={mini_title[index]} className="content-icon" />
              <div className="content-titles">
                <span className="content-mini-title">{mini_title[index]}</span>
                <span className="content-title">{item}</span>
              </div>
            </button>
          ))}
          {title === "Tutorial" && userRole === "lecturer" && (
            <button className="menu-button" onClick={handleClick}>
              Add Tutorials
            </button>
          )}
        </>
      )}
    </div>
  );
 };

export default CourseMenuContentItem;
