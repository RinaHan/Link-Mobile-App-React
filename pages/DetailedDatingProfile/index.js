import React from 'react';
import './ddp.css';

import Header from '../../comps/header';
import Button from '../../comps/CustomButton';
import Dating_Profile from '../../comps/Dating_Profile';
import Footer from '../../comps/Footer';

import { IoIosArrowBack } from 'react-icons/io';

const DatingProfilePage = ({}) => {
    return <div id="dp_page">
        <div id="dp_header">
            <div id="dp_header_icon">
                <IoIosArrowBack/>
            </div>
            <Header text="Dating Profile" color="#303030" fontSize={20}/>
        </div>
        
        <div id="dp_image">DATING PROFILE PICTURE</div>

        <div id="dp_profile">
            <Dating_Profile/>
        </div>

        <Footer/>
    </div>
}

export default DatingProfilePage;