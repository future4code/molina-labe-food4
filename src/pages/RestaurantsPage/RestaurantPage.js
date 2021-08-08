import React, { useContext, useEffect } from "react";
import RestaurantDetailCard from "../../components/RestaurantProductsCard/RestaurantDetailCard";
import RestaurantMainMenuCard from "../../components/RestaurantProductsCard/RestaurantMainMenuCard";
import {
  Header,
  ArrowLeft,
  Title,
} from "../../components/ProfileCard/styledProfile";
import { useHistory, useParams } from "react-router-dom";

import { Button } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";

import {
  GlobalRestaurantPageContainer,
  MenuContainer,
  RestaurantPageContainer,
  PLine,
} from "./styled";
import { goToFeed } from "../../routes/Cordinator";
import GlobalStateContext from "../../Global/GlobalStateContext";
import RestaurantSideDishCard from "../../components/RestaurantProductsCard/RestaurantSideDishCard";

const RestaurantPage = () => {
  const history = useHistory();
  const params = useParams();
  const { states, requests } = useContext(GlobalStateContext);

  useEffect(() => {
    requests.getRestaurantDetail(params.id);
  }, []);

  console.log("AQUIIIII", states.restaurantDetail);

  const newMainMenuList = states.restaurantDetail.products.filter((product) => {
    return product.category === "Lanche";
  });

  const showRestaurantSideDish = () => {
    states.restaurantDetail.map((product) => {
      return (
        <RestaurantSideDishCard
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.photoUrl}
        />
      );
    });
  };

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
        <RestaurantDetailCard
          image={states.restaurantDetail.logoUrl}
          name={states.restaurantDetail.name}
          category={states.restaurantDetail.category}
          deliveryTime={states.restaurantDetail.deliveryTime}
          address={states.restaurantDetail.address}
          shipping={states.restaurantDetail.shipping}
        />
        <PLine>Principais</PLine>
        <MenuContainer></MenuContainer>
        <PLine>Acompanhamentos</PLine>
        <MenuContainer>
          <RestaurantSideDishCard />
          <RestaurantSideDishCard />
        </MenuContainer>
      </RestaurantPageContainer>
    </GlobalRestaurantPageContainer>
  );
};

export default RestaurantPage;
