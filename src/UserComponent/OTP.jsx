import React from 'react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

export default function VerifyOtpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = new URLSearchParams(location.search).get('data');

  const [otp, setOtp] = useState('');

  async function verifyOtp(event) {
    event.preventDefault();
    setOtp('');

    try {
      const response = await axios.post('http://localhost:8088/api/v1/user/verify-otp', {
        userName: userName,
        otp: otp
      });

      console.log(response.status);
      console.log('RESPONSE: ' + response.data.token);

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);

        // Redirect to home page
        navigate('/home');
      } else {
        // Stay on the same page
        alert('Invalid OTP. Please try again');
      }
    } catch (err) {
      alert('Failed login. Please try again');
    }
  }

  return (
    <div className="text-center m-5-auto">
      <form action="/home">
        <p>
          <label>Enter the OTP:</label>
          <br />
          <input
            type="text"
            name="otp"
            required
            value={otp}
            onChange={(event) => {
              setOtp(event.target.value);
            }}
          />
        </p>
        <p>
          <button id="sub_btn" type="submit" onClick={verifyOtp}>
            Submit
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
