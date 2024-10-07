import React from 'react';
import { Drawer, IconButton, List, ListItem, Box, ListItemButton, ListItemText, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialUISwitch } from '../theme/theme';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TelegramIcon from '@mui/icons-material/Telegram';

import Stack from '@mui/material/Stack';

const CustomDrawer = ({ auth, open, toggleDrawer, user, isDarkMode, toggleTheme }) => {
  

  const DrawerList = (
    <Box sx={{ width: 320, height: '100%' }} role="presentation">
      <Divider />
      <ListItem disablePadding>
      <span style={{ margin: '24px 0 0 16px', fontSize: '16px', fontWeight: 'bold' }}>МЕНЮ</span>
      </ListItem>
      
      <List>
        <ListItem sx={{flexDirection: 'column', alignItems: 'flex-start'}}>
          <Link to="/" style={{ textDecoration: 'none', color: '#222' }} onClick={toggleDrawer(false)}>
            <ListItemButton>
              <ListItemText secondary='Главная' />
            </ListItemButton>
          </Link>
        
          <Link
            to="/about"
            style={{ textDecoration: 'none', color: '#222' }}
          >
            <ListItemButton>
              <ListItemText secondary="О программе" />
            </ListItemButton>
          </Link>
          <Link to="/" style={{ textDecoration: 'none', color: '#222' }} onClick={toggleDrawer(false)}>
            <ListItemButton>
              <ListItemText secondary='Контакты' />
            </ListItemButton>
          </Link>
        
        </ListItem>
        </List>
        <Divider/>
        <List>
        <ListItem>
        <Stack style={{ padding: '16px' }} direction="column" width={'max-content'}  spacing='16px'>
      <Button href="/sign-in" variant="outlined" startIcon={<AccountCircleIcon color="primary" fontSize="small" />}>
        Войти в личный кабинет
      </Button>
      <Button href="https://t.me/vladislav_fatikhov?text=Хочу%20доступ%20в%личный%20кабинет%20приложения" variant="outlined" startIcon={<TelegramIcon color="primary" fontSize="small" />}>
        Получить доступ
      </Button>
      </Stack>
        </ListItem>
      </List>
      <Divider/>

      <ListItem disablePadding>
      <span style={{ margin: '24px 0 0 16px', fontSize: '16px', fontWeight: 'bold' }}>НАСТРОЙКИ</span>
      </ListItem>
<List>
<ListItem>
<FormControlLabel
        checked={isDarkMode}
        onChange={toggleTheme}
        control={<MaterialUISwitch sx={{ marginLeft: '23px' }} defaultChecked />}
        label={isDarkMode ? 'Тёмная тема' : 'Светлая тема'}
      />
      </ListItem>
</List>
    </Box>
  );

  return ( 
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <IconButton
          color="inherit"
          aria-label="close drawer"
          onClick={toggleDrawer(false)}
          style={{ position: 'absolute', right: '8px', top: '8px', zIndex: 99 }}
          >
          <CloseIcon />
      </IconButton>
      {DrawerList}
    </Drawer> 
  );
};

export default CustomDrawer;
