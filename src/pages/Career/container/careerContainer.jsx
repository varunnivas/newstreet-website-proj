import React, { useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/footer';
import { Grid, Typography, Card, CardMedia, Divider, Button, Avatar } from '@mui/material';
import './career.css';
import { fetchJobs } from '../redux/thunk';
import { selectJobs } from '../redux/selector';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import { makeStyles } from "@material-ui/core/styles";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Chip from '@mui/material/Chip';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  hr: {
    backgroundColor: "grey",
    height: "1px",
    border: "none",
    margin: theme.spacing(4, 0),
  },
  jobOpening: {
    color: "red",
    textAlign: "center",
    margin: theme.spacing(2, 0),
  },
  search: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const CareerContainer = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectJobs);

  useEffect(() => {
    dispatch(fetchJobs());
  },[])

  console.log(items);
  


  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container className='container'>
        <Grid item xs={12}>
          <div className='bubble'>
            <center><Typography variant='h1' style = {{color : "red"}}>Become Part of our Team</Typography></center><br />
            <center>
              <Typography variant='p'>NEW STREET TECH - Your fast track to the future - <br />
                Leverages latest technologies to create and operate Hi-tech Ecosystems that will facilitate
                powerful re-imagination of your Products, Processes & Partnerships.<br />
                To Deliver Unprecedented & Delightful Customer Experience<br />
                So, waltz into your future via<br />
                New Street!!!
              </Typography>
            </center>
          </div>
        </Grid>

        <Grid container spacing={2} className='images'>
          <div className="image-container">
            <Card className="image-card">
              <CardMedia
                component="img"
                height="240"
                image="https://newstreettech.com/wp-content/uploads/2023/11/Dhanlaxmi-Bank-Visits-NST-Centre-of-Excellence.jpg"
              />
            </Card>
            <Card className="image-card">
              <CardMedia
                component="img"
                height="240"
                image="https://newstreettech.com/wp-content/uploads/2022/12/8B8A1966.jpg"
              />
            </Card>
            <Card className="image-card">
              <CardMedia
                component="img"
                height="240"
                image="https://newstreettech.com/wp-content/uploads/2022/08/MicrosoftTeams-image-1-1.jpg"
              />
            </Card>
          </div>
        </Grid>

        <Grid item xs={12} className='container-values'>
          <center><Typography variant='h1'>OUR VALUES</Typography></center><br />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h2"><AccessibilityNewIcon />Customer First</Typography>
              <Typography variant='p' style={{ color: "White" }}>
                We succeed when our customers and users succeed. They're are at the center of everything we do. Our passion for our users translates into their passion for NewStreet.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h2"><AccessTimeIcon />Flexible</Typography>
              <Typography variant='p' style={{ color: "White" }}>
                We're a company, with a flexible work- from-anywhere policy. We work in small product oriented teams to focus & execute faster. We don't track working hours, what matters is what you get done.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h2"><VolunteerActivismOutlinedIcon />Empathy at Work</Typography>
              <Typography variant='p' style={{ color: "White" }}>
                Empathy is the ability to place yourself in the shoes of others, to try to understand their thoughts, feelings, and needs, and also know that we don't know it all and need to approach other people with the humility to learn.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h2"><Diversity3OutlinedIcon />Diversity</Typography>
              <Typography variant='p' style={{ color: "White" }}>
                Diverse and inclusive environments are both an advantage and a moral imperative. 40% of our leadership team consists of women, and we are proud to have a diverse group of investors, board members, and advisors.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h2"><GppGoodOutlinedIcon />Trust</Typography>
              <Typography variant='p' style={{ color: "White" }}>
                We work together to make collaboration a strength across timezone differences, languages, and cultures. While we're in different places, we all have the same goals, and we trust each other to do the work needed to achieve them.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} >
        <Divider className={classes.hr} /><br/>
        <Typography variant='h2' className={classes.jobOpening} style={{ color: "red", alignItems : "center" , fontFamily : "Arial", fontSize : "1.5rem"}}>Job Openings </Typography><br/>
        {items?.map((item, index) => (
          <Grid container alignItems="center" spacing={2} key={index} style={{ marginBottom: '10px' }}> {/* Added marginBottom style */}
            <Grid item xs={10}>
              <Grid container style={{ marginLeft: "10px" }}>
                <Grid item md={3}>
                  <Typography variant='h3' style={{ fontFamily: "Arial", fontSize: "1.0rem", color: "red" }}>
                    {item.title}
                  </Typography>
                </Grid>
                <Grid item md={2} className='location'>
                  <Typography variant='body1' style={{ fontFamily: "Arial", fontSize: "0.5rem" }}>
                    <LocationOnIcon /><Chip
                      label="Bangalore"
                      variant="contained"
                      size="small"
                      style={{ backgroundColor: "darkred" }}
                    />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} >
              <Button variant="contained" color="primary" style={{ fontFamily: "Arial", fontSize: "1.0rem", color: "red", alignContent: "end" }}>
                Apply
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider className={classes.hr} />
            </Grid>
          </Grid>
        ))}

      </Grid>

      </Grid>
      <Footer />
    </>
  );
}

export default CareerContainer;
