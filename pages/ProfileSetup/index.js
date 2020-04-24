import React from 'react';
import './profilesetup.css';
import Questions from '../../comps/questions';
import Sliders from '../../comps/sliders';
import Buttons from '../../comps/Buttons';

const ProfileSetup = () =>
    <div id="profilewhole">
        <div id="header_message">Looks like you're new!</div>
        <p id="sentence">Lets get youre profile setup so we can get you Linkt up!</p>
        <div id="profilealign">
            <Questions 
            text4= "Other"/>
            <Questions 
            text1= "Show me"
            text2= "Women"
            text3= "Man"
             />
            <Sliders />
        </div>
        <div id="profilebutton">
        <Buttons 
            text="NEXT"
            width="220px"
            height="30px"
            onClick="ButtonClick"/>
            </div>
    </div>

ProfileSetup.defaultProps = {

}

export default ProfileSetup;