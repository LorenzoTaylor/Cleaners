import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";
import './Headerimgs.css';

import img1 from '../Images/pexels-tima-miroshnichenko-6195125.jpg';
import img2 from '../Images/pexels-tima-miroshnichenko-6195129.jpg';
import img3 from '../Images/pexels-tima-miroshnichenko-6195136.jpg';

const ImgSlide = () => {
  const textArr = ["Summer Cleaning 10% Off Apply Code:10Summer At Checkout", "Spotless Solutions for a Sparkling Home", "Cleaning Excellence, Delivered Every Time"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = (currentIndex) => {
    if (currentIndex === textArr.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSlideChanging = () => {
    updateIndex(currentIndex);
  };

  return (
    <div className='container'>
      <AliceCarousel
        className='alice'
        disableButtonsControls={true}
        onSlideChanged={handleSlideChanging}
      >
        <p><img src={img1} alt="Cleaning Crew 1" className='sliderimg' /></p>
        <p><img src={img2} alt="Cleaning Crew 2" className='sliderimg' /></p>
        <p><img src={img3} alt="Cleaning Crew 3" className='sliderimg' /></p>
      </AliceCarousel>
      <div className='boxwrapper'>
        <div className='alice box'>
          {/*<p id="boxtext">
            {textArr[currentIndex]}
  </p>*/}
        </div>
      </div>
    </div>
  );
};

export default ImgSlide;
