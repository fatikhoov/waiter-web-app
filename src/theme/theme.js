// src/theme/theme.js
import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

// Функция для создания темы в зависимости от режима
const theme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#001e3c', // Капучино
    },
    secondary: {
      main: '#F7F5F2', // Сливочный белый
    },
    background: {
      default: '#fff', // Пудра F0E4D7 / Серый бежевый D8D2CB
      paper: '#ccc',   // Серый
    },
    text: {
      primary: '#3A3A3A', // Основной цвет текста
      secondary: '#6E6E6E', // Вторичный цвет текста
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  }, 
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});
 
// Хук для управления темой
export const useTheme = (isDarkMode) => {
  return useMemo(() => theme(isDarkMode ? 'dark' : 'light'), [isDarkMode]);
};

export default theme;
