import React from 'react';
import './personalmessage.css';
import ConvoHeader from '../../comps/ConvoHeader';
import Footer from '../../comps/Footer';
import Buttons from '../../comps/Buttons';
import { useState } from 'react';


var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
     var newMessage = document.createElement("li");
     newMessage.innerHTML = textbox.value;
     messages.appendChild(newMessage);
     textbox.value = "";
});

const PersonalMessage = ({onClick,}) => {
    const [val, setVal] = useState("");

return <div className="mainP">
    <ConvoHeader />
    <div className="messageBox">{val}</div>
    <div className="inputCont">
    <input className="input" placeholder="Type a Message..." onChange={(e)=>{
        setVal(e.target.value);
    }}/>
        <Buttons className="button" width={28} height={8} text={"send"} color={"#3BA3A8"} onClick={()=>{
            document.getElementsByClassName(messagebox);
            document.querySelector("#messageBox").style.opacity = "100%";
            
        }}/>
    </div>
<div className="msgFooter"><Footer /> 
</div>
</div>
}
PersonalMessage.defaultProps = {
    
    
   }
   
   export default PersonalMessage;