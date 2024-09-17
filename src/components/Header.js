import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Switch from '@mui/material/Switch';
import { useTheme, useMediaQuery } from '@mui/material';

export default function MenuAppBar({ auth, handleLogout, user, toggleTheme, isDarkMode }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuNav = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuNav}
          >
            <MenuIcon />
          </IconButton>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {auth ? `Welcome, ${user.me.name}` : 'ОФИК БАЛАНС'}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            aria-label="theme switch"
          />
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Box>
      </Toolbar>
      <Menu
        id="menu-nav"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleClose}
      >
        {/* Add navigation menu items here */}
        <MenuItem onClick={handleClose}>Dashboard</MenuItem>
      </Menu>
    </AppBar>
  );
}

MenuAppBar.propTypes = {
  auth: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
