import React from "react";
import {
  RestaurantDetailContainer,
  RestaurantCard,
  ImageRestaurantCard,
  TextRestaurantCard,
  AddButton,
} from "./styled";

const RestaurantSideDishCard = (props) => {
  return (
    <RestaurantDetailContainer>
      <RestaurantCard>
        <ImageRestaurantCard
          src={
            "https://lh3.googleusercontent.com/proxy/ynRX-iPawQjNSBcBBvBvElOz5t42J6EG2NA8daolVT5PqwoewFPwwJ9TFY2YCNmlSxFmGrIpztSWEtL71UuoK3amTix8pOVYW9Es9Phxhc9170QmI0Xlpi2hEsc9rtqupi4oyvY"
          }
        />
        <TextRestaurantCard>
          <h4>NOME</h4>
          <span>Descrição</span>
          <span>Preço</span>
        </TextRestaurantCard>
        <AddButton>
          <button>Adicionar</button>
        </AddButton>
      </RestaurantCard>
    </RestaurantDetailContainer>
  );
};

export default RestaurantSideDishCard;
