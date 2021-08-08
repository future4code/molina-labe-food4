import React from "react";
import {
  RestaurantDetailContainer,
  RestaurantCard,
  ImageRestaurantCard,
  TextRestaurantCard,
  AddButton,
} from "./styled";

const RestaurantMainMenuCard = (props) => {
  return (
    <RestaurantDetailContainer>
      <RestaurantCard>
        <ImageRestaurantCard src={props.image} />
        <TextRestaurantCard>
          <h4>{props.name}</h4>
          <span>{props.description}</span>
          <span>{props.price}</span>
        </TextRestaurantCard>
        <AddButton>
          <button>Adicionar</button>
        </AddButton>
      </RestaurantCard>
    </RestaurantDetailContainer>
  );
};

export default RestaurantMainMenuCard;
