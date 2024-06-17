import React from 'react';
import "./BlueS.css";
import { Bluebox } from "./BlueStyled.js";
import Card from './Card';

import cardImg1 from '../Images/pexels-emre-can-acer-2079246.jpg';
import cardImg2 from '../Images/pexels-dmitry-zvolskiy-2062426.jpg';
import cardImg3 from '../Images/pexels-christa-grover-1910472.jpg';
import cardImg4 from '../Images/pexels-jean-van-der-meulen-1457845.jpg';

const Blue = () => {
  const CardBullets1 = ["Dusting furniture", "Baseboards", "Glass surfaces", "Vacuum space", "Sanitize"];
  const CardBullets2 = ["Counter tops", "Stove-glass tops", "Refrigerator", "Microwave in/out", "Empty trash"];
  const CardBullets3 = ["Sink(s)", "Bathtub", "Remove soap scum", "Polish faucets", "Mop & sanitize floors"];
  const CardBullets4 = ["Make beds", " Mop/vacuum", "Clean blinds", "Clean blinds", "Sanitize space"];

  return (
    <>
      <Bluebox>
        <div>
          <h1>Book a Service with Zero Hassle in Just a Click</h1>
        </div>
        <div>
          <p>Book your next cleaning service with complete confidence that your information will never be compromised, traded, or sold or given away. Our online booking platform is safe, secure, and completely streamlined for your maximum convenience. You can check it out immediately!</p>
        </div>
        <div>
          <div style={{ paddingTop: "20px" }} class="butcontainer">
            <a href="/" class="button">
              <div class="button__line"></div>
              <div class="button__line"></div>
              <span style={{ color: "white" }} class="button__text">Get Quote</span>
              <div class="button__drow1"></div>
              <div class="button__drow2"></div>
            </a>
          </div>
        </div>
      </Bluebox>
      <div id="about"></div>
      <section style={{ margin: "30px", fontFamily: "Roboto, sans-serif", maxWidth: "1500px"}}>
        <div>
          <h1 style={{ padding: "10px 10% 10px 10%", textAlign: "center" }}>Bay Area Hospitality, Right To Your Doorstep</h1>
        </div>
        <div>
          <p style={{ padding: "10px 10% 10px 10%", textAlign: "center" }}>We offer a wide spectrum of efficient, comprehensive, and detailed maid services across the country. We can get your entire home tidy, clean, fresh, and healthy for you, your family, and your pets, or you can choose our specialized single-room cleaning service for that one pesky area in your home. Explore what tasks each of our services entails:</p>
        </div>
        <div className="firstdisplaychange" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div className="displaychange" style={{ display: "flex", marginBottom: "20px", justifyContent: "center", width: "100%" }}>
            <Card items={CardBullets1} image={cardImg1} title='ENTIRE SPACE' />
            <Card items={CardBullets2} image={cardImg2} title='KITCHEN' />
          </div>
          <div className="displaychange" style={{ display: "flex", paddingBottom: "20px", justifyContent: "center", width: "100%" }}>
            <Card items={CardBullets3} image={cardImg3} title='BATHROOMS' />
            <Card items={CardBullets4} image={cardImg4} title='BEDROOMS' />
          </div>
        </div>
    
      </section>
    </>
  );
};

export default Blue;
