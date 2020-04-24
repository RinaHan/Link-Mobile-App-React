import React from 'react';
import './dating_profile.css';

import CustomButton from '../CustomButton';

const defaultImg1 = require('./img1.png');
const defaultImg2 = require('./img2.png');
const defaultImg3 = require('./img3.png');
const defaultImg4 = require('./img4.png');

const Dating_Profile = ({ name, age, bio, location, from, major, university, highschool }) =>
    <div id="contents">
        <a class="con name">{name}{age}</a>
        <a id="bio">{bio}</a>
        
        <div class="datingdiv"><img class="datingimg" src={defaultImg1} /><a class="datingtext">{location}</a></div>
        <div class="datingdiv"><img class="datingimg" src={defaultImg2} /><a class="datingtext">{from}</a></div>
        <div class="datingdiv"><img class="datingimg" src={defaultImg3} /><a class="datingtext">{major}</a></div>
        <div class="datingdiv"><img class="datingimg" src={defaultImg4} /><a class="datingtext">{university}</a></div>
        <div class="datingdiv"><img class="datingimg" src={defaultImg4} /><a class="datingtext">{highschool}</a></div>
        
        <div id="dating_button"><CustomButton color="#ED2265" text="MESSAGE!"/></div>
    </div>;

Dating_Profile. defaultProps = {
    name:"Peter Tade, ",
    age:"25",
    bio:"Taller, Stronger. Sharper. I love horlicks!",
    location:"Dating in Downtown, Vancouver",
    from:"Dating in Downtown, Vancouver",
    major:"Dating in Downtown, Vancouver",
    university:"Toronto University",
    highschool:"Queen Alexandra School"
}

export default Dating_Profile;


