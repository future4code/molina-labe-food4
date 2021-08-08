import React from "react";
import RestaurantMainMenuCard from "../../components/RestaurantProductsCard/RestaurantMainMenuCard";
import { Header, Title } from "../../components/ProfileCard/styledProfile";

import {
  GlobalCartPageContainer,
  MenuContainer,
  CartPageContainer,
  AddressDeliveryContainer,
  PLine,
  RestaurantDataContainer,
  SubTotalContainer,
  DeliveryPriceContainer,
  PaymentMethodContainer,
  PaymentContainer,
  PLine2,
  ConfirmButton,
} from "./styled";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sectionBar: {
    display: "flex",
    width: 320,
    marginBottom: 10,
  },
  sectionIcons: {
    display: "flex",
    justifyContent: "space-between",
    width: 300,
  },
}));

const CartPage = () => {
  const classes = useStyles();

  return (
    <GlobalCartPageContainer>
      <CartPageContainer>
        <Header>
          <Title>
            <h3>Meu carrinho</h3>
          </Title>
        </Header>
        <AddressDeliveryContainer>
          <PLine>Endereço de entrega</PLine>
          <PLine>Endereço</PLine>
        </AddressDeliveryContainer>
        <RestaurantDataContainer>
          <PLine>Nome do Restaurante</PLine>
          <PLine>Endereço do restaurante</PLine>
          <PLine>Tempo de entrega</PLine>
        </RestaurantDataContainer>
        <MenuContainer>
          <RestaurantMainMenuCard />
          <RestaurantMainMenuCard />
        </MenuContainer>
        <DeliveryPriceContainer>
          <PLine>Preço do Frete</PLine>
        </DeliveryPriceContainer>
        <SubTotalContainer>
          <PLine2>SUBTOTAL</PLine2>
          <PLine2>Preço Total</PLine2>
        </SubTotalContainer>
        <PaymentMethodContainer>
          <PLine2>Forma de pagamento</PLine2>
        </PaymentMethodContainer>
        <PaymentContainer>
          <PLine2>Dinheiro</PLine2>
          <PLine2>Cartão de crédito</PLine2>
          <ConfirmButton>Confirmar</ConfirmButton>
        </PaymentContainer>
        <div className={classes.sectionBar}>
          <AppBar position="static" color="black">
            <Toolbar>
              <div className={classes.sectionIcons}>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <HomeIcon />
                </IconButton>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <PersonIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </CartPageContainer>
    </GlobalCartPageContainer>
  );
};

export default CartPage;
