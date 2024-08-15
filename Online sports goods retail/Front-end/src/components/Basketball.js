import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container, Button } from '@mui/material';

const basketballItems = [
  { id: 1, name: 'Basketball', image: 'https://tse1.mm.bing.net/th?id=OIP.18nJmr1DCT8-1CDxNxLxMAHaGp&pid=Api&rs=1&c=1&qlt=95&w=125&h=112', description: 'An orange ball used in basketball.', price: '$20', rating: '4.6/5' },
  { id: 2, name: 'Basketball Shoes', image: 'https://tse1.mm.bing.net/th?id=OIP.m7fjsAWN5Kxl1vzJJ4T0cAHaE2&pid=Api&P=0&h=180', description: 'Shoes used to play basketball.', price: '$90', rating: '4.8/5' },
  { id: 3, name: 'Basketball Hoop', image: 'https://sp.yimg.com/ib/th?id=OIP.qzvv8XSLJ6GTK_oE6iWSOAHaE8&pid=Api&w=148&h=148&c=7&dpr=2&rs=1', description: 'A hoop used in basketball games.', price: '$150', rating: '4.7/5' },
  // Add more basketball-related items here
];

const Basketball = ({ addToCart }) => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Basketball Items</Typography>
      <Grid container spacing={4}>
        {basketballItems.map(item => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card className="transition transform hover:scale-105">
              <CardMedia
                component="img"
                alt={item.name}
                height="140"
                image={item.image}
                title={item.name}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="h6">{item.price}</Typography>
                <Typography variant="body2">{item.rating}</Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => addToCart(item)}
                  style={{ marginTop: '10px' }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Basketball;
