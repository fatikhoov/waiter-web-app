import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline'; 
import CustomAppBar from '../components/CustomAppBar';
import CustomDrawer from '../components/CustomDrawer';
 
import { AppProvider } from '@toolpad/core/AppProvider';
import { useDemoRouter } from '@toolpad/core/internals';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '../theme/theme';
import Paper from '@mui/material/Paper';
import { Outlet } from 'react-router-dom'; // Импортируем Outlet

export default function MiniDrawer({ auth, user, handleLogout, toggleTheme, isDarkMode }) {
  const theme = useTheme(isDarkMode); // Получаем объект темы в зависимости от режима
 
  const matches = useMediaQuery('(min-width:480px)');
  const NAVIGATION = [
    { segment: '', title: 'Главная' },
    { segment: 'sign-in', title: 'Вход' },
  ];
  
  const router = useDemoRouter('/sign-in');
  const [open, setOpen] = React.useState(false); 
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  }; 
  return (
    
    <AppProvider navigation={NAVIGATION} router={router} theme={theme}> 
      <CssBaseline />

      <CustomAppBar  open={open}  handleDrawerOpen={handleDrawerOpen} handleLogout={handleLogout} auth={auth}  user={user}  isDarkMode={isDarkMode}  toggleTheme={toggleTheme}  />
      {matches && <CustomDrawer  open={open}  handleDrawerClose={handleDrawerClose} auth={auth}  user={user}  isDarkMode={isDarkMode}  toggleTheme={toggleTheme}  />}
      
      <Box component="main" sx={{ flexGrow: 1 }} style={{ margin: '86px 0' }} > 
      <Paper sx={{ width: '100%' }}> 
        <Outlet />
      </Paper>  
    </Box>
    
    </AppProvider> 
  );
}