import React from 'react';
import './Slider.css';

import testemonial1 from "../Images/testemonial1.png";
import testemonial2 from "../Images/testemonial2.png";
import testemonial3 from "../Images/testemonial3.png";
import testemonial4 from "../Images/testemonial4.png";

const Slider = () => {
  return(
    <div className='gallery-container'>
        <div className='gallery-container'>
            <img className='gallery-item gallery-item1' src={testemonial1} dataIndex="1"/>
            <img className='gallery-item gallery-item2' src={testemonial2} dataIndex="2"/>
            <img className='gallery-item gallery-item3' src={testemonial3} dataIndex="3"/>
            <img className='gallery-item gallery-item4' src={testemonial4} dataIndex="4"/>
            <img className='gallery-item gallery-item5' src={testemonial4} dataIndex="5"/>
        </div>
        <div className='gallery-controls'></div>
    </div>
  );
};

export default Slider;
