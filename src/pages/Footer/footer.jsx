import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import LinkedIn from "@mui/icons-material/LinkedIn";

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
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <img src="https://newstreettech.com/wp-content/uploads/2020/07/New-Street-Tech-footer-logo.png" alt="logo" style={{ width: '190px' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Contact</Typography>
          <Typography>123 Main St, City</Typography>
          <Typography>Email: example@example.com</Typography>
          <Typography>Phone: 123-456-7890</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Social Media</Typography>
          <LinkedIn/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img src="https://newstreettech.com/wp-content/uploads/2020/07/iso-logo.png" alt="logo" style={{ width: '120px', alignItems: "right"}}/>
        </Grid>
      </Grid>
      <Divider className={classes.hr} />
      <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <Typography variant="body2" align="center">DISCLAIMER</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" align="center">&copy; 2024 Your Company. All rights reserved.</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2" align="right">Privacy Policy</Typography>
          </Grid>
        </Grid>
    </footer>
  );
};

export default Footer;
