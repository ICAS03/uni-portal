import React, { useState } from 'react';
import './courseMenuItem.css'; // Ensure you have the CSS file for styling
import dropDownIcon from '../../../assets/icons/drop_down_black.png'; 

const CourseMenuItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(true);

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
        <div className="content">
          {content.map((item, index) => (
            <button key={index}>{item}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseMenuItem;
