import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import LinkedIn from "@mui/icons-material/LinkedIn";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#333",
    color: "#fff",
    padding: theme.spacing(4),
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginBottom: theme.spacing(2),
  },
  links: {
    marginBottom: theme.spacing(2),
  },
  contact: {
    marginBottom: theme.spacing(2),
  },
  social: {
    marginBottom: theme.spacing(2),
  },
  hr: {
    backgroundColor: "#fff",
    height: "1px",
    border: "none",
    margin: theme.spacing(4, 0),
  },
  copyright: {
    marginTop: theme.spacing(2),
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "red",
      textDecoration: "none",
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
        <Grid item xs={12} sm={6} md={3} className={classes.links}>
          <Typography variant="h6">Quick Links</Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Link href="#" color="inherit" className={classes.link}>Home</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="#" color="inherit" className={classes.link}>Products</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="#" color="inherit" className={classes.link}>News</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="#" color="inherit" className={classes.link}>Careers</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="#" color="inherit" className={classes.link}>Contact US</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="#" color="inherit" className={classes.link}>Disclaimer</Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.contact}>
          <Typography variant="h6">Contact</Typography>
          <Typography>123 Main St, City</Typography>
          <Typography>Email: example@example.com</Typography>
          <Typography>Phone: 123-456-7890</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.social}>
          <Typography variant="h6">Social Media</Typography>
          <LinkedIn/>
        </Grid>
      </Grid>
      <Divider className={classes.hr} />
      <Typography variant="body2" align="center" gutterBottom>&copy; 2024 Your Company. All rights reserved.</Typography>

      <Typography variant="body2" align="right">Privacy Policy</Typography>
    </footer>
  );
};

export default Footer;
