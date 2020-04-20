import React from 'react';
import './convoheader.css';

const imgBack= require('./back.png');
const imgMore= require('./more.png');
const defaultProfPic= require('./profpic.png');

const ConvoHeader = ({img, username, profpic}) => <div className="header"> 
    <div className="back"><img src={imgBack} /></div>
    <div className="user">{username}</div>
    <div className="more"><img src={imgMore} /></div>
    <div className="profpic">
        <img src={profpic} />
    </div>
</div>;


ConvoHeader.defaultProps = {
  img:imgBack, imgMore,
  username:"default user",
  profpic:defaultProfPic,
}

export default ConvoHeader;