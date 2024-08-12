import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/navbar';
import '../Tutorial/tutorialreview.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/AuthContext';
import { fetchGeminiResponse } from '../../utils/GeminiApi';

const TutorialReview = () => {
    const location = useLocation();
    const { module, tutorialId } = location.state || {};
    const [tutorial, setTutorial] = useState(null);
    const { userId } = useAuth();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [aiReviewData, setAiReviewData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTutorial = async () => {
            try {
                const tutorialDocRef = doc(db, `students/${userId}/modules/${module.id}/tutorials/${tutorialId}`);
                const tutorialDoc = await getDoc(tutorialDocRef);
                if (tutorialDoc.exists()) {
                    const tutorialData = tutorialDoc.data();
                    setTutorial(tutorialData);
                } else {
                    console.error("No such tutorial! ID: " + tutorialId);
                }
            } catch (error) {
                console.error("Error fetching tutorial: ", error);
            }
        };
        fetchTutorial();
    }, [module, tutorialId, userId]);

    useEffect(() => {
        const fetchData = async () => {
            if (tutorial) {
                const currentQuestion = tutorial.questions[currentQuestionIndex]?.question;
                const currentAnswer = tutorial.questions[currentQuestionIndex]?.answers;
                const fullMark = tutorial.questions[currentQuestionIndex]?.marks;
                const message = `
                              You are a professor in a university, your student has answered question ${currentQuestionIndex + 1},
                              the full question is: ${currentQuestion}, and the student answer is: ${currentAnswer};
                              Please provide a concise and constructive feedback for the student with a maximum word count of 300 words,
                              please be extremely careful with the word count which is 300 words,
                              and also provide a score for the student's answer, the full mark for this question will be ${fullMark},
                              do provide an accurate score for this answer according to the full mark.
                              
                              As the example, if the score is 60 out of 100, and the full mark for this question is 10, then the actual score should be 6 out of 10.
                              There are also a strict requirement for the answer, which are:
                              1. The answer should have a word count of 300 words
                              2. The answer should have accurate score according to the full mark
                              3. The Score should be stated at the first line of the answer
                                for example: "Score: 6/10 \n Your answer is good, but you can improve on your explanation."`;

                const response = await fetchGeminiResponse(message, "review");
                setAiReviewData(response);
            }
        };
        fetchData();
    }, [currentQuestionIndex, tutorial]);

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
        navigate('/dashboard'); // Redirect to the dashboard page
    };

    const currentAnswer = tutorial?.questions[currentQuestionIndex]?.answers;
    const currentQuestion = tutorial?.questions[currentQuestionIndex]?.question;
    const fullMark = tutorial?.questions[currentQuestionIndex]?.marks;

    return (
        <>
            <Navbar />
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
                                    {`Question ${currentQuestionIndex + 1}: ${currentQuestion} (${fullMark}m)`}
                                </div>
                            )}
                            <div className='tutorial-answer-div'>
                                <p>{currentAnswer || "No answer submitted."}</p>
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
                                onClick={handleEndReview}
                            >
                                End Review
                            </button>
                        )}
                    </div>
                </div>
                <div className='question-checks'>
                    <h3>AI Review</h3>
                    <h4>{`Question ${currentQuestionIndex + 1}`}</h4>
                    <p className="ai-review-box">
                        {aiReviewData ? aiReviewData : "Loading AI Review..."}
                    </p>
                </div>
            </div>
        </>
    );
};

export default TutorialReview;
