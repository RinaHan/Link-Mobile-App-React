import React from 'react';
import MessagePage from '../pages/Messages';
import PersonalMessage from '../pages/PersonalMessage';

export default {
    title:"Ian's Pages",
    component:MessagePage
};


export const messagepage = () => <MessagePage />

export const personalmessage = () => <PersonalMessage />