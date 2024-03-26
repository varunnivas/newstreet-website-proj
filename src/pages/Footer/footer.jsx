import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import XIcon from '@mui/icons-material/X';

const FooterContainer = styled('footer')({
  backgroundColor: "#333",
  color: "#fff",
  padding: (theme) => theme.spacing(4),
});

const Hr = styled('hr')({
  backgroundColor: "#fff",
  height: "1px",
  border: "none",
  margin: (theme) => theme.spacing(4, 0),
});

const Icon = styled('span')({
  fontSize: "small",
  verticalAlign: "middle",
  marginRight: (theme) => theme.spacing(1),
});

const SocialIcon = styled(LinkedInIcon)({
  marginRight: (theme) => theme.spacing(1), // Add space between social icons
  "&:hover": {
    color: "red", // Change color on hover
  },
});

const Link = styled(Typography)({
  "&:hover": {
    color: "red", // Change color on hover
  },
});

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={3} style = {{padding : "10px"}}>
        <Grid item xs={12} sm={6} md={3}>
          <img src="https://newstreettech.com/wp-content/uploads/2020/07/New-Street-Tech-footer-logo.png" alt="logo" style={{ width: '190px' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <Typography variant="h2">Contact</Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <Typography variant="p" style = {{color : "white"}}>
                <LocationOnIcon sx={{ fontSize: 'small', verticalAlign: 'middle' }} />
                India
              </Typography><br></br>
              <Typography variant="p" style = {{color : "white"}}>
                <EmailIcon sx={{ fontSize: 'small', verticalAlign: 'middle' }} />
                Email: careers@newstreettech.com
              </Typography><br></br>
              <Typography variant="p" style = {{color : "white"}}>
                <LocalPhoneIcon sx={{ fontSize: 'small', verticalAlign: 'middle' }} />
                Phone: +91 80 4371 1712
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography variant="p" style = {{color : "white"}}>
                <LocationOnIcon sx={{ fontSize: 'small', verticalAlign: 'middle' }} />
                Dubai
              </Typography><br></br>
              <Typography variant="p" style = {{color : "white"}}>
                <EmailIcon sx={{ fontSize: 'small', verticalAlign: 'middle' }} />
                Email: info@newstreettech.com
              </Typography><br></br>
              <Typography variant="p" style = {{color : "white"}}>
                <LocalPhoneIcon sx={{ fontSize: 'small', verticalAlign: 'middle' }} />
                Phone: +971 55 9298 123
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h2">Social Media</Typography>
          <SocialIcon />
          <XIcon />
        </Grid>
      </Grid>
      <Hr />
      <Grid container spacing={2} style = {{padding : "10px", alignItems : "center"}}>
        <Grid item xs={3}>
          <Typography variant="p" style = {{color : "white"}} align="left">DISCLAIMER</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="p" style = {{color : "white"}} align="center">&copy; 2024 Your Company. All rights reserved.</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="p" style = {{color : "white"}} align="right">Privacy Policy</Typography>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
