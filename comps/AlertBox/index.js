import React from 'react';
import './alertbox.css';

const AlertBox = ({text}) => 
<div
style = {
    {text: text}}
className="alert_container">
{text}
</div>

AlertBox.defaultProps = {
    text: "Alert Box"
}

export default AlertBox;