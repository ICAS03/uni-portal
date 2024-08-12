import React , {useState , useEffect} from 'react'
import Navbar from '../Navbar/navbar';
import '../Tutorial/tutorialreview.css';
import TutorialList from '../Tutorial/tutoriallist';
import { doc, getDoc, collection , updateDoc} from 'firebase/firestore';
import { db } from '../../utils/firebase';
import {useLocation , useNavigate} from 'react-router-dom';
import { useAuth } from '../../utils/AuthContext';


const TutorialReview = () => {
  const location = useLocation();
  const { module, tutorialId } = location.state || {}; 
  const [tutorial, setTutorial] = useState(null);
  const { userId } = useAuth();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState("");
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchTutorial = async () => {
      if (!module || !tutorialId) {
        console.error("Module or Tutorial ID is undefined.");
        return;
      }

      try {
        const tutorialDocRef = doc(db, `students/${userId}/modules/${module.id}/tutorials/${tutorialId}`);
        const tutorialDoc = await getDoc(tutorialDocRef);

        if (tutorialDoc.exists()) {
          const tutorialData = tutorialDoc.data();
          setTutorial(tutorialData);

          // Populate completedQuestions with those that have been answered
          const completed = tutorialData.questions.filter(question => question.answers && question.answers.trim() !== "");
          setCompletedQuestions(completed);
        } else {
          console.error("No such tutorial! ID: " + tutorialId);
        }
      } catch (error) {
        console.error("Error fetching tutorial: ", error);
      }
    };

    fetchTutorial();
  }, [module, tutorialId, userId]);

  const handleNextQuestion = () => {
    if (tutorial && currentQuestionIndex < tutorial.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleEndReview = () => {
    alert('Tutorial review ended successfully!');
    navigate('/dashboard');  // Replace '/desired-page' with your target route
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
            <p>{tutorial?.questions[currentQuestionIndex].answers || "No answer submitted."}</p>
              {/* <textarea className="tutorial-answer" value={answers} onChange={addAnswers}  /> */}
            </div>
          </div>
        </div>  
        <div className='tutorial-navigation'>
          <a 
              className='previous' 
              onClick={handlePreviousQuestion} 
              disabled={currentQuestionIndex === 0}
          >
            Previous
          </a>
          <a 
            className='next' 
            onClick={handleNextQuestion} 
            disabled={currentQuestionIndex === tutorial?.questions.length - 1}
          >
            Next
          </a>
          {currentQuestionIndex === tutorial?.questions.length - 1 && (
              <button 
                className='submit_tutorial_btn' 
                onClick={handleEndReview}  // Call the handleEndReview function here
              >
                End Review
              </button>
            )}
        </div>
      </div>
      <div className='question-checks'>
        <TutorialList completedQuestions={completedQuestions} questions={tutorial?.questions.length}/>
      </div>
    </div>
    </>
  )
};

export default TutorialReview;