import React from 'react';
import "./Logo.css"
import tbLogo from '../../assets/images/logo.png';

const logo = (props) => (
    <div className="Logo">
        <img src={tbLogo} alt="Tb logo"/>
    </div>
);

export default logo;
