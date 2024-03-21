
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
import NavBar from '../LandingPage/container/Navbar';
import DuplicateProductCard from './ProductCardContainer'; // Import the ProductCardContainer component

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
      <Typography variant='h1' sx={{fontSize:'4rem', alignContent:'centre'} }> Products</Typography>
      <Card sx={{ borderRadius: '10px', background: 'linear-gradient(to left, hsl(0, 19%, 2%), hsl(0, 60%, 30%))', marginBottom: '10px', marginTop:'140px' , display: 'flex', alignItems: 'center', width: '100%' }}>
        <CardMedia
          component="img"
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={title}
          sx={{ width: '50%', height: '100%', objectFit: 'cover', borderRadius: '10px 0 0 10px' }}
        />
        <CardContent sx={{ padding: '20px', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h1" component="div" sx={{ fontWeight: 'bold', color: 'white', textUnderlineOffset: '2px', marginBottom: '30px', lineHeight: '30px', fontSize: '1.8rem' }}>
            Banking on MiFix
          </Typography>
          <Typography variant="body1" component="div" sx={{ color: 'white', marginBottom: '20px', fontSize: '0.9rem', maxWidth: '100%' }}>
            MiFiX connects banks, NBFCs, and other financial institutions seamlessly with customers, business correspondents, DSAs, field officers, branches, and 3rd party partners. <br />
            It facilitates the origination process, complete KYC, underwriting of loans, documentation completion, account opening, payment disbursement, collections management, reporting requirements, and billing and settlement. <br />
            With MiFiX, financial institutions experience proven efficiency gains of over 500%, streamlining operations and enhancing customer experiences. Experience the transformative power of MiFiX in optimizing financial interactions and driving greater efficiency across the financial ecosystem.
          </Typography>
          <Button onClick={handleClick} variant="contained" sx={{ alignSelf: 'center' }}>
            Click here for the Demo
          </Button>

        </CardContent>
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  demoUrl: PropTypes.string,
};

export default ProductCard;
