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
          image="https://lh3.googleusercontent.com/proxy/08QnP4s4c48a4MnQ-ddGL8HmSco6KRzn-5JBYlIuSxEIrg29XQKxJ_f1rPe-YUqgqteWGPaAggn31d4h5o0905zG8QXT9g96BhjOcfxzwb6IUpt54ZiKCRbOzfoeRr_ZZ9RsJmo"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            Nome do Restaurante
          </Typography>
          <TimeDeliveryContainer>
            <Typography component="p">50 - 60 min</Typography>
            <Typography component="p">Frete R$3,00</Typography>
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
