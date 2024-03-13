import React, { useState, useEffect, useRef } from 'react';
import './News.css';
import img2 from 'C:/Users/abhishek/OneDrive - New Street Technologies Pvt Ltd/Desktop/Images/news1.png';
import img1 from 'C:/Users/abhishek/OneDrive - New Street Technologies Pvt Ltd/Desktop/Images/news2.jpg';
import img3 from 'C:/Users/abhishek/OneDrive - New Street Technologies Pvt Ltd/Desktop/Images/news3.jpg';
import img4 from 'C:/Users/abhishek/OneDrive - New Street Technologies Pvt Ltd/Desktop/Images/news2.jpg';
import Footer from '../../Footer/Footer';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const News = () => {
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

  const fetchItems = async () => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT');
      const data = await response.json();
      setItems(data); // Assuming the API returns an array of items similar to the current structure
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };  

  const items = [
    {
      image: img1,
      title: 'Slider 01',
      date: '02-04-2023',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img2,
      title: 'Slider 02',
      date: '02-04-2023',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img1,
      title: 'Slider 01',
      date: '02-04-2023',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img3,
      title: 'Slider 03',
      date: '02-04-2023',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img4,
      title: 'Slider 04',
      date: '02-04-2023',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
  ];

  return (
    <>
      <header>
        <nav>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Services</a>
          <a href='#'>Contact</a>
        </nav>
      </header>
      
      <Grid container justifyContent="center">
        <Typography variant="h1" component="h1" style={{letterSpacing : "2px"}}>
          NEWSTREET  NEWS
        </Typography>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant="h1" component="h1">
            <br/>
            <LanguageIcon/>
          </Typography>
        </Grid>
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
                    <Typography variant='h3'>{item.date}</Typography>
                    <Typography variant='h4'>{item.title}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>

      <Dialog open={dialogOpen} onClose={handleClose} >
        <DialogTitle><Typography variant='h2'>{dialogData ? dialogData.title : ''}</Typography></DialogTitle>
        <DialogContent dividers>
          <img src={dialogData ? dialogData.image : ''} alt={dialogData ? dialogData.title : ''} style={{ width: '100%', margin: 'auto' }} />
          <Typography variant="p" gutterBottom>
            {dialogData ? dialogData.description : ''}
          </Typography>
          <Typography variant="h6" color="textSecondary" style={{ textAlign: 'right' }}>
            {dialogData ? dialogData.date : ''}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* <Footer /> */}
    </>
  )
}

export default News;