import React from 'react';
import Settings from '../comps/Settings';
import Profile from '../comps/Profile';
import Footer from '../comps/Footer';
import Dating_Profile from '../comps/Dating_Profile';
import './Rinapages.css';



export default {
  title: 'Recommended, Settings',
  component: Profile,
};

const defaultImg = require('./logo.png')

export const profile = () =>
  <div id="app">
    <div id="upper">
      <div id="recommendid">Recommended</div>
      <div id="logoid"></div>
    </div>
    <hr></hr>
    <div >
      <Profile />

      <Profile
        name="Austin Demigorgen"
        age="22"
        bio="I like travel, music, food, and animals XD" />

      <Profile
        name="Isaiah Johann"
        age="23"
        bio="I'm an outdoorsy person who really loves animals" />

      <Profile
        name="Griffin Koontz"
        age="25"
        bio="I also hackpacked asia haha im so special. look at my corgi" />

      <Profile
        name="Griffin Koontz"
        age="25"
        bio="I like a book, friends, music, driving" />
      <hr></hr>

    </div>
    <div id="footerid"><Footer /></div>
  </div>

