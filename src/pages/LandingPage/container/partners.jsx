import  { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import './app.css';
import Footer from '../../Footer/footer';

const ImageFromAPI = ({ imageUrls }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imageUrls);
  }, [imageUrls]);

  return (
    <Box
      sx={{
        background: 'linear-gradient(to left, hsl(0, 19%, 2%), hsl(0, 60%, 30%))',
        padding: '20px', 
      }}
    >
      <Box
        sx={{
          display: 'flex', // Correct display property
          justifyContent: 'space-between', // Align images to the left
          alignItems: 'space-between', // Align images vertically within container
          overflow: 'hidden',
          zIndex: 1,
          padding: '10px', // Add optional padding for spacing
          borderRadius: '5px',
          position: 'relative', // Set position to relative
        }}
      >
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            style={{
              width: '400px',
              height: '170px',
              marginRight: '10px',
              position: 'flex', // Position images absolutely
              left: `${index * 410}px`, // Spread images horizontally
              animation: `marquee${index} 3s linear infinite`, // Use linear animation
            }}
          />
        ))}
      </Box>
    </Box>
    
  );
};

export default ImageFromAPI;
