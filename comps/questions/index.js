import React from 'react';
import './questions.css';

const Questions = ({text1, text2, text3, text4}) =>
    <div className="question_bubble">
        {/* <div className="title_box">
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
        </div> */}
        <div class="title_text">{text1}</div>
        <div class="answer_box">
            <div class="answer_text" >{text2}</div>
            <div class="dot1"></div>
        </div>
        <div class="answer_box">
            <div class="answer_text">{text3}</div>
            <div class="dot"></div>
        </div>
        <div class="answer_box">
            <div class="answer_text">{text4}</div>
            <div class="dot1"></div>
        </div>
    </div>

Questions. defaultProps = {
    text1: "I identify as a",
    text2: "Women",
    text3: "Man", 
}
export default Questions;