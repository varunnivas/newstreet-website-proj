import React, { useState, useEffect, useRef } from 'react';
import './news.css';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/footer';
import ClearIcon from '@mui/icons-material/Clear';

const newsContainer = () => {
    const [itemActive, setItemActive] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState(null);

  const thumbnailRef = useRef(null);

  const nextClick = () => {
    setItemActive((prevItemActive) => (prevItemActive + 1) % items.length);
  };

  const prevClick = () => {
    setItemActive((prevItemActive) => (prevItemActive - 1 + items.length) % items.length);
  };

  const thumbnailClick = (index) => {
    setIsTimerPaused(true); // Pause the timer when a click is registered
    setItemActive(index);
    setDialogOpen(true);
    setDialogData(items[index]);
  };

  const handleClose = () => {
    setIsTimerPaused(false); // Resume the timer when the dialog is closed
    setDialogOpen(false);
  };

  const [isTimerPaused, setIsTimerPaused] = useState(false);

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      if (!isTimerPaused) {
        nextClick();
      }
    }, 3000);
    return () => clearInterval(refreshInterval);
  }, [isTimerPaused]);

  useEffect(() => {
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollLeft = thumbnailRef.current.children[itemActive].offsetLeft - (thumbnailRef.current.offsetWidth - thumbnailRef.current.children[itemActive].offsetWidth) / 2;
    }
  }, [itemActive]);


  const items = [
    {
      image: "https://newstreettech.com/wp-content/uploads/2023/11/Dhanlaxmi-Bank-Visits-NST-Centre-of-Excellence.jpg",
      title: 'Slider 01',
      date: '02-04-2023',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: "https://newstreettech.com/wp-content/uploads/2023/12/image-1.png",
      title: 'Slider 02',
      date: '02-04-2023',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: "https://newstreettech.com/wp-content/uploads/2023/11/Dhanlaxmi-Bank-Inaugurates-Shecommerz-State-Headquarters-powered-by-New-Street-Tech-2000-1.jpg",
      title: 'Slider 01',
      date: '02-04-2023',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: "https://newstreettech.com/wp-content/uploads/2023/11/Emerging-Businesses-5th-Edition.jpg",
      title: 'Slider 03',
      date: '02-04-2023',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: "https://newstreettech.com/wp-content/uploads/2023/07/image3.jpg",
      title: 'Slider 04',
      date: '02-04-2023',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
  ];
  
  return (
    <>
        <header>
        <Navbar/>
        </header>
        <Grid container justifyContent="center">
        
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className='slider'>
          
            <div className='controls'>
              <div className='control-left'>
                <Button id="prev" onClick={prevClick}><ArrowBackIosIcon /></Button>
              </div>
              <div className='control-right'>
                <Button id="next" onClick={nextClick}><ArrowForwardIosIcon /></Button>
              </div>
            </div>
 
            <div className='thumbnail' ref={thumbnailRef}>
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`item item-${index} ${index === itemActive ? 'active' : ''}`}
                  onClick={() => thumbnailClick(index)}
                >
                  <img src={item.image} alt={`Slider ${index + 1}`} />
                  <div className='content'>
                    <Typography style = {{fontFamily : "Arial", fontSize : "1.5rem"}}>{item.date}</Typography>
                    <Typography variant='p' style = {{fontFamily : "Arial", fontSize : "0.7rem" ,color : 'white'}}>{item.title}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography style={{textAlign : "center", letterSpacing: "2px", color : "White", fontFamily : "Arial", fontSize : "2rem"}}>
                <LanguageIcon/> NEWSTREET NEWS
            </Typography>
        </Grid>
        </Grid>

      <Dialog open={dialogOpen} onClose={handleClose} >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography style={{ fontFamily : "Arial", fontSize : "2rem" ,fontWeight : "bold"}}>
          {dialogData ? dialogData.title : ''}
        </Typography>
        <Button onClick={handleClose} color="primary">
          <ClearIcon/>
        </Button>
      </DialogTitle>
        <DialogContent dividers>
          <img src={dialogData ? dialogData.image : ''} alt={dialogData ? dialogData.title : ''} style={{ width: '100%', margin: 'auto' }} />
          <Typography variant="p" gutterBottom style = {{fontFamily : "Arial", fontSize : "1.5rem"}}>
            {dialogData ? dialogData.description : ''}
          </Typography>
          <Typography variant="h6" color="textSecondary" style = {{fontFamily : "Arial", fontSize : "1.0rem", textAlign : "right"}}>
            {dialogData ? dialogData.date : ''}
          </Typography>
        </DialogContent>
        
      </Dialog>
        <Footer/>        
    </>
  )
}

export default newsContainer;