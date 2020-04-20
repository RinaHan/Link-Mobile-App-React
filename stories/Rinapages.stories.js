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
      <div><Profile /></div>
    <div id="scrollid"></div>
      <hr></hr>

    </div>
    <div id="footerid"><Footer /></div>
  </div>

