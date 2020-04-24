import React from 'react';
import './personalmessage.css';
import ConvoHeader from '../../comps/ConvoHeader';
import Footer from '../../comps/Footer';

const PersonalMessage = ({}) => <div className="main">
    <ConvoHeader />
    <div className="messageBox"></div>
    <Footer />

</div>

PersonalMessage.defaultProps = {
    
    
   }
   
   export default PersonalMessage;