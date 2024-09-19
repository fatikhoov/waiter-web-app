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

const drawerWidth = 220;

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
      {['О приложении'].map((text, index) => (
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
            primary='Личный кабинет'
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
      <Link to="https://t.me/vladislav_fatikhov/?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%20%D0%B2%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%C2%AB%D0%9E%D0%A4%D0%98%D0%9A%20%D0%92%20%D0%91%D0%90%D0%9B%D0%90%D0%9D%D0%A1%D0%95%C2%BB" style={{ textDecoration: 'none' }}> {/* Убираем подчеркивание ссылки */}
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
            primary='Получить доступ'
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
    <Divider />
  
    <FormControlLabel checked={isDarkMode} onChange={toggleTheme} control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />} label="Настройки" />  
  
  </Drawer>
  );
};

export default CustomDrawer;
