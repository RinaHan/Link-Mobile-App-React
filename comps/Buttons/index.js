import React from 'react';
import './buttons.css';

// made the UI
const Buttons = ({text, color, width, height, onClick}) => 

<div  
style = {
    {backgroundColor: color,
    width: width,
    height: height}}
className="button_container"
onClick={onClick}>
    <div className="button_container_inner">
        {text}
    </div>    
</div>

function ButtonClick(){
    alert("Clicked");
}

Buttons.defaultProps = {
    text: "Default Button",
    color: "#ED2265",
    width: "250px",
    height: "50px",
    onClick: ButtonClick
}
export default Buttons; 
