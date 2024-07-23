import React from 'react'
import './LecturerQuestionCard.css';
import TutorialQuestion from './LecturerTutorialQuestion'

const questioncard = () => {
  return (
    <div className='question-card'>
        <div className='question-questions'>
        Question :
        </div>
       <div className='question-answer-div'>
        <TutorialQuestion></TutorialQuestion>
        <span className='attachment'>
                Upload Attachment
             </span>
       </div>
    </div>
  )
}

export default questioncard