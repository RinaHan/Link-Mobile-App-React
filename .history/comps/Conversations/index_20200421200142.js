import React from 'react';
import './conversations.css';

const defaultprofPic= require('./profpic.jpg');
const arrow= require('./arrow.jpg');

const Conversations = ({profpic, nameOfUser, userMessage}) => <div className="convoBlock">

    <div className="userPic"><img src={profPic}/></div>
    <div className="userText">
    <div className="nameOfUser">{nameOfUser}</div>
    <div className="userMessage">{userMessage}</div>
    </div>
    <div className="openConvo"><img src={arrow} /></div>

</div>

Conversations.defaultProps = { 
   defaultProfPic:profPic,
   nameOfUser:"Default Username",
   userMessage:"Default Message",
   
  }
  
  export default Conversations;