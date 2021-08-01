import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, headers } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantDetail, setRestaurantDetail] = useState([]);
  const [user, setUser] = useState({});
  const [address, setAddress] = useState({});

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/fourFoodB/restaurants`, {
        headers: headers,
      })
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((error) => console.log(error.message));
  };

  const getRestaurantDetail = (id) => {
    axios
      .get(`${BASE_URL}/fourFoodB/restaurants/${id}`, {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        setRestaurantDetail(response.restaurant.products);
      })
      .catch((error) => console.log(error.message));
  };

  const getFullAddress = () => {
    console.log("HEADERS", headers);
    axios
      .get(`${BASE_URL}/fourFoodB/profile/address`, {
        headers: headers,
      })
      .then((response) => {
        console.log("ADDRESSSS AQUIIII", response);
        setAddress(response.data.address);
      })
      .catch(
        (error) => console.log(error)
        // alert("Endereço não adicionado, por favor tente novamente"),
      );
  };

  const getProfile = () => {
    console.log("headers", headers);
    axios
      .get(`${BASE_URL}/fourFoodB/profile`, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data.user);
        setUser(response.data.user);
      })
      .catch((error) => console.log(error.message));
  };

  const getActiveOrder = () => {
    axios
      .get(`${BASE_URL}/fourFoodB/active-order`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.message));
  };

  const getOrdersHistory = () => {
    axios
      .get(`${BASE_URL}/fourFoodB/orders/history`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.message));
  };

  const states = {
    restaurants,
    restaurantDetail,
    user,
    address,
  };
  const setters = {
    setRestaurants,
    setRestaurantDetail,
    setUser,
    setAddress,
  };
  const requests = {
    getRestaurants,
    getRestaurantDetail,
    getFullAddress,
    getProfile,
    getActiveOrder,
    getOrdersHistory,
  };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
