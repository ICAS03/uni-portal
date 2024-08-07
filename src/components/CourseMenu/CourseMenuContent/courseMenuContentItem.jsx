import React, { useState } from 'react';
import './courseMenuContentItem.css'; 
import dropDownIcon from '../../../assets/icons/drop_down_black.png'; 

const CourseMenuContentItem = ({ title, content, icon, mini_title }) => {
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
        </>
      )}
    </div>
  );
}

export default CourseMenuContentItem;
