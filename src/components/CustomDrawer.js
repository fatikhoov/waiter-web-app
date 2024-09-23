import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialUISwitch } from '../theme/theme';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';

const drawerWidth = 320;

const CustomDrawer = ({ auth, open, toggleDrawer, user, isDarkMode, toggleTheme }) => {
  const theme = useTheme(isDarkMode);
 

  const DrawerList = (
    <header theme={theme} sx={{ width: drawerWidth }} role="presentation">
      <div style={{ padding: '16px', display: 'flex', alignItems: 'center' }}>
        <img src='/images/logo-signin.svg' alt='logo' style={{ height: '42px' }} />
        <span style={{ marginLeft: '16px', fontSize: '1.25rem', fontWeight: 'bold' }}>ОФИК В БАЛАНСЕ</span>
      </div>
      <Divider />
      <List>
        {['Главная', 'О приложении'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
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
      <Divider />
      <FormControlLabel
        checked={isDarkMode}
        onChange={toggleTheme}
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label="Настройки"
      />
    </header>
  );

  return ( 
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer> 
  );
};

export default CustomDrawer;
