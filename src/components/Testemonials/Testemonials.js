import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import {DarkBlueBox, TBackground } from "./Testemonialsstyled";

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
        <TBackground id="testimonials">
            <DarkBlueBox style={{zIndex: "1", position: "absolute"}}>
            <div style={{zIndex: "2"}}>
            </div>
            </DarkBlueBox>
            <div style={{zIndex: "5", alignSelf: "center", paddingLeft: "70%"}}>
            <AliceCarousel
                    mouseTracking
                    infinite
                    autoWidth
                    autoPlayInterval={3500}
                    disableDotsControls
                    disableButtonsControls
                    responsive={responsive}
                    items={items}
                    autoPlay
                    style={{ paddingLeft: "0%"}}
                    />
            </div>
        </TBackground>
    );
};

export default Testemonials;