import React from 'react';
import './conversations.css';

const userPic= require('./profpic.png');
const arrow= require('./arrow.png');

const Conversations = ({img, nameOfUser, userMessage}) => <div className="convoBlock">

    <div className="userPic"><img src={userPic} /></div>
    <div className="nameOfUser">{nameOfUser}</div>
    <div className="userMessage">{userMessage}</div>
    <div className="openConvo"><img src={arrow} /></div>

</div>

Conversations.defaultProps = {
   img:userPic, arrow,
   nameOfUser:"Default Username",
   userMessage:"Default Message",
   
  }
  
  export default Conversations;