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
    <Box sx={{ background: 'linear-gradient(to right, hsl(0, 19%, 2%), hsl(0, 60%, 30%))', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px', marginBottom: '2px', marginRight:'10px', mt:0}}>
      {data.map((item, index) => (
        <Box key={index} sx={{ mr: 11, ml: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h2" sx={{ ml:10, mr: 12, fontSize: '3rem', textDecorationColor: 'white', alignContent: 'center', animation: `numberAnimation${index} 2s ease-in-out forwards` }}>{item}</Typography>
          <Typography
            variant="h1"
            color={index === 3 ? 'white' : 'white'}
            sx={{ ml:'7',mr: '5', mt: 1, textDecoration: index === 3 ? 'underline' : 'none', alignContent:'center', fontWeight:'400', animation: `textAnimation${index} 2s ease-in-out forwards` }} // Conditional underline
          >
            {labels[index]}
          </Typography>
          {images[index] && (
            <img src={images[index]} alt={labels[index]} style={{ width: '110px', height: '100px' , ml:'8', marginLeft:'0px', marginRight:'20px',mt:2}} />
          )}
          {index !== data.length && <Divider sx={{ width: '100%', bgcolor: 'white', mt: 2, ml:2, mr:4,justifyContent:"center" }} />}

          {/* CSS Keyframe Animations */}
          <style>
            {`@keyframes numberAnimation${index} {
              from {
                opacity: 0;
                transform: translateY(50px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes textAnimation${index} {
              from {
                opacity: 0;
                transform: translateY(50px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }`}
          </style>
        </Box>
      ))}
    </Box>
  );
};

const BigNumberCard = () => {
  return (
    <Box sx={{ backgroundColor: 'linear-gradient(to right, hsl(0, 10%, 0%)' }}> 
      <Card sx={{ background: 'linear-gradient(to right, hsl(0, 10%, 0%), hsl(0, 60%, 20%))', display: 'flex', alignItems: 'center', borderRadius: '0px', p: 0, width: '100%' , padding:'0px'}}> 
        <CardContent sx={{ background: 'linear-gradient(to right, hsl(0, 10%, 0%), hsl(0, 60%, 20%))', width:'100%'}}>
          <NumberRow />
        </CardContent>
      </Card>
    </Box>
  );
};

export default BigNumberCard;
