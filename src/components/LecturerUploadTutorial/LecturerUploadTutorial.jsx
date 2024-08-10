import React, { useState } from 'react'
import Navbar from '../Navbar/navbar';
import './LecturerUploadTutorial.css';
import {useLocation} from 'react-router-dom';
import { useAuth } from '../../utils/AuthContext';
import {doc, collection, addDoc, query, where, getDocs, updateDoc, writeBatch} from 'firebase/firestore'; 
import { db } from '../../utils/firebase';

const LecturerUploadTutorial = () => {
  const location = useLocation();
  const { module } = location.state || {}; 
  const {userId} = useAuth();

  const [tutorialName , setTutorialName] = useState("");
  const [instructions , setInstructions] = useState("");
  const [question , setQuestion] = useState("");
  const [marks , setMarks] = useState("");
  const [questions , setQuestions] = useState([]);


  const handleTutorialNameChange = (event) => {
    setTutorialName(event.target.value);
  };


  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleMarksChange = (event) => {
    setMarks(event.target.value);
  }

  const addQuestion = (event) => {
    event.preventDefault(); 
    if (question.trim() !== ""  && marks.trim() !== "") {
      setQuestions(prevQuestions => [
        ...prevQuestions, 
        { question,marks ,answers: ""}
      ]);
      setQuestion(""); // Clear the question input// Clear the answer input
      setMarks(""); // Clear the question input for the next question
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Ensure module and lecturer IDs are available
    if (!module || !userId) {
      console.error("Module or lecturer ID is missing.");
      return;
    }

       // Generate a unique ID for the tutorial
       const tutorialId = doc(collection(db, 'temp')).id;

    // Prepare the tutorial data
    const tutorialData = {
      tutorialName,
      instructions,
      questions,
    };

    // Get a reference to the Firestore batch
    const batch = writeBatch(db);

    try {
      // Construct the path to the tutorials subcollection under the lecturer
      const moduleDocRef = doc(db, `lecturers/${userId}/modules/${module.id}`);
      const tutorialsCollectionRefLecturer = collection(moduleDocRef, "tutorials");
      const tutorialDocRefLecturer = doc(tutorialsCollectionRefLecturer  , tutorialId); // Create a new document reference
      batch.set(tutorialDocRefLecturer, tutorialData);

      // Construct the path to the tutorials subcollection under the module
      const moduleDocRefInModules = doc(db, `modules/${module.id}`);
      const tutorialsCollectionRefModule = collection(moduleDocRefInModules, "tutorials");
      const tutorialDocRefModule = doc(tutorialsCollectionRefModule , tutorialId); // Create a new document reference
      batch.set(tutorialDocRefModule, tutorialData);

     // Retrieve all students
     const studentsSnapshot = await getDocs(collection(db, "students"));

     // Process each student
    for (const studentDoc of studentsSnapshot.docs) {
      const studentId = studentDoc.id;
      const studentModulesRef = collection(db, `students/${studentId}/modules`);
      const studentModulesSnapshot = await getDocs(studentModulesRef);

    // Check if the student is enrolled in the module
    for (const moduleDoc of studentModulesSnapshot.docs) {
     if (moduleDoc.id === module.id) {
       // Add the tutorial to this module subcollection
       const studentTutorialsCollectionRef = collection(studentDoc.ref, "modules", module.id, "tutorials");
       const studentTutorialDocRef = doc(studentTutorialsCollectionRef, tutorialId);
       batch.set(studentTutorialDocRef, tutorialData);

       console.log(`Adding tutorial to student ${studentId}`);
     }
   }
 }
      // Commit the batch
      await batch.commit();

      console.log("Tutorial written with ID: ", tutorialDocRefLecturer.id);
      setTutorialName("");
      setInstructions("");
      setQuestions([]);
    } catch (e) {
      console.error("Error adding tutorial: ", e);
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <form onSubmit={handleSubmit}>
    <div className='question-body'>
        <div className='questionContent'>
           <span className='questionTitle'>
            <label>
            <input type="text" className='tutName' placeholder='Tutorial Name...' value={tutorialName} onChange={handleTutorialNameChange}/>
            </label>
           </span>
           <span className='question-instruction'>
           <h5 className='question-instruction'>Instruction: </h5>
           <label>
           <textarea className='instructions' placeholder='Instructions...' value={instructions} onChange={handleInstructionsChange}/>
           </label>
           </span>
           <div className='question-question-card'>
           <div className='question-card'>
        <div className='question-questions'>
        Question :
        </div>
       <div className='question-answer-div'>
       <textarea className="tutorial-question" value={question} onChange={handleQuestionChange} />
       Marks Allocation:
       <label>
            <input type="text" className='marks' placeholder='Enter Marks...' value={marks} onChange={handleMarksChange}/>
            </label>
       </div>
    </div>
           </div>
        </div>
       <div className='questionquestion-checks'>
       <div className="question-header">
    <h3 style={{textAlign:'left', marginLeft:3}}>Question {questions.length + 1}</h3>
    <hr style={{marginTop:15, marginLeft:7}}></hr>
    <button className='addQuestionButton' onClick={addQuestion}>+ Add Question</button>
  </div>
       </div>
    </div>
    <button type="submit" className='submitTutorialBtn' >Submit Tutorial </button>
    </form>
    </>
  )
};

export default LecturerUploadTutorial