import React from 'react'
import Navbar from '../Navbar/navbar';
import './LecturerUploadTutorial.css';
import QuestionCard from './LecturerQuestionCard';
import QuestionList from './LecturerQuestionList';


const LecturerUploadTutorial = () => {
  return (
    <>
    <Navbar></Navbar>
    <form>
    <div className='question-body'>
        <div className='question-content'>
           <span className='question title'>
            <label>
            <input type="text" className='tutName' placeholder='Tutorial Name...'/>
            </label>
           </span>
           <span className='question-instruction'>
           <h5 className='question-instruction'>Instruction: </h5>
           <label>
           <textarea className='instructions' placeholder='Instructions...'/>
           </label>
           </span>
           <div className='question-question-card'>
             <QuestionCard></QuestionCard>
           </div>  
        </div>
       <div className='questionquestion-checks'>
         <QuestionList></QuestionList>
       </div>
    </div>
    </form>
    </>
  )
}

export default LecturerUploadTutorial