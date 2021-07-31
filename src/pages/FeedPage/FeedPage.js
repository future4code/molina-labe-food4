import React, { useContext, useEffect, useState } from "react";
import { GlobalFeedPageContainer, FeedPageContainer } from "./styled";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";

import { makeStyles } from "@material-ui/core/styles";
import GlobalStateContext from "../../Global/GlobalStateContext";
import FeedFilter from "../../components/FeedFilter/FeedFilter";
import RestaurantsOptions from "../../components/RestaurantsOptions/RestaurantsOptions";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
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

const FeedPage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const [search, setSearch] = useState("");
  // const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);
  // const [section, setSection] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    // requests.getRestaurants();
    filterRestaurants();
    // changeSection();
  }, [search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // const changeSection = () => {
  //   if (filteredRestaurantsList === []) {
  //     setFilteredRestaurantsList(states.restaurants);
  //   } else {
  //     return filteredRestaurantsList;
  //   }
  // };

  // const renderFeedPage = () => {
  //   switch (filteredRestaurantsList) {
  //     case []:
  //       return states.restaurants.map((restaurant) => {
  //         return <RestaurantCard restaurant={restaurant} />;
  //       });
  //     case [search]:
  //       return filteredRestaurantsList.map((restaurant) => {
  //         return <RestaurantCard restaurant={restaurant} />;
  //       });
  //   }
  // };

  // const filterRestaurants = () => {
  //   const newRestaurantsList = states.restaurants.filter((restaurant) => {
  //     const restaurantName = restaurant.name.toLowerCase();
  //     const searchText = search.toLocaleLowerCase();
  //     return search ? restaurantName.startsWith(searchText) : true;
  //   });

  //   setters.setFilteredRestaurants(newRestaurantsList);
  // };

  // const getFilteredRestaurants = () => {
  //   return states.filteredRestaurants
  //     .filter((restaurant) =>
  //       search ? restaurant.name.startsWith(search) : true
  //     )
  //     .map((restaurant) => {
  //       return restaurantName.startsWith(searchText);
  //     });
  // };

  // const NewRestaurantsList = getFilteredRestaurants();
  const filterRestaurants = () => {
    const newRestaurantsList = states.restaurants.filter((restaurant) => {
      const restaurantName = restaurant.name.toLowerCase();
      const searchText = search.toLocaleLowerCase();
      return restaurantName.startsWith(searchText);
    });
    setters.setFilteredRestaurants(newRestaurantsList);
  };

  const restaurantsComponents = states.filteredRestaurants.map((restaurant) => {
    return <RestaurantCard restaurant={restaurant} />;
  });

  return (
    <GlobalFeedPageContainer>
      <FeedPageContainer>
        <FeedFilter handleSearch={handleSearch} search={search} />
        <RestaurantsOptions />
        {restaurantsComponents}
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
      </FeedPageContainer>
    </GlobalFeedPageContainer>
  );
};

export default FeedPage;
