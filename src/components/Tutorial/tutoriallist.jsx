import React from 'react'
import '../Tutorial/tutoriallist.css';

const tutoriallist = ({completedQuestions , questions}) => {
  return (
    <div className="tutorial-header">
      <h3>Tutorial Progress</h3>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${(completedQuestions.length / questions) * 100}%` }}></div>
      </div>
      <ul>
        {completedQuestions.map((question , index) => (
          <li className="completed-question"key={index}>{`Question ${index + 1}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default tutoriallist