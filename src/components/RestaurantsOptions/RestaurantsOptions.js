import React from "react";
import styled from "styled-components";

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  overflow-x: auto;
  text-overflow: ellipsis;
  gap: 20px;
`;

const options = [
  "Árabe",
  "Asiática",
  "Hamburguer",
  "Italiana",
  "Sorvetes",
  "Carnes",
  "Baiana",
  "Petiscos",
  "Mexicana",
];

function RestaurantsOptions(props) {
  return (
    <OptionsContainer>
      {options.map((option) => {
        return (
          <button
            onClick={() =>
              props.setRestaurantOption(
                option == props.restaurantOption ? null : option
              )
            }
          >
            {option}
          </button>
        );
      })}
    </OptionsContainer>
  );
}

export default RestaurantsOptions;
