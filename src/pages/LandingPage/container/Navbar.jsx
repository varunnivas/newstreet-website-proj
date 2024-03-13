import { AppBar, Toolbar, IconButton, Button, useMediaQuery, styled, Grid, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../../../theme';
import { useState } from 'react';

const StyledAppBar = styled(AppBar)(
  ({ theme }) => ({
    background: `linear-gradient(to right, rgba(244, 67, 54, 0.8), rgba(0, 0, 0, 0.8))`,
    opacity: 0.87,
    transition: theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform:'translateY(0)',
  })
);

const Toolbar1 = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
}));

const StyledButton = styled(Button)(({ theme, clicked }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.shape.borderRadius,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  '&:hover': {
    boxShadow: theme.shadows[1],
  },
}));

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
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

  return (
    <StyledAppBar maxWidth={false} position="fixed" style={{ transform: shouldShowAppBar ? 'translateY(0)' : 'translateY(-100%)' }}>
      <Toolbar1>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <img src="https://newstreettech.com/wp-content/uploads/2020/07/New-Street-Tech-footer-logo.png" alt="logo" style={{ width: isMobile ? '190px' : '150px', maxHeight: isMobile ? '150px' : 'auto' }} />
        </IconButton>

        <Grid item xs={isMobile ? 12 : 10}>
          {isMobile ? (
            <IconButton color="inherit" aria-label="open menu">
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <StyledButton color="inherit" onClick={handleClick}>Home</StyledButton>
              <StyledButton color="inherit" onClick={handleClick}>Products</StyledButton>
              <StyledButton color="inherit"onClick={handleClick}>News</StyledButton>
              <StyledButton color="inherit"onClick={handleClick} >Careers</StyledButton>
              <StyledButton color="inherit" onClick={handleClick}>Contact Us</StyledButton>
            </>
          )}
        </Grid>
      </Toolbar1>
    </StyledAppBar>
  );
};

export default NavBar;
