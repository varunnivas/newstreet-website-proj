import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ProductCard from './Products';
import NavBar from '../LandingPage/container/Navbar'; // Import the original ProductCard component

const DuplicateProductCard = ({ title, description, demoUrl }) => {
  return (
    <div style={{ background: 'black', overflowX: 'hidden' }}>
      {/* Add any additional content or styling here */}
      <NavBar />
      <Typography variant='h1' sx={{ fontSize: '4rem', alignContent: 'centre', color: 'white', textAlign: 'center', paddingTop: '20px' }}> Products</Typography>
      {/* Integrate the provided content */}
      <Typography variant='body1' sx={{ color: 'white', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        FAR (Finance Against Remittances) – A rejuvenating innovation delivered via MiFiX in the X-Border Remittances Industry addressing the financial services needs of 250 + million migrant workers and their dependents, across 200+ remittance corridors globally. <br />
        <br />
        MiFiX connects: <br />
        Host Country: Remitters, Money Transfer Operators/Networks, Banks, Payment Companies, TELCOs, Other FIs <br />
        with Home Country: Beneficiary Banks, NBFCs, Payment Networks, 3rd Party Partners <br />
        to manage: <br />
        X-Border KYC, X-Border Data Synch, Underwriting, Documentation, Account Opening, Remittances, Reconciliation, Reporting, Billing & Settlement <br />
        <br />
        Click here to see the FAR Impact
      </Typography>
      <ProductCard title={title} description={description} demoUrl={demoUrl} />


    </div>
  );
};

DuplicateProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  demoUrl: PropTypes.string,
};

export default DuplicateProductCard;
