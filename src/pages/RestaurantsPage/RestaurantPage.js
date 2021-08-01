import React from "react";
import RestaurantDetailCard from "../../components/RestaurantProductsCard/RestaurantDetailCard";
import RestaurantProductsCard from "../../components/RestaurantProductsCard/RestaurantProductsCard";
import {
  Header,
  ArrowLeft,
  Title,
} from "../../components/ProfileCard/styledProfile";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";

import {
  GlobalRestaurantPageContainer,
  MenuContainer,
  RestaurantPageContainer,
  PLine,
} from "./styled";
import { goToFeed } from "../../routes/Cordinator";

const RestaurantPage = () => {
  const history = useHistory();

  return (
    <GlobalRestaurantPageContainer>
      <Header>
        <ArrowLeft>
          <Button>
            <ChevronLeft onClick={() => goToFeed(history)} />
          </Button>
        </ArrowLeft>
        <Title>
          <h3>Restaurante</h3>
        </Title>
      </Header>
      <RestaurantPageContainer>
        <RestaurantDetailCard />
        <PLine>Principais</PLine>
        <MenuContainer>
          <RestaurantProductsCard />
          <RestaurantProductsCard />
        </MenuContainer>
        <PLine>Acompanhamentos</PLine>
        <MenuContainer>
          <RestaurantProductsCard />
          <RestaurantProductsCard />
        </MenuContainer>
      </RestaurantPageContainer>
    </GlobalRestaurantPageContainer>
  );
};

export default RestaurantPage;
