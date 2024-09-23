import React from 'react';
import { Drawer, IconButton, List, ListItem, Box, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialUISwitch } from '../theme/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';


const CustomDrawer = ({ auth, open, toggleDrawer, user, isDarkMode, toggleTheme }) => {
 
  const isMobile = useMediaQuery('(min-width:600px)')

  const DrawerList = (
    <Box
    sx={{ width: 320 }}
    role="presentation">
          <Divider />
      <ListItem>
      <span style={{ margin: '8px 0 0 16px', fontSize: '16px', fontWeight: 'bold' }}>МЕНЮ</span>
    </ListItem>
      <List>
        {['Главная', 'О приложении', 'Вход в ЛК', 'Получить доступ'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
           {isMobile && <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}


        <ListItem disablePadding>
          <Link to="/sign-in" style={{ textDecoration: 'none' }} onClick={toggleDrawer(false)}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Личный кабинет" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            to="https://t.me/vladislav_fatikhov/?text=..."
            style={{ textDecoration: 'none' }}
          >
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Получить доступ" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
     {/*  <Divider /> */}
      <ListItem>
      <span style={{ marginLeft: '16px', fontSize: '16px', fontWeight: 'bold' }}>НАСТРОЙКИ</span>
      </ListItem>
      <FormControlLabel
        checked={isDarkMode}
        onChange={toggleTheme}
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label={isDarkMode ? 'Светлая тема' : 'Темная тема'}
      />
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
