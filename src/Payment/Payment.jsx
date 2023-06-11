import React, { useState } from 'react';
import Stripe from 'react-stripe-checkout';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import CurrencyConverter from './CurrencyConverter';

function Payment({ totalAmount }) {
  const [usdToLkrRateParent] = useState(296);

  async function handleToken(token) {
    console.log(token);
    try {
      await axios.post('http://localhost:8080/api/payment/charge', '', {
        headers: {
          token: token.id,
          amount: totalAmount / usdToLkrRateParent, // Use the usdToLkrRateParent state value
        },
      });
      alert('Payment Success');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="Payment">
     
      <Stripe
        stripeKey="pk_test_51Mm7aEHKILrkPIJDn8VWqFuyWSYXUL3k8JrkQIYyIsBpsxzJ9xgwi0T7bQZYgqugdJC0dKWkbYYbFpzHmGDQxiTD003c7mSDY2"
        token={handleToken}
      />
    </div>
  );
}

export default Payment;
