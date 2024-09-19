import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline'; 
import CustomAppBar from '../components/CustomAppBar';
import CustomDrawer from '../components/CustomDrawer';
 
import { Outlet } from 'react-router-dom'; // Импортируем Outlet

export default function MiniDrawer({ auth, user, handleLogout, toggleTheme, isDarkMode }) {
 
  const [open, setOpen] = React.useState(false); 
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  }; 
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <CustomAppBar  open={open}  handleDrawerOpen={handleDrawerOpen} handleLogout={handleLogout} auth={auth}  user={user}  isDarkMode={isDarkMode}  toggleTheme={toggleTheme}  />
      <CustomDrawer  open={open}  handleDrawerClose={handleDrawerClose} auth={auth}  user={user}  isDarkMode={isDarkMode}  toggleTheme={toggleTheme}  />
      
      <Box component="main" sx={{ flexGrow: 1 }} style={{ margin: '86px 0' }} >
        <Outlet />
      </Box>
    </Box>
  );
}