import React from 'react';
import './header.css';

const Header = ({text, fontSize, color}) => 
<div>
    <h1 style={{
        fontSize:fontSize, 
        color:color}}>
            {text}
        </h1>
</div>

Header.defaultProps = {
    text: "Header",
    fontSize: 12,
    color: "#000",
}

export default Header;