import React from 'react';
import './messages.css';
import Footer from '../../comps/Footer';
import Conversations from '../../comps/Conversations';

const picToShow = require('./user1.png');
const picToShow2 = require('./user2.png');
const picToShow3 = require('./user3.png');
const picToShow4 = require('./user4.png');
const picToShow5 = require('./user5.png');
const picToShow6 = require('./user6.png');
const picToShow7 = require('./user1.png');


const MessagePage = ({profpic}) => <div className="main">
    <div className="messagesHeader">Messages</div>
        <div className="messagesCont">
            <Conversations nameOfUser={"Thadius Columbus"}
            userMessage={"are you a beaver cus dam"} profpic={picToShow}/>
            <Conversations nameOfUser={"Peter Powers"}
            userMessage={"haha ya so are you still down to come over cus like, we had a pretty good conversat..."} profpic={picToShow2}/>
            <Conversations nameOfUser={"Austin Demigorgen" }
            userMessage={"my friend daddy mike really thinks you’re cute. I’ll hand your # to him"} profpic={picToShow3}/>
            <Conversations nameOfUser={"Isaiah Johann"}
            userMessage={"Hey I went to BCIT too! What did you study?"} profpic={picToShow4} />
            <Conversations nameOfUser={"Griffin Koontz"}
            userMessage={"yo aren’t u anthony’s ex lol get outta here"} profpic={picToShow5}/>
            <Conversations nameOfUser={"Mathew Myers"}
            userMessage={"It was nice meeting you. I personally don’t think this will work out though. You’re..."} profpic={picToShow6}/>
            <Conversations nameOfUser={"Peter Tade"}
            userMessage={"M’lady...."} profpic={picToShow7}/>
           
        </div>
    <Footer />
</div>



MessagePage.defaultProps = {

}

export default MessagePage;