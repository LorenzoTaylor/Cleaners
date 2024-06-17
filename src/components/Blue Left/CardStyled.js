import styled from 'styled-components';

export const CardContainer = styled.div`
    border-radius: 10px;
    overflow: hidden;
    height: 500px;
    width: 100%;
    background-color: #012E6A;
    margin: 10px 10px 10px 10px;
    font-family: 'Roboto', sans-serif;
    color: white;
`;

export const GradientOverlay = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    padding: 10px;
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s;
`;

export const CardImage = styled.img`
    height: 200px;
    width: 120%;
    object-fit: cover;
    &:hover ${GradientOverlay}{
    opacity: 1;
  }
`;

export const CardTitle = styled.h1`
    text-align: center;
`;

export const CardList = styled.ul`

`;
