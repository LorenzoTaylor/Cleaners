import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  FooterLogo,
} from './FooterStyled';
import { Link } from 'react-scroll';
import { LineLabel, LineInput, LineText} from './QuoteStyled.js';

const Footer = () => {
  const linkStyles = {
    color: "#fff",
    marginBottom: "10px",
    fontSize: "16px",
    textDecoration: "none",
    fontFamily: "'Roboto', sans-serif",
    ":hover": {
      color: "#39d7ff",
      transition: "200ms ease-in",
    },
  };

  return (
    <Box>
      <Container>
        
        <Row>
        <div id="contact" style={{ display: "flex", justifyContent: "center", color: 'white', fontFamily: "'Roboto', sans-serif",}}>
          <div style={{ width: "400px", textAlign: "center" }}>
            <h1>Contact Us</h1>
            <form>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <LineLabel htmlFor="name">First Name:</LineLabel>
                        <LineInput type="text" id="firstname" name="firstname" />
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <LineLabel htmlFor="name">Last Name:</LineLabel>
                        <LineInput type="text" id="lastname" name="lastname" />
                    </div>
                </div>
              <LineLabel htmlFor="email">Email:</LineLabel>
              <LineInput type="email" id="email" name="email" />
              <LineLabel htmlFor="message">Message:</LineLabel>
              <LineText id="message" name="message"></LineText>
              <button type="submit"
              style={{
                backgroundColor: '#39d7ff',
                borderRadius: '5px',
                padding: '10px',
                color: 'white',
                border: 'none',
                marginTop: '10px',
                width: '40%',
                fontSize: "15px",
                }}>Send Message</button>
            </form>
          </div>
        </div>
          <Column>
            <Heading>Quick Links</Heading>
            <Link style={linkStyles}
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              About
            </Link>
            <Link style={linkStyles}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Contact Us
            </Link>
            <Link style={linkStyles}
              to='testimonials'
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Testimonials
            </Link>
            <Link style={linkStyles} to="#">
              Get A Quote
            </Link>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f" />
              <span>Facebook</span>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram" />
              <span>Instagram</span>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter" />
              <span>Twitter</span>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube" />
              <span>Youtube</span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15153.008458476244!2d-77.54360675000001!3d18.290075150000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edbb6120a0e657d%3A0xb25292d3a69a8c96!2sAlbert%20Town%2C%20Jamaica!5e0!3m2!1sen!2sus!4v1685355953744!5m2!1sen!2sus"
        className="frame"
        width="100%"
        height="300"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="footerMap"
      ></iframe>
    </Box>
  );
};

export default Footer;
