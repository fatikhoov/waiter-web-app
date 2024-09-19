// components/CustomAppBar.js
import React from 'react';
import { Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountSlots from './AccountSlots'

import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material';

const drawerWidth = 320;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CustomAppBar = ({ open, handleLogout, handleDrawerOpen, auth, user, isDarkMode, toggleTheme  }) => {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[open && { display: 'none' }]}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          ОФИК В БАЛАНСЕ
        </Typography>
        {auth && (
          <AccountSlots
            auth={auth}
            user={user}
            handleLogout={handleLogout}
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
