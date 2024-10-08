import React from 'react';
import { Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountSlots from './AccountSlots'; 
import AppBar from '@mui/material/AppBar';
 

const CustomAppBar = ({ open, handleLogout, toggleDrawer, auth, user, isDarkMode, toggleTheme }) => {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
       {!auth && <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)} 
          edge="start" 
          >
          <MenuIcon />
        </IconButton>}
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          ОФИК В БАЛАНСЕ
        </Typography> 
         {auth && <AccountSlots
            auth={auth}
            user={user}
            handleLogout={handleLogout}
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
          /> }
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
