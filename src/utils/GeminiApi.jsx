// src/utils/geminiApi.js
import axios from "axios";

export const fetchGeminiResponse = async (query, type) => {
    const apiKey = 'AIzaSyDeijMi6eHxCEApVeyIHq3Y2wqDz-BX3sY'; // Your API key
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    const chatbotMessage = `Context: 
                        As a friendly and helpful website assistant,  
                        you are required to answer questions from users, 
                        and provide information about the website.
                        Your answer should be clear and concise with a limitation of one to three sentences per answer.

                        Below will be our website page list and its description:
                        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                        //Dashboard displays course progress, deadlines, a calendar, and alerts.
                        <Route path='/mycourses' element={<MyCourses></MyCourses>}></Route>
                        //My Courses details the modules and performance for each module taken.
                        <Route path='/tutorial' element={<Tutorial></Tutorial>}></Route>
                        //Tutorial is where students do questions given by the lecturer.
                        <Route path='/modulestat' element={<ModuleStat/>}></Route>
                        //Modulestat is where in-depth performance of each module is found.
                        <Route path='/lecturer-upload-tutorial' element={<LecturerUploadTutorial/>}></Route>
                        //This is where lecturers can upload tutorials.
                        <Route path='/coursemenu' element={<CourseMenu/>}></Route>
                        //Course page with access to modules, assignments, and announcements.
                        <Route path='/lecturestats' element={<LecModStat/>}></Route>
                        //LecModStat is where in-depth performance of each student can be monitored.
                        <Route path="/studentlist" element={<StudentList />}></Route>
                        //StudentList is where the list of students can be found.
                        <Route path='/lecturerdash' element={<Lecturerdash/>}></Route>
                        //Dashboard displays course progress, deadlines, and a calendar for the lecturer.
                        <Route path="/lectureredit" element={<LecturerEdit />}></Route>
                        //LecturerEdit is where the admin is able to edit the list of lecturers.
                        <Route path="/studentedit" element={<StudentEdit />}></Route>
                        //StudentEdit is where the admin is able to edit the list of students.
                        <Route path="/moduleedit" element={<ModuleEdit />}></Route>
                        //ModuleEdit is where the admin is able to edit the module for students and lecturers.
                        <Route path="/admindash" element={<AdminDash />}></Route>
                        //AdminDash is the dashboard for admins and is the landing page for admins.
                        <Route path="/addstudent" element={<AddStudent />}></Route>
                        //AddStudent is where the admin is able to add students to the database.
                        <Route path="/addLecturer" element={<AddLecturer />}></Route>
                        //AddLecturer is where the admin is able to add lecturers to the database.
                        <Route path="/addModule" element={<AddModule />}></Route>
                        //AddModule is where the admin is able to add modules to the database.
                        <Route path="/lecture-upload" element={<LectureUpload />}></Route>
                        //LectureUpload is where the lecturer is able to upload material.
                        <Route path="/profilepage" element={<ProfilePage />}></Route>
                        //ProfilePage is where the students are able to decorate their own page with their timeline.
                        <Route path="/adminLogin" element={<AdminLogin />}></Route>
                        //AdminLogin is used for the admin to log in.
                        <Route path="/aiChatbot" element={<AIChatbot />}></Route>

                        Instructions:
                        For example, 
                        example 1: if a user asks "What is the website about?",
                        reply should be "The website is a platform for students to learn, access module information and answer tutorial questions."
                        example 2: if a user asks "How do I register for a course?",
                        reply should be "To register for a course, click on the 'Register' button on the course page."
                        example 3: if a user asks "How do I submit an assignment?",
                        reply should be "To submit an assignment, go to the specific assignment page, click on the 'Submit' button on the assignment page."`;
    var messageInput = '';
    if (type === 'chatbot'){
        messageInput = chatbotMessage
    }
    else{
        messageInput = "";
    }

    try {
        const response = await axios.post(url, {
            contents: [{
                parts: [{
                    text: `
                        ${messageInput}
                        Question: ${query}
                        `
                }]
            }]  
        });

        const geminiResponse = response.data.candidates[0].content.parts[0].text;
        return geminiResponse;
    } catch (error) {
        console.error("Error fetching Gemini response:", error);
        return "Sorry, I couldn't process your request.";
    }
};
