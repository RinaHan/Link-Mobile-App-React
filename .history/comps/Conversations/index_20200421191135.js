import React from 'react';
import './conversations.css';

const defaultProfPic= require('./profpic.png');
const arrow= require('./arrow.png');

const Conversations = ({profpic, nameOfUser, userMessage}) => <div className="convoBlock">

    <div className="userPic"><img src={profpic} className="picture"/></div>
    <div className="userText">
    <div className="nameOfUser">{nameOfUser}</div>
    <div className="userMessage">{userMessage}</div>
    </div>
    <div className="openConvo"><img src={arrow} /></div>

</div>

Conversations.defaultProps = {
   profpic:defaultProfPic, arrow, 
   nameOfUser:"Default Username",
   userMessage:"Default Message",
   
  }
  
  export default Conversations;