import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; 
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Switch from '@mui/material/Switch'; 
import AccountSlots from './AccountSlots';

export default function MenuAppBar({ auth, handleIsAuth, handleLogout, user, toggleTheme, isDarkMode }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

   

  const handleMenuNav = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleClose = () => { 
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" >
      <Toolbar >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Switch
              checked={isDarkMode}
              onChange={toggleTheme}
              aria-label="theme switch"
            /> 
          </Box>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ОФИК БАЛАНС
          </Typography>
        
          
          {auth ? (
                <AccountSlots
                user={user}
                isAuth={auth} 
                handleLogout={handleLogout}
            />
            )
          : ( <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuNav}
          >
            <MenuIcon />
        </IconButton>)
          }
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
