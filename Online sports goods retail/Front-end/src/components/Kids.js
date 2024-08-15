// src/components/Kids.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Kids = () => {
  const products = [
    { title: 'Kids T-Shirt', image: 'https://via.placeholder.com/150', price: '₹299' },
    { title: 'Kids Shorts', image: 'https://via.placeholder.com/150', price: '₹399' },
    { title: 'Kids Jacket', image: 'https://via.placeholder.com/150', price: '₹799' },
    { title: 'Kids Shoes', image: 'https://via.placeholder.com/150', price: '₹1199' },
    { title: 'Kids Track Pants', image: 'https://via.placeholder.com/150', price: '₹599' },
    { title: 'Kids Hoodie', image: 'https://via.placeholder.com/150', price: '₹999' },
  ];

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#A0522D' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" component={Link} to="/">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Kids' Clothing
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '16px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Kids' Clothing
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.title}>
              <Card>
                <CardMedia
                  style={{ height: 140 }}
                  image={product.image}
                  title={product.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.price}
                  </Typography>
                  <Button variant="contained" color="primary" style={{ marginTop: '8px' }}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Kids;