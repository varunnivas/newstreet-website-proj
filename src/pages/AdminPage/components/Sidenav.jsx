import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ListIcon from '@mui/icons-material/List';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { logout } from '../../LoginPage/redux/UserSlice';
import { useDispatch } from 'react-redux';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: 'white', // Set background color to red
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    backgroundColor: 'white', 
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login')
  };

  return (
<Box sx={{ display: 'flex' }}>
  <CssBaseline />
  <Drawer variant="permanent" open={open}>
    <Button
      variant="contained"
      color="secondary"
      onClick={() => {navigate("/home")}}
      style={{backgroundColor:'white'}}
      startIcon={<img src="https://newstreettech.com/wp-content/uploads/2020/07/New-Street-Tech-footer-logo.png" alt="New Street" />} // Replace "path_to_your_image" with the actual path to your image
    ></Button>
    <Divider />
    <List>
      <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/home")}}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <HomeIcon /> 
          </ListItemIcon>
          <ListItemText primary="DashBoard" sx={{ opacity: open ? 1 : 0, color: 'black' }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/products")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <InventoryIcon/>
                </ListItemIcon>
                <ListItemText primary="Products" sx={{ opacity: open ? 1 : 0, color: 'black' }} /> {/* Changed text color to black */}
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/news")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <NewspaperIcon /> 
                </ListItemIcon>
                <ListItemText primary="News" sx={{ opacity: open ? 1 : 0, color: 'black' }} /> {/* Changed text color to black */}
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/partner")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <ListIcon /> 
                </ListItemIcon>
                <ListItemText primary="Partners" sx={{ opacity: open ? 1 : 0, color: 'black' }} /> {/* Changed text color to black */}
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/contact")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <ContactPageIcon/>
                </ListItemIcon>
                <ListItemText primary="Queries" sx={{ opacity: open ? 1 : 0, color: 'black' }} /> 
              </ListItemButton>
            </ListItem>
      <Divider />
    <br/>
      <ListItem disablePadding sx={{ display: 'block' }} onClick={handleLogout}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <LogoutIcon/>
          </ListItemIcon>
          <ListItemText primary="Log Out" sx={{ opacity: open ? 1 : 0, color: 'black' }} />
        </ListItemButton>
      </ListItem>
    </List>
  </Drawer>
</Box>

  );
}
