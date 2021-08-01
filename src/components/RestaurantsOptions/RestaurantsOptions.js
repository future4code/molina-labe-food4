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

function RestaurantsOptions() {
  return (
    <OptionsContainer>
      <button>Árabe</button>
      <button>Asiática</button>
      <button>Hamburguer</button>
      <button>Italiana</button>
      <button>Sorvetes</button>
      <button>Carnes</button>
      <button>Baiana</button>
      <button>Petiscos</button>
      <button>Mexicana</button>
    </OptionsContainer>
  );
}

export default RestaurantsOptions;
