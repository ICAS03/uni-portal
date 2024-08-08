import React , {useState , useEffect} from 'react'
import Navbar from '../Navbar/navbar';
import '../Tutorial/tutorialpage.css';
import TutorialCard from '../Tutorial/tutorialcard';
import TutorialList from '../Tutorial/tutoriallist';
import { doc, getDoc, collection , updateDoc} from 'firebase/firestore';
import { db } from '../../utils/firebase';
import {useLocation} from 'react-router-dom';
import { useAuth } from '../../utils/AuthContext';


const tutorialpage = () => {
  const location = useLocation();
  const { module , tutorialId } = location.state || {}; 
  const [tutorial, setTutorial] = useState(null);
  const {userId} = useAuth();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers , setAnswers] = useState("");


  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        // Directly reference the specific tutorial document in the tutorials subcollection
        const tutorialDocRef = doc(db, `students/${userId}/modules/${module.id}/tutorials/${tutorialId}`);
        const tutorialDoc = await getDoc(tutorialDocRef);

        if (tutorialDoc.exists()) {
          setTutorial(tutorialDoc.data());
        } else {
          console.error("No such tutorial! ID: " + tutorialId);
        }
      } catch (error) {
        console.error("Error fetching tutorial: ", error);
      }
    };

    fetchTutorial();
  }, [module, tutorialId]);

  const addAnswers =(event) => {
    event.preventDefault(); 
    setAnswers(event.target.value)
  }

  const updateAnswersInFirebase = async (updatedQuestions) => {
    try {
      const tutorialDocRef = doc(db, `students/${userId}/modules/${module.id}/tutorials/${tutorialId}`);
      await updateDoc(tutorialDocRef, {
        questions: updatedQuestions,
      });
    } catch (error) {
      console.error("Error updating answers in Firebase: ", error);
    }
  };


  const handleNextQuestion = async (event) => {
    event.preventDefault();

    if (tutorial && currentQuestionIndex < tutorial.questions.length - 1) {
      const updatedQuestions = [...tutorial.questions];
      updatedQuestions[currentQuestionIndex].answers = answers;

      // Update the Firestore document with the new answers
      await updateAnswersInFirebase(updatedQuestions);

      setTutorial((prevTutorial) => ({
        ...prevTutorial,
        questions: updatedQuestions,
      }));

      setAnswers(""); // Clear the textarea for the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAnswers(tutorial.questions[currentQuestionIndex - 1].answers || ""); // Show the previous answer if available
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <div className='tutorial-body'>
        <div className='tutorial-content'>
           <span className='tutorial title'>
           <h2 className='tutorial-title'>{tutorial?.tutorialName}</h2>
           </span>
           <span className='tutorial-instruction'>
           <h5 className='tutorial-instruction'>{tutorial?.instructions}</h5>
           </span>
           <div className='tutorial-question-card'>
           <div className='tutorial-card'>
           {tutorial?.questions.length > 0 && (
                <div className='tutorial-questions'>
                  {`Question ${currentQuestionIndex + 1}: ${tutorial.questions[currentQuestionIndex].question} (${tutorial.questions[currentQuestionIndex].marks}m)`}
                </div>
              )}
       <div className='tutorial-answer-div'>
       <textarea className="tutorial-answer" value={answers} onChange={addAnswers}  />
        <span className='attachment'>
                Upload Attachment
             </span>
       </div>
     </div>
           </div>  
           <div className='tutorial-navigation'>
            <a className='previous' onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>Previous</a>
            <a className='next' onClick={handleNextQuestion} disabled={currentQuestionIndex === tutorial?.questions.length - 1}>Next</a>
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