import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import LinkedIn from "@mui/icons-material/LinkedIn";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import XIcon from '@mui/icons-material/X';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#333",
    color: "#fff",
    padding: theme.spacing(4),
  },
  hr: {
    backgroundColor: "#fff",
    height: "1px",
    border: "none",
    margin: theme.spacing(4, 0),
  },
  icon: {
    fontSize: "small",
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
  socialIcons: {
    marginRight: theme.spacing(1), // Add space between social icons
    "&:hover": {
      color: "red", // Change color on hover
    },
  },
  link: {
    "&:hover": {
      color: "red", // Change color on hover
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <img src="https://newstreettech.com/wp-content/uploads/2020/07/New-Street-Tech-footer-logo.png" alt="logo" style={{ width: '190px' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <Typography variant="h6">Contact</Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <Typography>
                <LocationOnIcon className={classes.icon} />
                India
              </Typography>
              <Typography>
                <EmailIcon className={classes.icon} />
                Email: careers@newstreettech.com
              </Typography>
              <Typography>
                <LocalPhoneIcon className={classes.icon} />
                Phone: +91 80 4371 1712
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography>
                <LocationOnIcon className={classes.icon} />
                Dubai
              </Typography>
              <Typography>
                <EmailIcon className={classes.icon} />
                Email: info@newstreettech.com
              </Typography>
              <Typography>
                <LocalPhoneIcon className={classes.icon} />
                Phone: +971 55 9298 123
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6">Social Media</Typography>
          <LinkedIn className={classes.socialIcons} />
          <XIcon className={classes.socialIcons} />
        </Grid>
      </Grid>
      <Divider className={classes.hr} />
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <Typography variant="body2" align="left" className={classes.link}>DISCLAIMER</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" align="center" className={classes.link}>&copy; 2024 Your Company. All rights reserved.</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body2" align="right" className={classes.link}>Privacy Policy</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
