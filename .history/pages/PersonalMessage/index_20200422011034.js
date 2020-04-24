import React from 'react';
import './personalmessage.css';
import ConvoHeader from '../../comps/ConvoHeader';
import Footer from '../../comps/Footer';
import Buttons from '../../comps/Buttons';
import { useState } from 'react';


const picToShow = require('./user1.png');
const picToShow2 = require('./user2.png');
const picToShow3 = require('./user3.png');
const picToShow4 = require('./user4.png');
const picToShow5 = require('./user5.png');
const picToShow6 = require('./user6.png');
const picToShow7 = require('./user1.png');

const PersonalMessage = ({onClick,}) => {
    const [val, setVal] = useState("");

return <div className="mainP">
    <ConvoHeader defaultProfPic={profpic}/>
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