import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container, Button } from '@mui/material';

const footballItems = [
  { id: 1, name: 'Football', image: 'https://tse1.mm.bing.net/th?id=OIP.ONUF2gIsOHqmILSozWH12AHaE8&pid=Api&P=0&h=180', description: 'A round ball used in soccer.', price: '$25', rating: '4.5/5' },
  { id: 2, name: 'Football Boots', image: 'https://tse2.mm.bing.net/th?id=OIP.pJDfuDYligaEEPWOy4AbWAHaE8&pid=Api&P=0&h=180', description: 'Boots used to play soccer.', price: '$75', rating: '4.7/5' },
  { id: 3, name: 'Goalkeeper Gloves', image: 'https://tse2.mm.bing.net/th?id=OIP.PXY9cEyCLIhpxnbK3lEH7gHaDt&pid=Api&P=0&h=180', description: 'Gloves for goalkeepers.', price: '$30', rating: '4.3/5' },
];

const Football = ({ addToCart }) => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Football Items</Typography>
      <Grid container spacing={4}>
        {footballItems.map(item => (
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

export default Football;
