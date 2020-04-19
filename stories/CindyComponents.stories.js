import React from 'react';
import Buttons from '../comps/Buttons';
import ChatMessage from '../comps/ChatMessages';
import AlertBox from '../comps/AlertBox'

export default {
    title: "Cindy's Components",
    component: Buttons
}

export const LinktButton = () =>
<Buttons/>

export const LinktChatMessage = () =>
<ChatMessage/>

export const LinktAlertBox = () =>
<AlertBox/>