import React from 'react'
import './LecturerQuestionList.css';

const questionlist = () => {
  return (
    <div className="question-header">
    <h3>Question 1</h3>
    <hr style={{marginTop:15}}></hr>
    <button className='addQuestionButton'>+ Add Question</button>
  </div>
  )
}

export default questionlist