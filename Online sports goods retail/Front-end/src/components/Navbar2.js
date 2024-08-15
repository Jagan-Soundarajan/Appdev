import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://tse1.mm.bing.net/th?id=OIP.HY-Opv6qEYB5RtiQeojW0QHaEK&pid=Api&P=0&h=180.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            GYM EQUIMENTS
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Gym equipment includes machines, free weights, and accessories designed to facilitate various types of physical exercise. These items, such as treadmills, dumbbells, and resistance bands, help users improve strength, endurance, and overall fitness.
           Quality gym equipment can enhance workout efficiency, ensure safety, and support diverse training goals.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}