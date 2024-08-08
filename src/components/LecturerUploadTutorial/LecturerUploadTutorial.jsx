import React, { useState } from 'react'
import Navbar from '../Navbar/navbar';
import './LecturerUploadTutorial.css';
import QuestionCard from './LecturerQuestionCard';
import QuestionList from './LecturerQuestionList';
import {useLocation} from 'react-router-dom';


const LecturerUploadTutorial = () => {
  const location = useLocation();
  const { module } = location.state || {}; 


  return (
    <>
    <Navbar></Navbar>
    <form>
    <div className='question-body'>
        <div className='questionContent'>
           <span className='questionTitle'>
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