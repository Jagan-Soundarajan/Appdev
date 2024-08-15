import React, { useState } from 'react';

function Payment({ amount }) {
  const [enteredAmount, setEnteredAmount] = useState(amount || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredAmount === '') {
      alert('Please enter an amount');
    } else {
      if (window.Razorpay) {
        var options = {
          key: 'rzp_test_AWrlyaXOO9ncih',
          key_secret: 'iExGzM7nCvTIo41Rk4iV9kye',
          amount: enteredAmount * 100,
          currency: 'INR',
          name: 'online sports goods retail',
          description: 'for testing purpose',
          handler: function (response) {
            alert('Payment Successful. Payment ID: ' + response.razorpay_payment_id);
          },
          prefill: {
            name: 'Jagan',
            email: 'jagan20dgl@gmail.com',
            contact: '6381835664',
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
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter Amount"
        value={enteredAmount}
        onChange={(e) => setEnteredAmount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Payment;