import React, { useState } from 'react';
import './input.css';
import CustomButton from '../CustomButton'



const Input = ({ placeholder, onClick }) => {
    const [val, setVal] = useState("");

    return <div className='input_cont'>
        <input onChange={(e) => {
            setVal(e.target.value);
        }} type="text" placeholder={placeholder} />
        { <CustomButton className="wholebutton" onClick={()=>{
            onClick(val);
        }} text="send" color="#1E757E" /> }
    </div>
}

Input.defaultProps = {
    placeholder: "Type a message",
    onClick:()=>{}
}

export default Input;