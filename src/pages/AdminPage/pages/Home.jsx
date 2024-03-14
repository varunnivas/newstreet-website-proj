import React from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';

const HomePage = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>Welcome to New Street Portal</h3>
          <p>
            New Street Portal is an intuitive platform designed to streamline your workflow.
            Whether you're managing products, updating news, or handling inquiries, our portal
            provides the tools you need to stay organized and efficient.
          </p>
          <p>
            Explore the navigation menu to access different sections of the portal, and feel free
            to reach out to our support team if you have any questions or feedback.
          </p>
          <p>
            Thank you for choosing New Street Portal!
          </p>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
