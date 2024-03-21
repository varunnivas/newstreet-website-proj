import React, { useState } from 'react';
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

  // Add descriptions for each team member
  const descriptions = [
    "Sajeev is the Chairman & CEO of the company. He has over 20 years of experience in the industry.",
    "Shrish is the Chief Business Officer. He is responsible for the company's business strategy.",
    "Maya is the Chief People Officer. She oversees the company's HR policies and culture.",
  ];

  // State to track hover status for each card
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <NavBar />
      <div style={{ zIndex: 1 }}>
        <div
          style={{
            backgroundImage: `url(${coverImageUrl})`,
            backgroundSize: 'cover',
            zIndex: 2,
            height: '753px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h1" color="textPrimary" style={{ marginTop: '90px', marginBottom: '695px', color: 'white', textAlign: 'center', fontSize: '5rem', zIndex: 0, fontWeight:'400'}}>
            About Us
          </Typography>
        </div>
        <div style={{ zIndex: 2 }}>
          <div style={{ background: 'linear-gradient(to left, hsl(0, 19%, 2%), hsl(0, 60%, 30%))' }}>
            <Container style={{ marginTop: '5px', textAlign: 'center', textShadow: '20px' }}>
              {/* Mission Section */}
            </Container>

            {/* Team Section */}
            <Container style={{ marginBottom: '30px' }}>
              <Typography variant="h1" gutterBottom style={{ fontSize: '3.6rem', textAlign: 'center', lineHeight: '100px', fontWeight:'400', mt:2, marginTop:'10px'}}>
                Our Team
              </Typography>
              <Grid container spacing={3}>
                {/* Employee Cards */}
                {photoLinks.map((photoLink, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper elevation={3}>
                      <Card 
                        variant="outlined" 
                        sx={{ position: 'relative', transition: 'height 0.3s' }} 
                        style={{ height: hoveredCard === index ? 'auto' : '250px' }}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <CardContent 
                          style={{ 
                            textAlign: 'center', 
                            background: hoveredCard === index ? '#6B1111' : '#292626', 
                          }}
                        >
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
                          {hoveredCard === index && (
                            <Typography variant="body2" color="textSecondary" component="div" style={{color:'white', lineHeight:'2', mt:2, marginBottom:'15px'}}>
                              {descriptions[index]}
                            </Typography>
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
      </div>
    </>
  );
};

export default AboutUsPage;
