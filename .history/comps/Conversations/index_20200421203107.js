import React from 'react';
import './conversations.css';

const defaultPic = require("../Conversations/profpic.png");
const arrow = require("../Conversations/arrow.png");

const Conversations = ({profpic}) => <div className="convoBlock">
    <div className="picCont"><img src={profpic} /></div>
    <div className="textCont">
        <div className="nameOfUser">{nameOfUser}</div>
        <div className="userMessage">{userMessage}</div>
    </div>
    <div><img src={arrow} /></div>
</div>

Conversations.defaultProps = {
profpic:defaultPic,
nameOfUser:"default username",
userMessage:"default user message",
   
  }
  
  export default Conversations;