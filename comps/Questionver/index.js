import React from 'react';
// import '../questions_1.css';

const Questionver = ({text1, text2, text3}) =>
    
         <div className="question_bubble">
        <div class="title_text">{text1}</div>
        <div class="answer_box">
            <div class="answer_text" >{text2}</div>
            <div class="dot1"></div>
        </div>
        <div class="answer_box">
            <div class="answer_text">{text3}</div>
            <div class="dot"></div>
        </div>
        </div> 
       
    
Questionver. defaultProps = {
    text1: "I identify as a",
    text2: "Women",
    text3: "Man", 
}
export default Questionver;