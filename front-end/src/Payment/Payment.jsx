import React, { useState, useEffect } from 'react';
import Stripe from 'react-stripe-checkout';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import CurrencyConverter from './CurrencyConverter';

function Payment({ totalAmount }) {
  const [usdToLkrRate, setUsdToLkrRate] = useState(null);
  const margin = 1.762; // Assigning 1.762 to the margin variable

  useEffect(() => {
    async function fetchExchangeRate() {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        const rate = response.data.rates.LKR;
        setUsdToLkrRate(rate);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    }

    fetchExchangeRate();
  }, []);

  async function handleToken(token) {
    console.log(token);
    try {
      await axios.post('http://localhost:8080/api/payment/charge', '', {
        headers: {
          token: token.id,
          amount: totalAmount / (usdToLkrRate + margin), // Adding the margin to the amount
        },
      });
      alert('Payment Success');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="Payment">
      {usdToLkrRate && (
        <Stripe
          stripeKey="pk_test_51Mm7aEHKILrkPIJDn8VWqFuyWSYXUL3k8JrkQIYyIsBpsxzJ9xgwi0T7bQZYgqugdJC0dKWkbYYbFpzHmGDQxiTD003c7mSDY2"
          token={handleToken}
        />
      )}
    </div>
  );
}

export default Payment;
