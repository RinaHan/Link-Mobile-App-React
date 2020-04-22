import React from 'react';
import './profile.css';

const Face1 = require('./face1.jpg');
const Face2 = require('./face2.jpg');
const Face3 = require('./face3.jpg');
const Face4 = require('./face4.jpg');
const Face5 = require('./face5.jpg');

const Profile = ({ name1, name2, name3, name4, name5, age1, age2, age3, age4, age5, bio1, bio2, bio3, bio4, bio5 }) =>
    <div id="whole">
        <div id="box">
            <img src={Face1} id="face" />
            <div class="profiletext">
                <a id="first_a">{name1}</a>
                <a class="second">Age: {age1}</a>
                <a class="second">Bio: <span id="third_aa">{bio1}</span></a>
                <div><button id="button1">VIEW PROFILE</button><button id="button2">MESSAGE!</button></div>
            </div>
        </div>

        <div id="box">
            <img src={Face2} id="face" />
            <div class="profiletext">
                <a id="first_a">{name2}</a>
                <a class="second">Age: {age2}</a>
                <a class="second">Bio: <span id="third_aa">{bio2}</span></a>
                <div><button id="button1">VIEW PROFILE</button><button id="button2">MESSAGE!</button></div>
            </div>
        </div>
        <div id="box">
            <img src={Face3} id="face" />
            <div class="profiletext">
                <a id="first_a">{name3}</a>
                <a class="second">Age: {age3}</a>
                <a class="second">Bio: <span id="third_aa">{bio3}</span></a>
                <div><button id="button1">VIEW PROFILE</button><button id="button2">MESSAGE!</button></div>
            </div>
        </div>
        <div id="box">
            <img src={Face4} id="face"/>
            <div class="profiletext">
                <a id="first_a">{name4}</a>
                <a class="second">Age: {age4}</a>
                <a class="second">Bio: <span id="third_aa">{bio4}</span></a>
                <div><button id="button1">VIEW PROFILE</button><button id="button2">MESSAGE!</button></div>
            </div>
        </div>
        <div id="box">
            <img src={Face5} id="face" />
            <div class="profiletext">
                <a id="first_a">{name5}</a>
                <a class="second">Age: {age5}</a>
                <a class="second">Bio: <span id="third_aa">{bio5}</span></a>
                <div><button id="button1">VIEW PROFILE</button><button id="button2">MESSAGE!</button></div>
            </div>
        </div>
    </div>;

Profile.defaultProps = {
    name1: "Peter Tade",
    age1: "26",
    bio1: "Are you a beaver cus dam :)",

    name2: "Austin Demigorgen",
    age2: "22",
    bio2: "I like travel, music, food, and animals XD",

    name3: "Isaiah Johann",
    age3: "23",
    bio3: "I'm an outdoorsy person who really loves animals",

    name4: "Griffin Koontz",
    age4: "25",
    bio4: "I also hackpacked asia haha im so special. look at my corgi",

    name5: "Griffin Koontz",
    age5: "25",
    bio5: "I like a book, friends, music, driving"
}

export default Profile;



