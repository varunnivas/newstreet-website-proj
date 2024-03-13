import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import './app.css';

const ImageFromAPI = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  useEffect(() => {
    // Replace with your actual API
    fetch('https://nst-website-api.onrender.com/api/v1/partners')
      .then(response => response.blob())
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        setImage1(imageUrl);
        setImage2(imageUrl);
        setImage3(imageUrl);
      });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between', // Center images horizontally
        alignItems: 'center', // Align images vertically within container
        overflow: 'hidden',
        animation: 'marquee 30s linear infinite',
        zIndex: 1,
        backgroundColor: '#440B0B', // Add white background
        padding: '10px', // Add optional padding for spacing
        borderRadius: '5px',
        position:'relative',
        marginTop: '10px', // Optional rounded corners for aesthetics
        boxShadow: '4px 2px 10px 100px rgba(0, 0, 0, 0.1)', // Add box shadow
      }}
    >
      {image1 && (
        <img
          src={'https://imgs.search.brave.com/ejTc0umPL_Tns7tkceBoNcH_3RAriKt-lv7Hqa4ADRs/rs:fit:860:0:0/g:ce/aHR0cDovL3BuZ2lt/YWdlc2ZyZWUuY29t/L0xPR08vRi9GZWRl/cmFsLUJhbmsvRmVk/ZXJhbC1CYW5rLUxv/Z28tUE5HLnBuZw'}
          alt="From API"
          style={{ width: '400px', height: '130px', marginRight: '10px', position: 'relative', animation: 'marquee1 7s ease-in-out infinite' }}
        />
      )}
      {image2 && (
        <img
          src={'https://imgs.search.brave.com/Q3C6oV7-58CDIEsebVzsYL8KxdA9OJxd9Qy_3X-860M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9raWtr/aWR1LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxMC8xMi9E/aGFuTGF4bWlCYW5r/LmpwZw'}
          alt="Second Image"
          style={{ width: '400px', height: '140px', position: 'relative', animation: 'marquee2 7s ease-in-out infinite' }}
        />
      )}  
      {image2 && (
        <img
            src={'https://imgs.search.brave.com/HcK5ixlGMK3b4wG2vehjveVrLtbXzRMuHZ03JNZZiTU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3Mvay85/MC9rYXJ1ci12eXN5/YS1iYW5rLnN2Zw.svg'}
            alt="Second Image"
            style={{ width: '500px', height: '330px', position: 'relative', animation: 'marquee2 7s ease-in-out infinite' }}
        />
        )}
    </Box>
  );
};

export default ImageFromAPI;
