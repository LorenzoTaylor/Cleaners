import styled from 'styled-components';
import backgroundImage from '../Images/pexels-peng-liu-169677.jpg';

export const TBackground = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${backgroundImage});
    overflow-x: hidden;
    height: 600px;
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
    height: 400px;
    width: 70%;
    background-color: #012E6A;
    align-self: center;
    overflow-x: visible;
    z-index: 1;
`;