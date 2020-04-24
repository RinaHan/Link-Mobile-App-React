import React from 'react';
import './personalmessage.css';
import ConvoHeader from '../../comps/ConvoHeader';
import Footer from '../../comps/Footer';
import Buttons from '../../comps/Buttons';
import { useState } from 'react';




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
            // document.getElementsByClassName(messagebox);
            document.write(val);
        }}/>
    </div>
<div className="msgFooter"><Footer /> 
</div>
</div>
}
PersonalMessage.defaultProps = {
    
    
   }
   
   export default PersonalMessage;