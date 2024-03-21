import React from 'react';
import { Box, Button, CardMedia, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const VideoBackground = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check for mobile devices

  return (
    <Container maxWidth={"false"} sx={{ position: 'relative',marginBottom:'2px', background:'black'}}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'left',
          minHeight: '100vh',
        }}
      >
        <CardMedia
          component="video"
          src="/src/assets/blockchain.mp4"
          title="Local Video"
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around', // Change this to space-around
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.24)',
            borderRadius: isMobile ? '0px' : '55px',
            color: 'white',
            padding: isMobile ? '50px 20px' : '50px 50px',
            textAlign: 'center',
            // Apply responsive sizing and positioning here (optional)
          }}
        >
          <Typography
            variant={isMobile ? 'h3' : 'h1'}
            component="h1"
            sx={{ fontSize: isMobile ? '2.5rem' : '4rem', lineHeight: '1.55', textAlign: 'center', lineHeightStep: '1', mt:14, animation: 'floatText 5s infinite' }} // Added animation
          >
            Revolutionize Payments <br/> with Secure, Streamlined <br/> Blockchain Solutions.
          </Typography>
          {/* Wrap the button with Link component and specify the path to products page */}
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" sx={{ padding: isMobile ? '10px 20px' : '10px 30px', marginBottom:'01px', fontSize: '1.5rem' }}> {/* Add some top margin to the button */}
              Learn More
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default VideoBackground;
