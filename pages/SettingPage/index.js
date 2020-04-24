import React from 'react';
import Settings from '../../comps/Settings';
// import Profile from '../comps/Profile';
import Footer from '../../comps/Footer';
import Buttons from '../../comps/Buttons';
import './settings.css';
import './face.css';



const SettingdPage = ({}) => 
<div id="app">
    <div id="upper">
      <div id="recommendid">Settings</div>
    </div>
    <div style={{ borderBottom: "1px lightgrey solid" }}></div>
    <div class="grayfont">ACCOUNT SETTINGS</div>
    <div id="facebox">
      <div>
        <div id="personimg"></div>
        <div id="changeimg">change profile photo</div>
      </div>
      <div id="persontext">
        <div id="name">Peter Tade</div>
        <div id="edit">Edit profile </div>
        <div id="arrow"> </div>
      </div>
    </div>
    <div style={{ borderBottom: "1px lightgrey solid" }}></div>
    <Settings />
    <div style={{ borderBottom: "1px lightgrey solid" }}></div>
    <Settings 
    text="Email"
    phone_number= "ganadara@gamil.com"/>
    <div style={{ borderBottom: "1px lightgrey solid" }}></div>
    <div class="grayfont">DISCOVERY</div>
    <Settings 
    text="Location"
    phone_number= "Vancouver, BC"/>
    <div style={{ borderBottom: "1px lightgrey solid" }}></div>
    <div class="specialfont">
      <div>Maximum Distance</div>
      <div id="specialimg1"></div>
      </div>
    <div style={{ borderBottom: "1px lightgrey solid" }}></div>
    <Settings
    text="Show Me"
    phone_number="Women"/>
    <div style={{ borderBottom: "1px lightgrey solid" }}></div>
    <div class="specialfont">
      <div>Age Range</div>
      <div id="specialimg2"></div>
      </div>
    <div style={{ borderBottom: "1px lightgrey solid" }}></div>
    <div class="grayfont">STATUS</div>
    <div class="specialfont">
      <div>Show me on Link</div>
      <div id="specialimg3"></div>
      </div>
    <div style={{ borderBottom: "1px lightgrey solid" }}></div>
    <div id="savebt">
      <Buttons
    text= "SAVE"
    color= "#ED2265"
    width= "80px"
    height= "12px"
    />
    </div>
    <div id="footerid"><Footer /></div>
    <div style={{ borderBottom: "1px lightgrey solid" }}></div>
  </div>;

SettingdPage. defaultProps = {

}

export default SettingdPage;