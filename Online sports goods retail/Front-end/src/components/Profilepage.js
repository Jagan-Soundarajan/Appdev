import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Divider, Box } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { styled } from '@mui/system';

const CartContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const Cart = () => {
  return (
    <CartContainer maxWidth="lg">
      <Box display="flex" alignItems="center" mb={4}>
        <ShoppingCart fontSize="large" />
        <Typography variant="h4" component="h1" ml={2}>
          Your Cart
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {/* Example cart items */}
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} key={item}>
            <Card>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <CardMedia
                    component="img"
                    image="https://tse4.mm.bing.net/th?id=OIP.yeW_vSQMGF6cXt-RFpjSNQHaF0&pid=Api&P=0&h=180"
                    alt="Product Image"
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <CardContent>
                    <Typography variant="h6">Shoe {item}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Flexible shoes with superior comfort.
                    </Typography>
                    <Box display="flex" justifyContent="space-between" mt={2}>
                      <Typography variant="h6">₹4599</Typography>
                      <Button variant="contained" color="secondary">Remove</Button>
                    </Box>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Divider style={{ margin: '24px 0' }} />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">Total: ₹8999</Typography>
        <Button variant="contained" color="primary" size="large">Proceed to Checkout</Button>
      </Box>
    </CartContainer>
  );
};

export default Cart;