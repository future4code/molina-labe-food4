import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantDetail, setRestaurantDetail] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/fourFoodB/restaurants`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.message));
  };

  const getRestaurantDetail = (id) => {
    axios
      .get(`${BASE_URL}/fourFoodB/restaurants/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.message));
  };

  const getFullAddress = () => {
    axios
      .get(`${BASE_URL}/fourFoodB/profile/address`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.message));
  };

  const getProfile = () => {
    axios
      .get(`${BASE_URL}/fourFoodB/profile`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
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

  const states = { restaurants, restaurantDetail };
  const setters = { setRestaurants, setRestaurantDetail };
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
