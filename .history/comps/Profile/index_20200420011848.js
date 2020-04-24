import React from 'react';
import './profile.css';

const defaultImg = require('./img1.jpg');

const Profile = ({name, age, bio}) => <div id="box">
<img src={defaultImg} id="img2"
/>
<div id="contents">
    <a id="first_a">{name}</a>
    <a class="second">Age: {age}</a>
    <a class="second">Bio: <span id="third_a">{bio}</span></a>
    <div><button id="button1">VIEW PROFILE</button><button id="button2">MESSAGE!</button></div>
</div>
</div>;

Profile. defaultProps = {
    name:"Peter Tade",
    age:"26",
    bio:"Are you a beaver cus dam :)"
}

export default Profile;



