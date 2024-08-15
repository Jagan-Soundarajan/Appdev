import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container, Button } from '@mui/material';

const baseballItems = [
  { id: 1, name: 'Baseball', image: 'https://tse4.mm.bing.net/th?id=OIP.khBlCZVNMBxEcd3w5f3BNgHaEo&pid=Api&P=0&h=180', description: 'A small, hard ball used in baseball.', price: '$10', rating: '4.6/5' },
  { id: 2, name: 'Baseball Bat', image: 'https://tse4.mm.bing.net/th?id=OIP.s1y060SAtO5kPMghKcqFkwAAAA&pid=Api&P=0&h=180', description: 'A wooden or metal bat used in baseball.', price: '$50', rating: '4.8/5' },
  { id: 3, name: 'Baseball Glove', image: 'https://tse4.mm.bing.net/th?id=OIP.kyuwa_P4ZNR5uE83AdW5wQHaF7&pid=Api&P=0&h=180', description: 'A glove used by baseball players.', price: '$35', rating: '4.5/5' },
  // Add more baseball-related items here
];

const Baseball = ({ addToCart }) => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Baseball Items</Typography>
      <Grid container spacing={4}>
        {baseballItems.map(item => (
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

export default Baseball;
