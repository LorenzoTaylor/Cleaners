import React from 'react';
import { Nav, Bars, NavMenu } from './NavbarElements';
import companyLogo from './Images/Black Cleaning Service Logo.png';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <Nav className='Navv'>
        <Bars />
        <img className="Logo" src={companyLogo} alt="Lorenzo's Cleaners Logo" />
        <NavMenu className='NavFont'>
          <Link to='about'
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            style={{
              color: "#38B6FF",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              padding: "0 1rem",
              height: "100%",
              cursor: "pointer",
              "&.active": {
                color: "black",
              },
              "&:hover": {
                color: "black",
                transition: "200ms ease-in",
              },
            }}
          >
            About
          </Link>
          <Link
            to='testimonials'
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            style={{
              color: "#38B6FF",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              padding: "0 1rem",
              height: "100%",
              cursor: "pointer",
              "&.active": {
                color: "#38B6FF",
              },
              "&:hover": {
                color: "black",
                transition: "200ms ease-in",
              },
            }}
          >
            Testimonials
          </Link>
          <Link to='contact'
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            style={{
              color: "#38B6FF",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              padding: "0 1rem",
              height: "100%",
              cursor: "pointer",
              "&.active": {
                color: "#38B6FF",
              },
              "&:hover": {
                color: "black",
                transition: "200ms ease-in",
              },
            }}
          >
            Contact Us
          </Link>
        </NavMenu>
        <div class="butcontainer">
          <a href="/" class="button">
            <div class="button__line"></div>
            <div class="button__line"></div>
            <span class="button__text">Get Quote</span>
            <div class="button__drow1"></div>
            <div class="button__drow2"></div>
          </a>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
