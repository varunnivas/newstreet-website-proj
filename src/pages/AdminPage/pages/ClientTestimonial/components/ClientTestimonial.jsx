import React, { useState, useEffect } from 'react';
import Sidenav from '../../../components/Sidenav';
import Box from '@mui/material/Box';
// import FormComponent from './FormComponent';
// import axios from 'axios';

const ClientTestimonial = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>Client Testimonial</h3>
        </Box>
      </Box>
    </>
  );
};

export default ClientTestimonial;
