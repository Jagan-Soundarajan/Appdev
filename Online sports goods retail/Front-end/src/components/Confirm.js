import React, { useState } from 'react';
import { Container, Box, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Stack, Alert } from '@mui/material';

const ConfirmationPage = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      name,
      phoneNumber,
      paymentMethod,
    });
    setShowAlert(true);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Confirmation Page
        </Typography>
        {showAlert && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="filled" severity="success">
              The order has been confirmed.
            </Alert>
          </Stack>
        )}
        <Box sx={{ mt: 3 }}>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Phone Number"
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            margin="normal"
          />
          <FormControl component="fieldset" sx={{ mt: 3 }}>
            <FormLabel component="legend">Payment Method</FormLabel>
            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel value="upi" control={<Radio />} label="UPI" />
              <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery (COD)" />
              <FormControlLabel value="netBanking" control={<Radio />} label="Net Banking" />
            </RadioGroup>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            onClick={handleSubmit}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ConfirmationPage;
