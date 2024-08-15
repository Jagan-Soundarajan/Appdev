import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://tse4.mm.bing.net/th?id=OIP.l7s62OTgrroY2v_-nBmNZwHaEK&pid=Api&P=0&h=180.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            KIDS
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Kids in a sports shop can explore a wide range of equipment, apparel, and accessories tailored to various sports and activities. These items are designed to be safe, durable, and size-appropriate, ensuring children can participate comfortably and confidently. Encouraging kids to engage with sports products fosters physical activity, skill development, and a love for sports.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}