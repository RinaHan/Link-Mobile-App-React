import React from 'react';
import './dating_profile.css';

const defaultImg1 = require('./img1.png');
const defaultImg2 = require('./img2.png');
const defaultImg3 = require('./img3.png');
const defaultImg4 = require('./img4.png');

const Dating_Profile = ({ name, age, bio, location, from, major, university, highschool }) =>
    <div id="contents">
        <a class="con name">{name}{age}</a>
        <a id="bio">{bio}</a>
        
        <span><img src={defaultImg1} /><a>{location}</a></span>
        <span><img src={defaultImg2} /><a>{from}</a></span>
        <span><img src={defaultImg3} /><a>{major}</a></span>
        <span><img src={defaultImg4} /><a>{university}</a></span>
        <span><img src={defaultImg4} /><a>{highschool}</a></span>
        
        <div id="button"><button>MESSAGE!</button></div>
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


