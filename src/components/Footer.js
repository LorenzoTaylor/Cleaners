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
    color: "darkgrey",
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
            <Link style={linkStyles}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Facebook
            </Link>
            </FooterLink>
            <FooterLink href="#">
            <Link style={linkStyles}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Instagram
            </Link>
            </FooterLink>
            <FooterLink href="#">
            <Link style={linkStyles}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Twitter
            </Link>
            </FooterLink>
            <FooterLink href="#">
            <Link style={linkStyles}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Youtube
            </Link>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Support</Heading>
            <FooterLink href="#">
            <Link style={linkStyles}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              FAQ
            </Link>
            </FooterLink>
            <FooterLink href="#">
            <Link style={linkStyles}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Features
            </Link>
            </FooterLink>
            <FooterLink href="#">
            <Link style={linkStyles}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Email
            </Link>
            </FooterLink>
            <FooterLink href="#">
            <Link style={linkStyles}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Shipping
            </Link>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">
            <Link style={linkStyles}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              (111) 111-1111
            </Link>
            </FooterLink>
            <FooterLink href="#">
            <Link style={linkStyles}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Features
            </Link>
            </FooterLink>
            <FooterLink href="#">
            <Link style={linkStyles}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Testemonials
            </Link>
            </FooterLink>
            <FooterLink href="#">
            <Link style={linkStyles}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Contact
            </Link>
            </FooterLink>
          </Column>
        </Row>
        <Row>
        <div>
          <p>Copyright Lorenzo's Cleaners co. 2023 All Rights Reserved</p>
        </div>
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
