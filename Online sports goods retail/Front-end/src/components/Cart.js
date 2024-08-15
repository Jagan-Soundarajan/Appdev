import React, { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText, Typography, Container } from '@mui/material';
import Footer from './Footer';

const Cart = ({ cart = [], totalAmount = 0, removeFromCart }) => {
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    // Ensure the totalAmount is updated
    setIsCheckout(false);
  }, [totalAmount]);

  const handleCheckoutClick = () => {
    if (window.Razorpay) {
      var options = {
        key: 'rzp_test_AWrlyaXOO9ncih', // Your Razorpay key
        key_secret: 'iExGzM7nCvTIo41Rk4iV9kye', // Your Razorpay key secret
        amount: totalAmount * 100, // Amount in paise (totalAmount is in dollars)
        currency: 'INR',
        name: 'Rent My Ride',
        description: 'for testing purpose',
        handler: function (response) {
          alert('Payment Successful. Payment ID: ' + response.razorpay_payment_id);
          // You can also perform additional actions here, like updating the order status
        },
        prefill: {
          name: 'Arshad',
          email: 'arshadsyed2804@gmail.com',
          contact: '8778729928',
        },
        notes: {
          address: 'Razorpay Corporate office',
        },
        theme: {
          color: '#3399cc',
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    } else {
      alert('Razorpay SDK not loaded. Make sure to include the Razorpay script.');
    }
  };

  return (
    <div className='card1'>
      <Container>
        {!isCheckout ? (
          <>
            <Typography variant="h2" gutterBottom>Shopping Cart</Typography>
            {cart.length === 0 ? (
              <Typography variant="h6">Your cart is currently empty.</Typography>
            ) : (
              <div>
                <List>
                  {cart.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemText 
                        primary={item.name} 
                        secondary={`${item.price} - ${item.rating}`} 
                        sx={{ color: 'white' }} 
                      />
                      <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </Button>
                    </ListItem>
                  ))}
                </List>
                <Typography variant="h5">Total: ${totalAmount.toFixed(2)}</Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  className="mt-4" 
                  onClick={handleCheckoutClick}
                >
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </>
        ) : null}
      </Container>
      
    </div>
  );
};

export default Cart;
