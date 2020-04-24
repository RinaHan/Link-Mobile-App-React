import React from 'react';
import Profile from '../../comps/Profile';
import Footer from '../../comps/Footer';
import '../SettingPage/settings.css';
import '../SettingPage/face.css';



const RecommendedPage = ({ }) =>
    <div id="app">
        <div id="upper">
            <div id="recommendid">Recommended</div>
            <div id="logoid"></div>
        </div>
        <div style={{ borderBottom: "1px lightgrey solid" }}></div>
        <div >
            <div><Profile /></div>
            <div id="scrollid"></div>
            <div style={{ borderBottom: "1px lightgrey solid" }}></div>
        </div>
        <div id="footerid"><Footer /></div>
    </div>

RecommendedPage.defaultProps = {

}

export default RecommendedPage;



