import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";

export const LoginPage = () => {
  // states
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // redux states
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredential = {
      name,
      password
    };
    dispatch(loginUser(userCredential)).then((result) => {
      if (result.payload) {
        setName('');
        setPassword('');
        navigate('/');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '300px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          textAlign: 'center', // Center aligning the content
        }}
      >
        <Button variant="contained" color="secondary">
          New Street
        </Button>
        <br/>
        <br/>
        <form onSubmit={handleLoginEvent}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">{loading ? 'Loading...' : 'Login'}</button>
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
