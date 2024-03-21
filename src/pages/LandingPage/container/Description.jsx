// import React from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

const DescriptionCard = () => {
  return (
    <Container maxWidth={false} sx={{ marginTop: '0px', color: 'white', position: 'flex', background:'linear-gradient(to left, hsl(0, 20%, 2%), hsl(0, 60%, 30%))'}}>
      <Card sx={{ borderRadius: '0px', background: 'linear-gradient(to left, hsl(0, 19%, 2%), hsl(0, 60%, 30%))', display: 'flex', alignItems:'center', padding:'15px', marginBottom:'1px'}}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '100px 1 4 40px',
                marginTop: '3px',
                marginLeft: '5px',
                maxHeight: 'auto',
                marginBottom: '5px',
              }}
              image="/src/assets/vision.jpg"
              alt="Description Photo"
            />
          </Grid>
          <Grid item xs={6}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'justify', margin:'20px', animation: 'fadeIn 1.5s ease-out' }}>
              <Typography variant="h1" component="div" sx={{ fontWeight: '400', color: 'white', alignSelf:'center', marginTop:'5px' , marginBottom:'10px'}}>
                NEW STREET TECH 
              </Typography>
               <Typography variant="h2" component="div" sx={{ fontWeight: '300', color: 'white', alignItems:'center', alignSelf:'center', lineHeight:'20px', marginBottom:'22px'}}>
                Your fast track to the future
              </Typography>
              
              <Typography variant="p" sx={{ color: 'white', marginBottom: '40px', mt: 2, textAlign:'center',fontWeight: '300', animation: 'slideIn 1.5s ease-out' }}>
                Leverages these technologies to create and operate Hi-tech Ecosystems that will facilitate powerful re-imagination of your Products, Processes & Partnerships to Deliver Unprecedented & Delightful Customer Experience. So, waltz into your future via New Street! 
              </Typography>
              <Typography variant="h1" component="div" sx={{ fontWeight: '300', marginTop: '40px', color: 'white', alignSelf:'center', animation: 'fadeIn 1.5s ease-out' }}>
                Our Vision
              </Typography>
              <Typography variant="p" sx={{ color: 'white', mt: 2 , textAlign:'center', fontWeight:'300', animation: 'slideIn 1.5s ease-out' }}>
                To make it possible for every business in the world to leverage blockchain and other new age technologies to serve their stakeholders better and in more ways than before.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default DescriptionCard;
