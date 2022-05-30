import * as React from 'react';
import {NavLink} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import './Navbar.css';

function HideOnScroll({children}) {
  const trigger=useScrollTrigger()
  return(
    <Slide appear={false} direction={'down'} in={!trigger}>
      {children}
    </Slide>
  )
}
const pages = [
  {
    url:'/home',
    name:'Rólunk'}, 
  {
    url:'/kepzesek',
    name:'Képzések'
  },
  {
    url:'/tanfolyamok',
    name:'Tanfolyamok'
  },
  {
    url:'/contact',
    name:'Kapcsolat'
  }];
const settings = [{url:'/login',name:'Login'},{url:'/register',name:'Register'}];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <HideOnScroll>
    <AppBar >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <img className="logo" src="img/kecske.jpg" alt="KSZC" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user"  aria-controls="menu-appbar" aria-haspopup="true"
              onClick={handleOpenNavMenu} color="inherit"  ><MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{vertical: 'bottom',horizontal: 'left', }}
                    keepMounted transformOrigin={{vertical: 'top',horizontal: 'left', }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                    sx={{display: { xs: 'block', md: 'none' }, }} >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <img className="logo" src="img/kecske.jpg" alt="KSZC" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
               <NavLink key={page.name}  to={page.url}><Button   onClick={handleCloseNavMenu}sx={{ my: 2, color: 'white', display: 'block' }}>
               {page.name}
              </Button></NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <LoginIcon sx={{ color: 'white'}}/>
              </IconButton>
            </Tooltip>
            <Menu sx={{ mt: '45px' }} id="menu-appbar"  anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
                  keepMounted transformOrigin={{vertical: 'top',horizontal: 'right',}}
                  open={Boolean(anchorElUser)} onClose={handleCloseUserMenu} >
              {settings.map((obj) => (
                <NavLink key={obj.name}  to={obj.url}>
                  <MenuItem key={obj.url} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{obj.name}</Typography>
                  </MenuItem>
              </NavLink>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </HideOnScroll>
  );
};

