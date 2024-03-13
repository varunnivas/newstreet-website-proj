import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

const DescriptionCard = () => {
  return (
    <Container maxWidth={false} sx={{ marginTop: '0px', color: 'white', position: 'flex' }}>
      <Card sx={{ borderRadius: '10px', background: 'linear-gradient(to left, hsl(0, 19%, 2%), hsl(0, 60%, 30%))', display: 'flex', alignItems:'center', padding:'15px', marginBottom:'15px'}}>
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
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'justify', padding: '20px', margin:'20px'}}>
              <Typography variant="h1" component="div" sx={{ fontWeight: 'bold', color: 'white', alignSelf:'center' }}>
                NEW STREET TECH 
              </Typography>
               <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', color: 'white', alignItems:'center', alignSelf:'center', lineHeight:'30px'}}>
                Your fast track to the future
              </Typography>
              
              <Typography variant="body2" sx={{ color: 'white', marginBottom: '40px', mt: 2, textAlign:'center' }}>
                Leverages these technologies to create and operate Hi-tech Ecosystems that will facilitate powerful re-imagination of your Products, Processes & Partnerships to Deliver Unprecedented & Delightful Customer Experience. So, waltz into your future via New Street!!! Many institutions already are...
              </Typography>
              <Typography variant="h1" component="div" sx={{ fontWeight: 'bold', marginTop: '40px', color: 'white', alignSelf:'center' }}>
                Our Vision
              </Typography>
              <Typography variant="body2" sx={{ color: 'white', mt: 2 , textAlign:'center'}}>
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