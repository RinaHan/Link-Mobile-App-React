import React from 'react';
import Header from '../../comps/header';
import CustomButton from '../../comps/CustomButton';
import AlertBox from '../../comps/AlertBox';
import './login.css';

function Login() {
    document.querySelector("#login_overlay").style.display = "block";
    document.querySelector("#login_alert").style.display = "block";
}

const LoginPage = ({}) => {
    return <div id="login_page">
        <div id="login_header">
            <div id="login_logo"></div>
            <Header fontSize={24} color="#FAFAFA" text="LINKT"/>
        </div>
        <div class="login_button" onClick={Login}>
            <CustomButton color="#4267B2" width="300px" text="CONNECT WITH FACEBOOK"/>
        </div>
        <div class="login_button" onClick={Login}>
            <CustomButton color="#ED2265" width="300px" text="CONNECT WITH INSTAGRAM"/>
        </div>
        <div id="login_overlay"></div>
        <div id="login_alert">
            <AlertBox text="Now connecting..."/>
        </div>
    </div>
}

export default LoginPage;