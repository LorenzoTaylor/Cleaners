import React from "react";

import phoneImage from './Images/Lorenzos Cleaners (1).png';
import androidImg from './Images/get-it-on-google-play-google-play-badge-png-logos-23.png';
import iosImg from './Images/222-2228956_app-store-logo-app-store-icon-white.png';

import './Phone.css'


const Phone = () => {
    return(
        <div className="content">
            <img src={phoneImage} className="phone" alt=""/>
            <div className="div1">
                <p className="words">
                    Welcome Back To A <p className="cleanhome">Clean Home</p>
                </p>
                <div className="div2">
                    <img src={androidImg} className="and" alt=""/>
                    <img src={iosImg} className="ios" alt=""/>
                </div>
            </div>
            
        </div>
    );
};

export default Phone;