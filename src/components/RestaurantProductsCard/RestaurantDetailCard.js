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
    margin: 10,
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
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            {props.name}
          </Typography>
          <Typography component="p">{props.category}</Typography>
          <TimeDeliveryContainer>
            <Typography component="p">{props.deliveryTime} min</Typography>
            <Typography component="p">Frete: R${props.shipping},00</Typography>
          </TimeDeliveryContainer>
          <Typography component="p">{props.address}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

RestaurantCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RestaurantCard);
