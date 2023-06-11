import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../page/Footer';

const CurrencyConverter = () => {
  const location = useLocation();
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [usdToLkrRate, setUsdToLkrRate] = useState(0);

  const handleButtonClick = () => {
    // Navigate back to the previous page
    window.history.back();
  };

  useEffect(() => {
    const fetchExchangeRates = async () => {
      const API_KEY = '4362bccfa38a49b1915bc585';

      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/LKR?apiKey=${API_KEY}`
        );
        setExchangeRates(response.data.rates);
        setUsdToLkrRate(response.data.rates.USD); // Set the rate between USD and LKR
        setConvertedAmount(amount * response.data.rates.USD); // Update the converted amount based on the initial amount and rate
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    // Fetch exchange rates initially
    fetchExchangeRates();

    // Fetch exchange rates every 5 minutes
    const interval = setInterval(fetchExchangeRates, 5 * 60 * 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [amount]);

  const handleAmountChange = (e) => {
    const inputAmount = parseFloat(e.target.value);
    setAmount(inputAmount);
    setConvertedAmount(inputAmount * exchangeRates[selectedCurrency]);
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
    setConvertedAmount(amount * exchangeRates[e.target.value]);
  };

  return (
    <div>
      <div
        className="row"
        style={{
          border: '5px solid #ccc',
          borderRadius: '5px',
          padding: '20px',
          margin: '10px',
        }}
      >
        <div
          style={{ marginTop: '10px', marginBottom: '10px' }}
          className="text-center"
        >
          <h1>Currency Converter</h1>{' '}
        </div>
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <label style={{ marginBottom: '10px' }} htmlFor="amount">
            Amount in Lkr:
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            style={{
              width: '300px',
              marginBottom: '10px',
              padding: '8px',
              borderRadius: '3px',
              border: '1px solid #ccc',
              fontSize: '16px',
              outline: 'none',
              transition: 'border-color 0.3s ease',
            }}
          />
        </div>
        <div className="text-center" style={{ marginBottom: '10px' }}>
          <label style={{ marginBottom: '10px'  }}>From:</label>
          <span
            style={{
              color: 'white',
              backgroundColor: '#00D0D0',
              padding: '5px',
              cursor:'pointer'
            }}
          >
            LKR (Sri Lankan Rupee)
          </span>
        </div>

        <div className="card col-md-6 offset-md-3 offset-md-3">
          <label>To:</label>{' '}
          <h5 style={{ marginBottom: '10px' }}>
            Choose currency you need to convert
          </h5>
          <select
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            style={{
              width: '150px',
              paddingRight: '20px',
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23ff0000\' width=\'80px\' height=\'40px\'%3E%3Cpath d=\'M7 10l5 5 5-5z\'/%3E%3C/svg%3E")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 8px center',
              marginBottom: '10px',
            }}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{ marginTop: '25px' }}
          className="card col-md-6 offset-md-3 offset-md-3"
        >
          <label
            style={{ marginBottom: '15px', marginTop: '25px' }}
            htmlFor="convertedAmount"
          >
            Converted Amount:
          </label>
          <input
            id="convertedAmount"
            type="number"
            value={convertedAmount}
            readOnly
            style={{
              width: '300px',
              padding: '8px',
              borderRadius: '3px',
              border: '1px solid #ccc',
              fontSize: '16px',
              outline: 'none',
              transition: 'border-color 0.3s ease',
              marginBottom: '10px',
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-outline-light btn-rounded bg-color text-color"
          onClick={handleButtonClick}
          style={{
            width: '75px',
            marginLeft: '403px',
            padding: '5px',
            fontSize: '20px',
            height: '50px',
            marginTop: '5px',
          }}
        >
          Back
        </button>
       <div 
          style={{
            width: 'auto',
            marginLeft: '480px',
            padding: '5px',
            fontSize: '20px',
            height: '50px',
            marginTop: '5px',
            backgroundColor: '#00D0D0',
            border: 'none',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Rate: 1 USD = {(1 / usdToLkrRate).toFixed(3)} LKR
        </div>
      </div>
   <div><Footer></Footer></div>
    </div>
  );
};

export default CurrencyConverter;
