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
          image={
            "https://lh3.googleusercontent.com/proxy/ynRX-iPawQjNSBcBBvBvElOz5t42J6EG2NA8daolVT5PqwoewFPwwJ9TFY2YCNmlSxFmGrIpztSWEtL71UuoK3amTix8pOVYW9Es9Phxhc9170QmI0Xlpi2hEsc9rtqupi4oyvY"
          }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            Name
          </Typography>
          <Typography component="p">Categoria</Typography>
          <TimeDeliveryContainer>
            <Typography component="p">Frete</Typography>
            <Typography component="p">Time</Typography>
          </TimeDeliveryContainer>
          <Typography component="p">Endereço</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

RestaurantCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RestaurantCard);
