import React from "react";
import 'react-alice-carousel/lib/alice-carousel.css';
import Slider from "../Slider/Slider"
import {DarkBlueBox, TBackground, ResponsiveDiv, SecondResponsiveDiv, TestemonialImage } from "./Testemonialsstyled";

import testemonial1 from "../Images/testemonial1.png";
import testemonial2 from "../Images/testemonial2.png";
import testemonial3 from "../Images/testemonial3.png";
import testemonial4 from "../Images/testemonial4.png";

const responsive = {
    0: { items: 1 },
  568: { items: 2 },
  768: { items: 3 },
  1024: { items: 4 }
};

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img style={{height: "350px"}} src={testemonial1} onDragStart={handleDragStart}/>,
  <img style={{height: "350px"}} src={testemonial2} onDragStart={handleDragStart}/>,
  <img style={{height: "350px"}} src={testemonial3} onDragStart={handleDragStart}/>,
  <img style={{height: "350px"}} src={testemonial4} onDragStart={handleDragStart}/>,
];

const Testemonials = () => {
    return(
      <>
        <TBackground id="testimonials">
            <div style={{zIndex: "2"}}>
                <ResponsiveDiv>
                  <SecondResponsiveDiv>
                    <TestemonialImage src={testemonial1} alt='testemonial'/>
                    <TestemonialImage src={testemonial2} alt='testemonial'/>
                  </SecondResponsiveDiv>
                  <SecondResponsiveDiv>
                  <TestemonialImage src={testemonial3} alt='testemonial'/>
                  <TestemonialImage src={testemonial4} alt='testemonial'/>
                  </SecondResponsiveDiv>
                </ResponsiveDiv>
            </div>
        </TBackground>
        {/*<Slider>
        </Slider>*/}
        </>
    );
};

export default Testemonials;