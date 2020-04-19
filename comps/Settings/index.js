import React from 'react';
import './settings.css';

const defaultImg = require('./default.png');

const Settings = ({phone_number}) => <div id="phone_box">
<div id="phone_text">Phone Number</div>
<div>{phone_number}</div>
<img src={defaultImg} style={{width:"13px", height:"13px", opacity:"50%"}}
/>
</div>;

Settings. defaultProps = {
    phone_number: "7777777777",
}

export default Settings;