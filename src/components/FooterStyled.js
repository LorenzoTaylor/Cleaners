// FooterStyled.js
import styled from 'styled-components';

export const Box = styled.div`
  background: #012E6A;
  width: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  padding: 10px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const FooterLink = styled.a`
  color: #fff;
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
`;

export const FooterLogo = styled.img`
  border-radius: 50%;
  height: 20px;
`;