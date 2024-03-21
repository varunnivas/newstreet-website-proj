
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
import NavBar from '../LandingPage/container/Navbar';
 // Import the ProductCardContainer component
import ResusableProd from './ResusableProd';

const ProductCard = ({ title, description, demoUrl }) => {
  const handleClick = () => {
    if (demoUrl) {
      window.location.href = demoUrl;
    } else {
      // Fallback URL in case demoUrl is not provided
      window.location.href = "https://www.youtube.com/watch?v=M9xfb2ZfA-Q"; // Replace with your fallback URL
    }
  };

  return (
    <div style={{ background: 'black', overflowX: 'hidden' }}>
      <NavBar />
      <Typography variant='h1' sx={{fontSize:'4rem', alignContent:'centre',marginTop:"10vh", marginLeft:'6px'}}> Products</Typography>
      <ResusableProd handleCLick = {handleClick} title = {title} />

      <ResusableProd handleCLick = {handleClick} title = {title} />

      <ResusableProd handleCLick = {handleClick} title = {title} />

    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  demoUrl: PropTypes.string,
};

export default ProductCard;
