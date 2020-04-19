import React from 'react';
import './questions.css';

const Questions = () => <div className="question_bubble">
    
        <div className="title_box">
            <h1 className="title_text">I identify as a</h1>
        </div>
        <div className="answer_box">
            <h1 className="answer_text">Woman</h1>
            <div className="dot"></div>
        </div>
        <div className="answer_box">
            <h1 className="answer_text">Man</h1>
            <div className="dot"></div>
        </div>
        <div className="answer_box">
            <h1 className="answer_text">Other</h1>
            <div className="dot"></div>
        </div>
</div>

export default Questions;