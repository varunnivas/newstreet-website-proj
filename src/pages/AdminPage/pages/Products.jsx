import React from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';

const Products = () => {
  return (
    <>
    <Navbar/>
    <Box sx={{ display: 'flex' }}>
      <Sidenav />
      <h1>Products</h1>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      </Box>
    </Box>
    </>
  );
};

export default Products;
