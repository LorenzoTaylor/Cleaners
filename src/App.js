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

      </body>
      <footer>
        <Footer>
          
        </Footer>
      </footer>
    </div>
  );
}

export default App;
