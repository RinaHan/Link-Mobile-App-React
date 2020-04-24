import React from 'react';
import './personalmessage.css';
import ConvoHeader from '../../comps/ConvoHeader';
import Footer from '../../comps/Footer';
import Buttons from '../../comps/Buttons';

var messages = document.getElementById("messages");
var input = document.getElementById("input");
var button = document.getElementById("button");

button.addEventListener("click", function(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";
});


const PersonalMessage = ({}) => <div className="mainP">
    <ConvoHeader />
    <div className="messageBox"><ul className="messages"></ul></div>
    <div className="inputCont">
    <input className="input" placeholder="Type a Message..." />
        <Buttons className="button" width={28} height={8} text={"send"} color={"#3BA3A8"}/>
    </div>
<div className="msgFooter"><Footer /> 
</div>
</div>

PersonalMessage.defaultProps = {
    
    
   }
   
   export default PersonalMessage;