import { AppBar, Toolbar, IconButton, Button, useMediaQuery, styled, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../../../theme';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(to right, rgba(244, 67, 54, 0.8), rgba(0, 0, 0, 0.8))`, 
  opacity: 0.8,
  }));


const Toolbar1 = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between', // Distribute content evenly
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main, // Set background color
  color: theme.palette.getContrastText(theme.palette.primary.main),
  background: `linear-gradient(to right, ${theme.palette.error.main}, ${theme.palette.common.black})`, 
  // Set contrasting text color
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2), // Add spacing between buttons
  padding: theme.spacing(2, 4), // Adjust padding for comfort
  borderRadius: theme.shape.borderRadius, // Maintain rounded corners
  fontWeight: 'bold', // Emphasize button text
  textTransform: 'uppercase', // Convert text to uppercase for a bolder look
  '&:hover': {
    boxShadow: theme.shadows[1], // Add a subtle hover shadow
  },
}));

const StyledImageContainer = styled(Grid)(({ theme }) => ({
  position: 'relative', // Enable positioning for border and shadow
  overflow: 'hidden', // Prevent content overflowing the box
  borderRadius: theme.shape.borderRadius, // Match button roundness
  margin: theme.spacing(0.3), // Add margin for spacing
  display: 'flex', // Set display to flex for alignment
  justifyContent: 'center', // Center content horizontally
  alignItems: 'center', // Center content vertically

  // Border styles
  border: `1px solid ${theme.palette.secondary.main}`, // Red border

  // Shadow styles
  boxShadow: theme.shadows[1], // Add a more prominent shadow
}));

const NavBar = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledAppBar position="fixed">
      <Toolbar1>
        <Grid container alignItems="center"> {/* Grid container for alignment */}
          <Grid item xs={2}> {/* Logo column */}
            <StyledImageContainer>
              <IconButton edge="start" color="inherit" aria-label="menu">
                {/* Replace the logo image URL */}
                <img src="https://newstreettech.com/wp-content/uploads/2020/07/New-Street-Tech-footer-logo.png" alt="logo" style={{ width: '190px' }} />
              </IconButton>
            </StyledImageContainer>
          </Grid>
          <Grid item xs={10}> {/* Buttons column */}
            {isMobile ? (
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <StyledButton color="inherit" >Home</StyledButton>
                <StyledButton color="inherit">Products</StyledButton>
                <StyledButton color="inherit">News</StyledButton>
                <StyledButton color="inherit">Careers</StyledButton>
                <StyledButton color="inherit">Contact Us</StyledButton>
              </>
            )}
          </Grid>
        </Grid>
      </Toolbar1>
    </StyledAppBar>
  );
};

export default NavBar;
