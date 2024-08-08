import React from 'react'
import './LecturerQuestionCard.css';

const questioncard = () => {
  return (
    <div className='question-card'>
        <div className='question-questions'>
        Question :
        </div>
       <div className='question-answer-div'>
       <textarea className="tutorial-question"/>
        <span className='attachment'>
                Upload Attachment
             </span>
       </div>
    </div>
  )
}

export default questioncard