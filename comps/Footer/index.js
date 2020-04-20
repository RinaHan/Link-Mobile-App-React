import React from 'react';
import './footer.css';

const imgProfile= require('./profileIcon.png');
const imgMessages= require('./messageIcon.png');
const imgSettings= require('./settingIcon.png');

const Footer = ({img}) => <div className="footer"

>
<div className="fotter">
    <div onClick={openProfile}><img src={imgProfile} /></div>
    <div onClick={openMessages}><img src={imgMessages} /></div>
    <div onClick={openSettings}><img src={imgSettings} /></div>
</div>
</div>

function openSettings() {
    alert("Opening Settings");
}
function openMessages() {
    alert("Opening Messages");
}
function openProfile() {
    alert("Opening Profile");
}

Footer.defaultProps = {
    img:imgProfile, imgMessages, imgSettings,
  }
  
  export default Footer;