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
            message: "Hello, I am Gemini, your homework assistant. What can i do for you today?",
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
                    text: `Answer in university level: ${query}`
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