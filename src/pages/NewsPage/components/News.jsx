import React, { useState, useEffect } from 'react';
import './News.css';
import img2 from 'C:/Users/abhishek/OneDrive - New Street Technologies Pvt Ltd/Desktop/Images/news1.png';
import img1 from 'C:/Users/abhishek/OneDrive - New Street Technologies Pvt Ltd/Desktop/Images/news2.jpg';
import img3 from 'C:/Users/abhishek/OneDrive - New Street Technologies Pvt Ltd/Desktop/Images/news3.jpg';
import img4 from 'C:/Users/abhishek/OneDrive - New Street Technologies Pvt Ltd/Desktop/Images/news2.jpg';
import Footer from '../../Footer/Footer';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, Card, CardContent, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Paper } from '@mui/material';
import {styled} from '@mui/system';


const News = () => {

  const StyledCard = styled(Card)`
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s;
  `;

  const nextClick = () => {
    setItemActive((prevItemActive) => (prevItemActive + 1) % countItem);
  };

  const prevClick = () => {
    setItemActive((prevItemActive) => (prevItemActive - 1 + countItem) % countItem);
  };

  const thumbnailClick = (index) => {
    setDialogOpen(true);
    setDialogData(items[index]);
  };

  const [itemActive, setItemActive] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState(null);

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const items = [
    {
      image: img1,
      title: 'Slider 01',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img2,
      title: 'Slider 02',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img3,
      title: 'Slider 03',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img4,
      title: 'Slider 04',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img2,
      title: 'Slider 05',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img1,
      title: 'Slider 01',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img1,
      title: 'Slider 01',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img1,
      title: 'Slider 01',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img4,
      title: 'Slider 04',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img4,
      title: 'Slider 04',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
  ];

  const countItem = items.length;

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      nextClick();
    }, 5000);
    return () => clearInterval(refreshInterval);
  }, [itemActive]);

  return(
    <>
      <header>
        <nav>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Services</a>
          <a href='#'>Contact</a>
        </nav>
      </header>

      <Grid container justifyContent = "center">
        <Grid item xs = {12} sm = {12} md = {12} lg = {12} xl = {12}>
          <div className='slider'>
            <Grid container justifyContent="center">
              
            </Grid>
            <div className='controls'>
                <div className='control-left'>
                    <Button id = "prev" onClick={prevClick}><UndoOutlinedIcon/></Button>
                </div>
                <div className='control-right'>
                    <Button id = "next" onClick={nextClick}><RedoOutlinedIcon/></Button>
                </div>
            </div>
       
                 <div className='thumbnail'>
              {items.map ((item,index) => (
                <div
                  key={index}
                  className={`item ${index === itemActive ? 'active-centered' : ''}`}
                  onClick={() => thumbnailClick(index)}
                >
                  <img src={item.image} alt={`Slider ${index + 1}`}/>
                  <div className='date'>{item.date}</div>
                  <div className='content'>{item.title}</div>
                </div>
              ))}
            </div></div>


        </Grid>
      </Grid>
      
      {/* Dialog Box */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>{dialogData ? dialogData.title : ''}</DialogTitle>
        <DialogContent dividers>
          <img src={dialogData ? dialogData.image : ''} alt={dialogData ? dialogData.title : ''} style={{width: '100%', margin: 'auto'}} />
          <Typography variant="subtitle1" gutterBottom>
            {dialogData ? dialogData.description : ''}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Footer/>
    </>
  )
}

export default News;
