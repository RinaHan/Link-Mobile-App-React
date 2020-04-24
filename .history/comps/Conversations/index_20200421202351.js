import React from 'react';
import './conversations.css';

const defaultPic = require("../Conversations/profpic.png");

const Conversations = ({profpic}) => <div className="convoBlock">
    <div className="picCont"><img src={profpic} /></div>
    <div className="textCont">
        <div className="userName"></div>
        <div className="userMsg"></div>
    </div>
  
</div>

Conversations.defaultProps = {
profpic:defaultPic
   
  }
  
  export default Conversations;