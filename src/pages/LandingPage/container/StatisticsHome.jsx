import React from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';

const data = [5430389, 626, 16]; // Replace with your actual data
const labels = ['Blocks', 'Users', 'Nodes'];

const NumberRow = () => {
  const images = [
    "/src/assets/cubes.png",
    "/src/assets/users.png",
    "/src/assets/nodes.png"
  ]; // Replace with the path to your image

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',borderRadius: '40px', marginLeft:'10px'  }}>
      {data.map((item, index) => (
        <Box key={index} sx={{ mr: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom:'20px'}}>
          <Typography variant="h2" sx={{ ml: 1, mr: 1, fontSize: '3rem', textDecoration: 'null', textDecorationColor: 'white' }}>{item}</Typography>

          <Typography
            variant="h1"
            color={index === 2 ? 'white' : 'white'}
            sx={{ mr: 2, mt: 2, textDecoration: index === 3 ? 'underline' : 'none' }} // Conditional underline
          >
            {labels[index]}
          </Typography>
          {images[index] && (
            <img src={images[index]} alt={labels[index]} style={{ width: '100px', height: '100px' }} />
          )}

          {index !== data.length + 1 && <Divider sx={{ width: '100%', bgcolor: 'red', mt: 2 }} />}
        </Box>
      ))}
    </Box>
  );
};

const BigNumberCard = () => {
  return (
    <Card sx={{ width: '100%', p: 0, margin: '0' }}> {/* Set width, padding, and margin */}
      <CardContent sx={{ background: 'linear-gradient(to right, hsl(0, 10%, 0%), hsl(0, 60%, 20%))' }}>
        <NumberRow />
      </CardContent>
    </Card>
  );
};

export default BigNumberCard;
