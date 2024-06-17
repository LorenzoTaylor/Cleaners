import styled from 'styled-components';
import backgroundImage from '../Images/pexels-peng-liu-169677.jpg';

export const TBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F6F6F6;
    overflow-x: hidden;
    height: 400px;
    @media screen and (max-width: 1000px) {
        height: 700px;
    }

    @media screen and (max-width: 500px) {
        height: 1300px;
    }
`;

export const CenterP = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(-50%, -50%);
`;

export const DarkBlueBox = styled.div`
    position: relative;
    height: max-content;
    width: max-content;
    background-color: #012E6A;
    align-self: center;
    overflow-x: visible;
    z-index: 1;
`;

export const TestemonialImage = styled.img`
    align-self: center;
    height: 300px;
    width: 100%;
    max-width: 400px;
`;

export const ResponsiveDiv = styled.div`
    display: flex;
    padding: 10px;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const SecondResponsiveDiv = styled.div`
    display: flex;

  @media screen and (max-width: 500px) {
        flex-direction: column;
        justify-content: center;
    }
`;
