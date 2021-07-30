import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantPage from "../pages/RestaurantsPage/RestaurantPage";
import ProfilePageUser from "../pages/ProfilePage/ProfilePageUser";
import ProfilePageAddress from "../pages/ProfilePage/ProfilePageAddress";
import CartPage from "../pages/CartPage.js/CartPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import SignUpAddressPage from "../pages/SignUpAddressPage/SignUpAddressPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/cadastro"}>
          <SignUpPage />
        </Route>

        <Route exact path={"/cadastro-endereco"}>
          <SignUpAddressPage />
        </Route>

        <Route exact path={"/feed"}>
          <FeedPage />
        </Route>

        <Route exact path={"/restaurantes"}>
          <RestaurantPage />
        </Route>

        <Route exact path={"/perfil"}>
          <ProfilePage />
        </Route>

        <Route exact path={"/editar-usuario"}>
          <ProfilePageUser />
        </Route>

        <Route exact path={"/editar-endereco"}>
          <ProfilePageAddress />
        </Route>

        <Route exact path={"/carrinho"}>
          <CartPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
