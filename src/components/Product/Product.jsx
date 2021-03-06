import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// Style
import useStyles from './styles';

function Product({ product }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
          <Typography variant="h6" color="textSecondary">
            {product.discription}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;
