import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container, Button } from '@mui/material';

const tennisItems = [
  { id: 1, name: 'Tennis Racket', image: 'https://tse4.mm.bing.net/th?id=OIP.IC24CZvrp7ZUalMfuigmZAHaFV&pid=Api&P=0&h=180', description: 'A racket used to hit tennis balls.', price: '$120', rating: '4.7/5' },
  { id: 2, name: 'Tennis Balls', image: 'https://tse3.mm.bing.net/th?id=OIP.S1OG8gO3WoxeJbH4mYTiOAHaEK&pid=Api&P=0&h=180', description: 'Balls used in tennis matches.', price: '$15', rating: '4.5/5' },
  { id: 3, name: 'Tennis Shoes', image: 'https://tse4.mm.bing.net/th?id=OIP.uhzo99gg5lhB-pRS891gdAHaHa&pid=Api&P=0&h=180', description: 'Shoes worn while playing tennis.', price: '$85', rating: '4.6/5' },
  // Add more tennis-related items here
];

const Tennis = ({ addToCart }) => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Tennis Items</Typography>
      <Grid container spacing={4}>
        {tennisItems.map(item => (
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
    </Container>  );
};

export default Tennis;
