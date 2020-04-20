import React from 'react';
import './cm.css';

const ChatMessage = ({text, bgColor, color, borderRadius}) => 
<div
style = {
    {text: text,
    backgroundColor: bgColor,
    color: color,
    borderRadius: borderRadius}}
className="chat_container">
<p class="chat_text">{text}</p>
</div>

ChatMessage.defaultProps = {
    text: "Hello! This is a chat message.",
    bgColor: "#3BA3A8", //the other user - use #1E757E for the sender
    color: "#FAFAFA",
    borderRadius: "18px 18px 18px 2px"
}

export default ChatMessage;