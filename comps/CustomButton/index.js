import React, {useState, useEffect} from 'react';
import './custombutton.css';

//Made the UI
const CustomButton = ({ text, color, onClick }) => <div
    style={{ backgroundColor: color, boxShadow: "1px 1px 5px" + color }}
    className="custom_button_box"
    onClick={onClick}>
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>




CustomButton.defaultProps = {
    text: "Default Button",
    color: "#1E757E",
    
}

export default CustomButton;