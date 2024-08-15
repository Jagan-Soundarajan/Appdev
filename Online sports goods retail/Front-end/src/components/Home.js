import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Footer from './Footer';
import SlideShow from './Carousel';

const Home = () => {
  const sportsItems = [
    { id: 1, name: 'Football', image: 'https://tse3.mm.bing.net/th?id=OIP.tKMv5IHMsqR0m2pOt-30gwHaEK&pid=Api&P=0&h=180', description: 'A round ball used in soccer.', link: '/football' },
    { id: 2, name: 'Basketball', image: 'https://tse1.mm.bing.net/th?id=OIP.hH-n4S2fP35siO4x_pq3LQHaEK&pid=Api&P=0&h=180', description: 'An orange ball used in basketball.', link: '/basketball' },
    { id: 3, name: 'Tennis Racket', image: 'https://tse3.mm.bing.net/th?id=OIP.7CwLurQ1vn-lEpm0o3-GQAHaFj&pid=Api&P=0&h=180', description: 'A racket used to hit tennis balls.', link: '/tennis' },
    { id: 4, name: 'Baseball Bat', image: 'https://tse3.mm.bing.net/th?id=OIP.VFIcRs_zEIUuL2fgMQ_tPQHaEK&pid=Api&P=0&h=180', description: 'A wooden or metal bat used in baseball.', link: '/baseball' },
    { id: 5, name: 'Hockey Stick', image: 'https://tse1.mm.bing.net/th?id=OIP.7jm85PrNy8G2L6SXiaZA4QHaE2&pid=Api&P=0&h=180', description: 'A stick used to hit a puck in hockey.', link: '/hockey' }
  ];

  return (
    <div>

<SlideShow/>
    <Container style={{width:"100%"}}>
      <Typography variant="h2" gutterBottom>Sports Items</Typography>
      <Grid container spacing={4}>
        {sportsItems.map(item => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={item.name}
                height="140"
                image={item.image}
                title={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                {item.link ? (
                  <Link to={item.link}>View Details</Link>
                ) : (
                  <Typography variant="body2" color="text.secondary">View Details</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* <Footer/> */}
    </Container>
                </div>
  );
};

export default Home;
