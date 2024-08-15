import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'; // Example icon

const Navbar = ({ cart, totalAmount }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Add your icon here */}
        <SportsSoccerIcon style={{ marginRight: '10px' }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Sports Store
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/register">Register</Button>
        <Button color="inherit" component={Link} to="/blog">Blog</Button>
        <Button color="inherit" component={Link} to="/my-store">My store</Button>
        {/* <Button color="inherit" component={Link} to="/contact us">contact us</Button> */}
        {/* <Button color="inherit" component={Link} to="/prof">Profile</Button> */}
        <Button color="inherit" component={Link} to="/cart" startIcon={<ShoppingCartIcon />}>
          Cart ({cart.length}) - ${totalAmount.toFixed(2)}
        </Button>
        <Button color="inherit" component={Link} to="/login">Log out</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
