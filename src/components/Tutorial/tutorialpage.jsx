import React from 'react'
import Navbar from '../Navbar/navbar';
import '../Tutorial/tutorialpage.css';
import TutorialCard from '../Tutorial/tutorialcard';
import TutorialList from '../Tutorial/tutoriallist';


const tutorialpage = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='tutorial-body'>
        <div className='tutorial-content'>
           <span className='tutorial title'>
           <h2 className='tutorial-title'>Tutorial 1 : Building Architecture</h2>
           </span>
           <span className='tutorial-instruction'>
           <h5 className='tutorial-instruction'>Instruction : You should answer all of the questions following the format provided. Please ensure that the answers are in font 12.0. Or you will be executed. DIEEEE !!!</h5>
           </span>
           <div className='tutorial-question-card'>
             <TutorialCard></TutorialCard>
           </div>  
           <div className='tutorial-navigation'>
            <a className='previous'>Previous</a>
            <a className='next'>Next</a>
           </div>
        </div>
       <div className='question-checks'>
         <TutorialList></TutorialList>
       </div>
    </div>
    </>
  )
}

export default tutorialpage