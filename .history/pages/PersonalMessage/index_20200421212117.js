import React from 'react';
import './personalmessage.css';
import ConvoHeader from '../../comps/ConvoHeader';
import Footer from '../../comps/Footer';
import Buttons from '../../comps/Buttons';


const PersonalMessage = ({}) => <div className="mainP">
    <ConvoHeader />
    <div className="messageBox"><ul className="messages"></ul></div>
    <div className="inputCont">
    <input className="input" placeholder="Type a Message..." />
        <Buttons width={28} height={8} text={"send"} color={"#3BA3A8"}/>
    </div>
<div className="msgFooter"><Footer /> 
</div>
</div>

PersonalMessage.defaultProps = {
    
    
   }
   
   export default PersonalMessage;