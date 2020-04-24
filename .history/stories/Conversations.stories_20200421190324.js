import React from 'react';
import Conversations from '../comps/Conversations';
import ConvoHeader from '../comps/ConvoHeader';
import Footer from '../comps/Footer';


export default {
    title:"Ians Comps",
    component:Conversations,

};

export const conversations = () => <Conversations />

export const convoheader = () => <ConvoHeader />

export const footer = () => <Footer />

