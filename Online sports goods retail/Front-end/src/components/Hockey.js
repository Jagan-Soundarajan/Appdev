import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container, Button } from '@mui/material';

const hockeyItems = [
  { id: 1, name: 'Hockey Stick', image: 'https://tse2.mm.bing.net/th?id=OIP.zQdnGhWfchugQXTFEbJSPwHaE7&pid=Api&P=0&h=180', description: 'A stick used to hit a puck in hockey.', price: '$60', rating: '4.8/5' },
  { id: 2, name: 'Hockey Puck', image: 'https://tse3.mm.bing.net/th?id=OIP.c-exyY-QcpYENZ3pdG0eaAHaFt&pid=Api&P=0&h=180', description: 'A small, hard rubber disc used in hockey.', price: '$10', rating: '4.6/5' },
  { id: 3, name: 'Hockey Skates', image: 'https://media.istockphoto.com/id/108347781/photo/hockey-skates-on-ice.jpg?b=1&s=170667a&w=0&k=20&c=5PcCnxDdoxvUW1L3QA_OIpamsk8_TOslMUFqvhwtf88=', description: 'Skates worn by hockey players.', price: '$120', rating: '4.7/5' },
];

const Hockey = ({ addToCart }) => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Hockey Items</Typography>
      <Grid container spacing={4}>
        {hockeyItems.map(item => (
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
                <Typography variant="h6" className="mt-2">{item.price}</Typography>
                <Typography variant="body2" className="mb-2">{item.rating}</Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => addToCart(item)}
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

export default Hockey;
