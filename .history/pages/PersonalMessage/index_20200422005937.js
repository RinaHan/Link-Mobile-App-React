import React from 'react';
import './personalmessage.css';
import ConvoHeader from '../../comps/ConvoHeader';
import Footer from '../../comps/Footer';
import Buttons from '../../comps/Buttons';
import { useState } from 'react';


var messageBox = document.getElementById("messages");
var input = document.getElementById("textbox");
var button = document.getElementById("button");




<div className="mainP">
    <ConvoHeader />
    <div className="messageBox"><ul></ul></div>
    <div className="inputCont">
    <input className="input" placeholder="Type a Message..." />
        <Buttons className="button" width={28} height={8} text={"send"} color={"#3BA3A8"} onClick={()=>{
         var newMessage = document.createElement("li");
         newMessage.innerHTML = textbox.value;
         messages.appendChild(newMessage);
         textbox.value = "";
            
        }}/>
        
    </div>
<div className="msgFooter"><Footer /> 
</div>

</div>


PersonalMessage.defaultProps = {
    
    
   }
   
   export default PersonalMessage;