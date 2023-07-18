// FooterStyled.js
import styled from 'styled-components';

export const Box = styled.div`
  background: #F6F6F6;
  width: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  padding: 50px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  min-width: 100%;
  

  @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const FooterLink = styled.a`
  margin-bottom: 10px;
  font-size: 16px;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;

  &:hover {
    color: #39d7ff;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.h4`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 15px;
  color: #38B6FF;
`;

export const FooterLogo = styled.img`
  border-radius: 50%;
  height: 20px;
`;