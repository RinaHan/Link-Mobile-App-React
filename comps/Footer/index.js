import React from 'react';
import './footer.css';

const imgProfile= require('./profileIcon.png');
const imgMessages= require('./messageIcon.png');
const imgSettings= require('./settingIcon.png');

const Footer = ({img}) => <div className="footer">
<div className="fotter">
    <div><img src={imgProfile} /></div>
    <div><img src={imgMessages} /></div>
    <div><img src={imgSettings} /></div>
</div>
</div>

Footer.defaultProps = {
    img:imgProfile, imgMessages, imgSettings,
  }
  
  export default Footer;