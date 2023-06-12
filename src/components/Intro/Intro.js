import React from "react";
import Quote from "../Quote";
import './Intro.css';

import introImg1 from '../Images/Black Cleaning Service Logo (1).png';
import introImg2 from '../Images/Clock.png';
import introImg3 from '../Images/Broom.png';
import introImg4 from '../Images/From Home.png';

const Intro = () => {
  return (
    <section className="introsection" style={{ margin: "30px auto", display: "flex", fontFamily: 'Roboto, sansSerif'}}>
      <div  className="introdiv" style={{ flex: 1, marginLeft: "5%"}}>
      <h1>Home Cleaning</h1>
        <div style={{ display: "flex", flexDirection: "column"}}>
          <div style={{ display: "flex", alignItems: "center", marginRight: "20px", paddingBottom: "30px" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%"}}>
              <img src={introImg1} alt="Image 1" style={{ width: "100%", borderRadius: "50%" }} />
            </div>
            <div>
            <h3 style={{ marginLeft: "10px" }}>Vetted professionals</h3>
            <span style={{ marginLeft: "10px" }}>Pros using our platform are experienced, friendly, and screened.</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginRight: "20px", paddingBottom: "30px" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%"}}>
              <img src={introImg2} alt="Image 2" style={{ width: "100%", borderRadius: "50%" }} />
            </div>
            <div>
            <h3 style={{ marginLeft: "10px" }}>Next day availability</h3>
            <span style={{ marginLeft: "10px" }}>Book online in 60 seconds and schedule your home service for as early as tomorrow.</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginRight: "20px", paddingBottom: "30px" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%"}}>
              <img src={introImg3} alt="Image 3" style={{ width: "100%", borderRadius: "50%" }} />
            </div>
            <div>
            <h3 style={{ marginLeft: "10px" }}>Our Happiness Guarantee</h3>
            <span style={{ marginLeft: "10px" }}>Our Happiness Guarantee Your happiness is our goal. If you’re not happy, we’ll work hard to make it right.</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginRight: "20px", paddingBottom: "30px" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%"}}>
              <img src={introImg4} alt="Image 3" style={{ width: "100%",  borderRadius: "50%" }} />
            </div>
            <div>
            <h3 style={{ marginLeft: "10px" }}>Manage Everything Online</h3>
            <span style={{ marginLeft: "10px" }}>Rescheduling, contacting your professional, and paying are just a tap away.</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <Quote />
      </div>
    </section>
  );
};

export default Intro;
