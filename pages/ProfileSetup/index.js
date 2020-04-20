import React from 'react';
import './profilesetup.css';
import Questions from '../../comps/questions';
import Sliders from '../../comps/sliders';
import Buttons from '../../comps/Buttons';

const ProfileSetup = () => <div id="profile_setup_page">
  
    <h1 id="header_message">Looks like you're new!</h1>

    <p id="sentence">Lets get youre profile setup so we can get you Linkt up!</p>

    <Questions id="questions_box"/>

    <Questions id="questions_box"/>

    <Sliders id="sliders_box"/>

    <Buttons id="button_box"/>

</div>

ProfileSetup.defaultProps = {

}

export default ProfileSetup;