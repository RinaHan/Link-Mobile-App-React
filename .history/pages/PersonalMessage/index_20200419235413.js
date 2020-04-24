import React from 'react';
import './personalmessage.css';
import ConvoHeader from '../../comps/ConvoHeader';
import Footer from '../../comps/Footer';

const PersonalMessage = ({}) => <div className="mainP">
    <ConvoHeader />
    <div className="messageBox"></div>
    <div className="msgFooter"><Footer /></div>

</div>

PersonalMessage.defaultProps = {
    
    
   }
   
   export default PersonalMessage;