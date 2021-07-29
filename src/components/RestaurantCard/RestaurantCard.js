import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { TimeDeliveryContainer } from "./styled";

const styles = {
  card: {
    minWidth: 320,
    maxWidth: 450,
    minHeight: 180,
  },
  media: {
    height: 130,
  },
};

const RestaurantCard = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.restaurant.logoUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            {props.restaurant.name}
          </Typography>
          <TimeDeliveryContainer>
            <Typography component="p">
              {props.restaurant.deliveryTime}
            </Typography>
            <Typography component="p">{props.restaurant.shipping}</Typography>
          </TimeDeliveryContainer>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

RestaurantCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RestaurantCard);
