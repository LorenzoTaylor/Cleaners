import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ImgSlide from './components/headslider/Headerimgs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Phone from './components/Phone';
import Footer from './components/Footer';
import Blue from './components/Blue Left/Blue';
import Testemonials from './components/Testemonials/Testemonials';
import Intro from './components/Intro/Intro';
import * as THREE from 'three';

function SprayBottleMesh(){

  // this first attribute is a field of view, the extent of which the scene that is on
  // display at any given moment (the value is in degrees)
  const scene = new THREE.Scene(); 

  // the camera attribute is the aspect ratio, almost always use the width of the element divided by
  // the height or else the elements would look squished
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

  // create the renderer instance, then set the size in which you'd want to render your app
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact />
          </Routes>
        </Router>

      </header>
      <body>
        <ImgSlide>
        </ImgSlide>
        <Intro/>
        <Testemonials>
        </Testemonials>
        <Phone>
        </Phone>

        <Blue></Blue>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
<stripe-pricing-table pricing-table-id="prctbl_1NIH6RAveicxWCwrJ89Db0TW"
publishable-key="pk_live_51NIGbAAveicxWCwr9ka4YpfK5Ot8mVYXyMv3x4x9NPiWLRweqFojbKynhQeBYLXA5X0fac0GtMS1XTvcnnI5D63k00tUu7wAhp">
</stripe-pricing-table>
      </body>
      <footer>
        <Footer>
          
        </Footer>
      </footer>
    </div>
  );
}

export default App;
