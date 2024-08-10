import React from 'react'
import '../Tutorial/tutorialcard.css';
import TutorialAnswer from './tutorialanswer'

const tutorialcard = () => {
  return (
    <div className='tutorial-card'>
        <div className='tutorial-questions'>
        Question 1 : What were the biggest challenges you faced during the design and construction of the Willow Creek Community Center, and how did you overcome them? (10m)
        </div>
       <div className='tutorial-answer-div'>
       <textarea className="tutorial-answer"  />
        <span className='attachment'>
                Upload Attachment
             </span>
       </div>
    </div>
  )
}

export default tutorialcard