import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";

export const LoginPage = () => {
  // States for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Redux states for loading and error
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginEvent = async (e) => {
    e.preventDefault();
    const userCredential = {
      username,
      password
    };
    try {
      await dispatch(loginUser(userCredential));
      navigate('/admin/home'); // Navigate to home after successful login
    } catch (error) {
      console.error("Login error:", error);
      // Handle error state, maybe display an error message to the user
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center', backgroundColor: 'white', color: 'black' }}>
        {/* Logo */}
        <Button variant="contained" style={{ backgroundColor: 'white' }}>
          <img src="https://newstreettech.com/wp-content/uploads/2020/07/New-Street-Tech-footer-logo.png" alt="New Street" />
        </Button>
        <br />
        <br />
        {/* Login Form */}
        <form onSubmit={handleLoginEvent}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ backgroundColor: 'white', color: 'black', borderRadius: '5px', padding: '5px' }}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ backgroundColor: 'white', color: 'black', borderRadius: '5px', padding: '5px' }}
          />
          <br />
          <br />
          <button type="submit">{loading ? 'Loading...' : 'Login'}</button>
          {error && <div>{error}</div>} {/* Display error message if login fails */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
