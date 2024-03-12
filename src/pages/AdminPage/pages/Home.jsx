import React from 'react';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Box sx={{ display: 'flex' }}>
      <Sidenav />
      <h1>DashBoard</h1>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      </Box>
    </Box>
    </>
  );
};

export default HomePage;
