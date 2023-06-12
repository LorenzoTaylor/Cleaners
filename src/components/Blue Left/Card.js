import React from "react";
import { 
    CardContainer, 
    CardImage, 
    CardList, 
    CardTitle, 
    GradientOverlay } from "./CardStyled";


const Card = (props) =>{
    const cardImg = props.image;
    const cardTitle = props.title;
    const items = props.items;

    const renderList = () => {
        if (!Array.isArray(items)) {
            return null; // or any other fallback behavior
          }
        // Slice the array to a maximum of 5 items
        const slicedItems = items.slice(0, 5);
    
        return slicedItems.map((item, index) => (
          <li style={{padding: "10px 10% 10px 10%", fontSize: "15px"}} key={index}>{item}</li>
        ));
    };

    return(
        <CardContainer>
            <div>
            <CardImage src={cardImg} alt='' />
            <GradientOverlay></GradientOverlay>
            </div>
            <CardTitle>{cardTitle}</CardTitle>
            <CardList>{renderList()}</CardList>
        </CardContainer>
    );
};

export default Card;