import { AppBar, Toolbar, IconButton, Button, useMediaQuery, styled, Grid, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../../../theme';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(
  ({ theme }) => ({
    background: "black",
    opacity: 0.85,
    transition: theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: 'translateY(0)',
  })
);

const Toolbar1 = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'linear-gradient(to right, rgba(244, 67, 54, 0.8), rgba(0, 0, 0, 0.8))`',
  color: theme.palette.getContrastText(theme.palette.primary.main),
}));

const StyledButton = styled(Button)(({ theme, clicked }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.shape.borderRadius,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  color: clicked ? 'red' : 'inherit', // Change color to red when clicked
  '&:hover': {
    boxShadow: theme.shadows[1],
  },
}));

const NavBar = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(Array(5).fill(false)); // Initialize clicked state for each button

  const handleButtonClick = (index) => {
    const newClickedState = [...clicked];
    newClickedState[index] = true; // Set the clicked state of the button at index to true
    setClicked(newClickedState);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const trigger = useScrollTrigger({
    target: window,
    threshold: 0,
    disableHysteresis: true,
  });
  const shouldShowAppBar = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    if (clicked[0]) {
      handleScrollToTop();
    }
  }, [clicked]);

  return (
    <StyledAppBar>
      <Toolbar1>
        <IconButton edge="start" color="red" aria-label="menu">
          <img src="https://newstreettech.com/wp-content/uploads/2020/07/New-Street-Tech-footer-logo.png" alt="logo" style={{ width: isMobile ? '190px' : '150px', maxHeight: isMobile ? '150px' : 'auto' }} />
        </IconButton>

        <Grid item xs={isMobile ? 12 : 10}>
          {isMobile ? (
            <IconButton color="inherit" aria-label="open menu">
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <StyledButton color="inherit" onClick={() => { navigate('/'); handleButtonClick(0); }}>Home</StyledButton>
              <StyledButton color="inherit" onClick={() => { navigate('/products'); handleButtonClick(1); }}>Products</StyledButton>
              <StyledButton color="inherit" onClick={() => { handleButtonClick(2); }}>News</StyledButton>
              <StyledButton color="inherit" onClick={() => { handleButtonClick(3); }}>Careers</StyledButton>
              <StyledButton color="inherit" onClick={() => { handleButtonClick(4); }}>Contact Us</StyledButton>
            </>
          )}
        </Grid>
      </Toolbar1>
    </StyledAppBar>
  );
};

export default NavBar;
