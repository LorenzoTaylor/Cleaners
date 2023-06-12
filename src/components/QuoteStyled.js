import styled from 'styled-components';

export const LineLabel = styled.label`
    display: block;
    font-family: 'Roboto', sans-serif;
    text-align: center;

`;

export const LineInput = styled.input`
    padding:10px;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    margin: 10px auto 10px auto;
    display: block;
    width: 80%;
    font-size: 15px;
`;

export const QuoteImg =  styled.img`
    position: absolute;
    height: 70px;
    margin-top: -68px;
    left: 58%;
    z-index: 1;
`;

export const LineText = styled.textarea`
    padding:10px;
    border: none;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    margin: 10px auto 10px auto;
    display: block;
    width: 80%;
    height: 125px;
    font-size: 15px;
    resize: none;
`;