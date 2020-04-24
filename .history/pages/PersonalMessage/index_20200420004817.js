import React from 'react';
import './personalmessage.css';
import ConvoHeader from '../../comps/ConvoHeader';
import Footer from '../../comps/Footer';
import Buttons from '../../comps/Buttons';

const PersonalMessage = ({}) => <div className="mainP">
    <ConvoHeader />
    <div className="messageBox"></div>
    <div className="inputCont">
    <input className="input" placeholder="Type a Message..." />
        <Buttons width={"100%"} height={"24px"} />
    </div>
<div className="msgFooter"><Footer /> 
</div>
</div>

PersonalMessage.defaultProps = {
    
    
   }
   
   export default PersonalMessage;