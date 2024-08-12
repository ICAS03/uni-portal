import { useState } from "react";
import './aiChatbot.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { fetchGeminiResponse } from '../../utils/GeminiApi.jsx'; 

function aiChatbot() {
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            message: "Hello, I am Gemini, your super assistant. What can I do for you today?",
            sender: "Gemini",
            direction: "incoming"
        }
    ]);

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        };
        const newMessages = [...messages, newMessage];

        // Update message state
        setMessages(newMessages);

        // Set a typing indicator (Gemini is typing)
        setTyping(true);

        // Make API request to Gemini
        const response = await fetchGeminiResponse(message, "chatbot");

        // Add Gemini's response to the messages
        const geminiResponseMessage = {
            message: response,
            sender: "Gemini",
            direction: "incoming"
        };
        setMessages([...newMessages, geminiResponseMessage]);
        setTyping(false);
    };

    return (
        <div className="aiChatbot-wrapper">
            <div className="aiChatbot">
                <h2>AI CHATBOT</h2>
                <div className="chatbot-box">
                    <MainContainer>
                        <ChatContainer>
                            <MessageList
                                scrollBehavior="smooth"
                                typingIndicator={typing ? <TypingIndicator content="Gemini is typing" /> : null}
                            >
                                {messages.map((message, i) => (
                                    <Message key={i} model={message} />
                                ))}
                            </MessageList>
                            <MessageInput placeholder="Type Message Here" onSend={handleSend} />
                        </ChatContainer>
                    </MainContainer>
                </div>
            </div>
        </div>
    );
}

export default aiChatbot;
