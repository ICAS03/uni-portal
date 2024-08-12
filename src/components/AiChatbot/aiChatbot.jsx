import { useState } from "react";
import './aiChatbot.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"
import axios from "axios";



function aiChatbot() {
    // const apiKey = process.env.GEMINI_API_KEY;
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            message: "Hello, I am Gemini, your super assistant. What can i do for you today?",
            sender: "Gemini",
            direction: "incoming"
        }
    ]);
    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"

        }
    const newMessages = [...messages, newMessage];
    

    //update message state
    setMessages(newMessages);

    // set a typing indicator (Gemini is typing)
    setTyping(true);

     // Make API request to Gemini
     const response = await fetchGeminiResponse(message);

     // Add Gemini's response to the messages
     const geminiResponseMessage = {
         message: response,
         sender: "Gemini",
         direction: "incoming"
     };
     setMessages([...newMessages, geminiResponseMessage]);
     setTyping(false);
 };
 const fetchGeminiResponse = async (query) => {
    const apiKey = 'AIzaSyDeijMi6eHxCEApVeyIHq3Y2wqDz-BX3sY'; // Our API key
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    try {
        const response = await axios.post(url, {
            contents: [{
                parts: [{
                    text: `
                            Context: 
                            As a website assistant,  
                            you are required to answer questions from users, 
                            and provide information about the website.
                            Your answer should be clear and concise with a limitation of one to three sentance per answer. 

                            Below will be our website page list and its description:
                            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                            //Dashboard displays course progress, deadlines, a calendar and alerts.
                            <Route path='/mycourses' element={<MyCourses></MyCourses>}></Route>
                            //My Courses details the modules and performance for each module taken.
                            <Route path='/tutorial' element={<Tutorial></Tutorial>}></Route>
                            //Tutorial is where students do questions given by lecturer.
                            <Route path='/modulestat' element={<ModuleStat/>}></Route>
                            //Modulestat is where in depth performance of each module is found.
                            <Route path='/lecturer-upload-tutorial' element={<LecturerUploadTutorial/>}></Route>
                            //This is where lecturers can upload tutorials
                            <Route path='/coursemenu' element={<CourseMenu/>}></Route>
                            //Course page with access to modules, assignments, and announcements.
                            <Route path='/lecturestats' element={<LecModStat/>}></Route>
                            //Modulestat is where in depth performance of each student can be monitored.
                            <Route path="/studentlist" element={<StudentList />}></Route>
                            //Studentlist is where the list of students can be found.
                            <Route path='/lecturerdash' element={<Lecturerdash/>}></Route>
                            //Dashboard displays course progress, deadlines and a calendar for the lecturer.
                            <Route path="/lectureredit" element={<LecturerEdit />}></Route>
                            //Lectureredit is where the admin is able edit the list of lecturers. 
                            <Route path="/studentedit" element={<StudentEdit />}></Route>
                            //studentedit is where the admin is able edit the list of students. 
                            <Route path="/moduleedit" element={<ModuleEdit />}></Route>
                            //moduledit is where the admin is able to edit module for students and lecturers.
                            <Route path="/admindash" element={<AdminDash />}></Route>
                            //admindash is the dashboard for admins and is the landing page for admins.
                            <Route path="/addstudent" element= {<AddStudent />}></Route>
                            //addstudent is where the admin is able to add students to the database.
                            <Route path="/addLecturer" element= {<AddLecturer />}></Route>
                            //addLecturer is where the admin is able to add lecturers to the database.
                            <Route path="/addModule" element= {<AddModule />}></Route>
                            //addModule is where the admin is able to add modules to the database.
                            <Route path="/lecture-upload" element={<LectureUpload />}></Route>
                            //lecture-upload is where the lecturer is able to upload material.
                            <Route path="/profilepage" element={<ProfilePage />}></Route>
                            //profilepage is where the students are able to decorate their own page with their timeline.
                            <Route path="/adminLogin" element={<AdminLogin />}></Route>
                            //adminLogin is used for admin to login.
                            <Route path="/aiChatbot" element={<AIChatbot />}></Route>

                            Instructions:
                            For example, 
                            example 1: if a user asks "What is the website about?",
                            reply should be "The website is a platform for students to learn, access module information and answer tutorial questions."
                            example 2: if a user asks "How do I register for a course?",
                            reply should be "To register for a course, click on the 'Register' button on the course page."
                            example 3: if a user asks "How do I submit an assignment?",
                            reply should be "To submit an assignment, go to the specific assignment page, click on the 'Submit' button on the assignment page."



                            Question: ${query}
                        `
                }]
            }]  
        });

        // Extract the generated response text from the API response
        const geminiResponse = response.data.candidates[0].content.parts[0].text;
        return geminiResponse;
    } catch (error) {
        console.error("Error fetching Gemini response:", error);
        return "Sorry, I couldn't process your request.";
    }
};
    

    return(
        <div className="aiChabot-wrapper">
        <div className="aiChatbot">
            <h2>AI CHATBOT</h2>
           <div className="chatbot-box">
            <MainContainer>
                <ChatContainer>
                    <MessageList
                    scrollBehavior="smooth"
                    typingIndicator={typing ? <TypingIndicator content="Gemini is typing" /> : null}
                    >
                        {messages.map((message, i) => {
                            return <Message key={i} model={message} />
                        })}


                    </MessageList>
                    <MessageInput placeholder="Type Message Here" onSend={handleSend}/>
                    
                </ChatContainer>
            </MainContainer>
            </div> 

        </div>
        </div>
    )
}

export default aiChatbot;