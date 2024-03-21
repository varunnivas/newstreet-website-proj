import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Paper } from '@mui/material';
import NavBar from '../LandingPage/container/Navbar';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  const coverImageUrl = "https://newstreettech.com/wp-content/uploads/2023/11/Dhanlaxmi-Bank-Visits-NST-Centre-of-Excellence.jpg"; // Replace with your actual cover image URL
  const photoLinks = [
    "https://newstreettech.com/wp-content/uploads/2020/07/MG_9197-1.jpg", 
    "https://newstreettech.com/wp-content/uploads/2023/07/shrish1.jpg", 
    "https://newstreettech.com/wp-content/uploads/2023/07/maya.jpg", 
  ];
  const names = ["Sajeev", "Shrish", "Maya"];
  const titles = ["Chairman & CEO", "Chief Business Officer", "Chief People Officer"];
  const linkedInUrls = [
    "https://www.linkedin.com/in/sajeev-viswanathan-95b11933/", 
    "https://www.linkedin.com/in/lalshrish/", 
    "https://www.linkedin.com/in/maya-shenoy-2b486923/",
  ];

  return (
    <>
      <NavBar />
      <div style={{ zIndex: 1 }}>
        <div
          style={{
            backgroundImage: `url(${coverImageUrl})`,
            backgroundSize: 'cover',
            zIndex: 2,
            height: '700px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h1" color="textPrimary" style={{ marginTop: '100px', marginBottom: '655px', color: 'white', textAlign: 'center', fontSize: '6rem', zIndex: 0 }}>
            About Us
          </Typography>
        </div>
        <div style={{ zIndex: 2, background: 'linear-gradient(to left, hsl(0, 19%, 2%), hsl(0, 60%, 30%))' }}>
          <Container style={{ marginTop: '5px', marginBottom: '40px', textAlign: 'center', textShadow: '20px' }}>
            <Typography variant="h1" color='white' gutterBottom style={{ fontSize: '3.6rem', mt:2, fontWeight:'400'}}>
              Our Mission
            </Typography>
            <Typography variant="body" color='white' style={{ fontSize: '1.2rem', mt:3}}>
              Winner of PICUP 2020 "Emerging Tech Platform" Award & Business World's "Best Use of Blockchain in BFSI" Award, New Street leverages cutting edge technologies like Blockchain, AI, DApps, IOT, etc. to create and operate Hi-tech Ecosystems that will facilitate powerful re-imagination of your products, processes & partnerships to deliver unprecedented & delightful customer experience.
            </Typography>
          </Container>

          {/* Team Section */}
          <Container>
            <Typography variant="h1" gutterBottom style={{ fontSize: '3.6rem', textAlign: 'center', lineHeight: '100px', fontWeight:'400', mt:2, marginTop:'30px'}}>
              Our Team
            </Typography>
            <Grid container spacing={3}>
              {/* Employee Cards */}
              {photoLinks.map((photoLink, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper elevation={3}>
                    <Card variant="outlined" sx={{ position: 'relative' }}>
                      <CardContent style={{ textAlign: 'center', background:'#6B1111', minHeight: '250px' }}>
                        <Avatar
                          alt={`Photo ${index + 1}`}
                          src={photoLink}
                          sx={{ width: 135, height: 150, margin: 'auto' }}
                        />
                        <Typography variant="h3" component="div" style={{ marginTop: '10px', color:'white', marginBottom:'15px', fontSize:'2.5rem', mt:2}}>
                          {names[index]}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="div" style={{color:'white', lineHeight:'2', mt:2, marginBottom:'15px'}}>
                          {titles[index]}
                        </Typography>
                        {linkedInUrls[index] && (
                          <Link to={linkedInUrls[index]} target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
                            <img src="https://imgs.search.brave.com/KSg67-RXjEB7oNcvs4mjTRkAshQrCirzAaPFdvk4wEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9MaW5rZWRJ/bi9MaW5rZWRJbi1J/Y29uLUxvZ28ud2lu/ZS5zdmc.svg" alt="LinkedIn" style={{ width: '50px', height: '40px', marginTop: '10px' }} />
                          </Link>
                        )}
                      </CardContent>
                      <CardContent style={{ textAlign: 'center', background:'#6B1111', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backfaceVisibility: 'hidden', transformStyle: 'preserve-3d', transition: 'transform 0.8s' }} sx={{ transform: 'rotateY(180deg)' }}>
                        {/* Additional content to show on hover */}
                        <Typography variant="h3" component="div" style={{ marginTop: '20px', color:'white', marginBottom:'15px', fontSize:'2.5rem', mt:2}}>
                          {names[index]}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="div" style={{color:'white', lineHeight:'2', mt:2, marginBottom:'15px'}}>
                          {titles[index]}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="div" style={{color:'white', lineHeight:'2', mt:2, marginBottom:'25px'}}>
                          {/* Add additional information for Sajeev */}
                          {names[index] === 'Sajeev' && (
                            <>
                              Sajeev is the Founder of New Street Tech. He brings to New Street his vast experience in banking, microfinance, payments, and technology. He has run multi-billion-dollar businesses, built and managed high-performance organizations across the globe, and has a passion for leveraging disruptive technologies in enhancing conventional business models. Sajeev served at Citigroup for over 18 years.
                            </>
                          )}
                        </Typography>
                        {linkedInUrls[index] && (
                          <Link to={linkedInUrls[index]} target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
                            <img src="https://imgs.search.brave.com/KSg67-RXjEB7oNcvs4mjTRkAshQrCirzAaPFdvk4wEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9MaW5rZWRJ/bi9MaW5rZWRJbi1J/Y29uLUxvZ28ud2lu/ZS5zdmc.svg" alt="LinkedIn" style={{ width: '50px', height: '40px', marginTop: '10px' }} />
                          </Link>
                        )}
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
