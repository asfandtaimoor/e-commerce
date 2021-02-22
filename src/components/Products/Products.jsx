import React from 'react';
import { Grid } from '@material-ui/core';

// Component
import Product from '../Product/Product';

const products = [
  {
    id: 1,
    name: 'shoes',
    discription: 'running shoes',
    price: '$5',
    image:
      'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 2,
    name: 'Macbook',
    discription: 'Apple macbook',
    price: '$10',
    image:
      'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
