import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline'; 
import CustomAppBar from '../components/CustomAppBar';
import CustomDrawer from '../components/CustomDrawer';
import { AppProvider } from '@toolpad/core/AppProvider';
import { useDemoRouter } from '@toolpad/core/internals';
import { useTheme } from '../theme/theme';
import Paper from '@mui/material/Paper';
import { Outlet } from 'react-router-dom'; // Импортируем Outlet

export default function MiniDrawer({ auth, user, handleLogout, toggleTheme, isDarkMode }) {
  const theme = useTheme(isDarkMode); // Получаем объект темы в зависимости от режима
  const NAVIGATION = [
    { segment: '', title: 'Главная' },
    { segment: 'sign-in', title: 'Вход' },
  ];
  const router = useDemoRouter('/sign-in');
  const [open, setOpen] = React.useState(false); 
 
 
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    
    <AppProvider navigation={NAVIGATION} router={router} theme={theme}> 
      <CssBaseline />

      <CustomAppBar  open={open}  toggleDrawer={toggleDrawer} handleLogout={handleLogout} auth={auth}  user={user}  isDarkMode={isDarkMode}  toggleTheme={toggleTheme}  />
      <CustomDrawer  open={open}  toggleDrawer={toggleDrawer} auth={auth}  user={user}  isDarkMode={isDarkMode}  toggleTheme={toggleTheme}  />
      
      <Box component="main" sx={{ flexGrow: 1 }} style={{ margin: '42px 0' }} > 
      <Paper sx={{ width: '100%' }}> 
        <Outlet />
      </Paper>  
    </Box>
    
    </AppProvider> 
  );
}