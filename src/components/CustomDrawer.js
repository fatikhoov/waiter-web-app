// components/CustomDrawer.js
import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail'; 
import { MaterialUISwitch } from '../theme/theme'
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Link } from 'react-router-dom';

const drawerWidth = 320;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const CustomDrawer = ({ open, handleDrawerClose, auth, user, isDarkMode, toggleTheme }) => {
    const theme = useTheme();
  return (
    <Drawer variant="permanent" open={open}>
    
    <DrawerHeader sx={{ justifyContent: 'space-between' }}>
      <Link to="/" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px', textDecoration: 'none' }}>
        <img
          src='/images/logo-signin.svg'
          alt='logo'
          style={{ height: '42px', opacity: open ? 1 : 0 }} // Убираем sx и используем inline стили
        />
        <ListItemText
          primary='Главная'
          sx={{
            opacity: open ? 1 : 0, // Убираем sx и используем inline стили
          }}
        />
      </Link>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
  
    <Divider />
  
    <List>
      {['О приложении', 'Запросить доступ'].map((text, index) => (
        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={[
              {
                minHeight: 48,
                px: 2.5,
              },
              open
                ? {
                    justifyContent: 'initial',
                  }
                : {
                    justifyContent: 'center',
                  },
            ]}
          >
            <ListItemIcon
              sx={[
                {
                  minWidth: 0,
                  justifyContent: 'center',
                },
                open
                  ? {
                      mr: 3,
                    }
                  : {
                      mr: 'auto',
                    },
              ]}
            >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText
              primary={text}
              sx={[
                open
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                    },
              ]}
            />
          </ListItemButton>
        </ListItem>
      ))} 
    </List> 
    
    <Divider />
     
    <List>
    <ListItem disablePadding sx={{ display: 'block' }}>
      <Link to="/sign-in" style={{ textDecoration: 'none' }}> {/* Убираем подчеркивание ссылки */}
        <ListItemButton
          sx={[
            {
              minHeight: 48,
              px: 2.5,
            },
            open
              ? {
                  justifyContent: 'initial',
                }
              : {
                  justifyContent: 'center',
                },
          ]}
        >
          <ListItemIcon
            sx={[
              {
                minWidth: 0,
                justifyContent: 'center',
              },
              open
                ? {
                    mr: 3,
                  }
                : {
                    mr: 'auto',
                  },
            ]}
          >
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            primary='Вход в личный кабинет'
            sx={[
              open
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                  },
            ]}
          />
        </ListItemButton>
      </Link>
    </ListItem>  
    </List>
    
    <FormControlLabel checked={isDarkMode} onChange={toggleTheme} control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />} label="Настройка цвета" />  
  
  </Drawer>
  );
};

export default CustomDrawer;
