import "./courseMenuContentItem.css";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../utils/AuthContext';
import dropDownIcon from '../../../assets/icons/drop_down_black.png'; 
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

const CourseMenuContentItem = ({ title, content, icon, mini_title , module }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { userRole , userId} = useAuth();

  const handleClick = () => {
    console.log(module.id);
    navigate('/lecturer-upload-tutorial' , {state : {module}});
  };

  const handleToTutorial = async (tutorialId) => {
    try {
      const tutorialDocRef = doc(db, `students/${userId}/modules/${module.id}/tutorials/${tutorialId}`);
      const tutorialDoc = await getDoc(tutorialDocRef);
  
      if (tutorialDoc.exists()) {
        const tutorialData = tutorialDoc.data();
        const allQuestionsAnswered = tutorialData.questions.every(
          question => question.answers && question.answers.trim() !== ""
        );
  
        if (allQuestionsAnswered) {
          navigate('/tutorialreview', { state: { module, tutorialId } });
        } else {
          navigate('/tutorial', { state: { module, tutorialId } });
        }
      } else {
        console.error("No such tutorial! ID: " + tutorialId);
      }
    } catch (error) {
      console.error("Error fetching tutorial: ", error);
    }
  }

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
            <div key={index} className="content-item-container">
              <button 
                className="content-item"  
                onClick={() => handleToTutorial(item.id)}
              >
                <img src={icon[index]} alt={mini_title[index]} className="content-icon" />
                <div className="content-titles">
                  <span className="content-mini-title">{mini_title[index]}</span>
                  <span className="content-title">{item.name}</span>
                </div>
              </button>
            </div>
          ))}
           {title === "Tutorial" && userRole === "lecturer" && (
            <button className="menu-button" onClick={handleClick}>
              Add Tutorials
            </button>
          )}
        </>
      )}
        </div>
      )};

export default CourseMenuContentItem;
