// src/theme/theme.js
import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

// Функция для создания темы в зависимости от режима
const theme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#C4A58E', // Капучино
    },
    secondary: {
      main: '#D8D2CB', // Серый бежевый
    },
    background: {
      default: '#F0E4D7', // Пудра
      paper: '#F7F5F2',   // Сливочный белый
    },
    text: {
      primary: '#3A3A3A', // Основной цвет текста
      secondary: '#6E6E6E', // Вторичный цвет текста
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

// Хук для управления темой
export const useTheme = (isDarkMode) => {
  return useMemo(() => theme(isDarkMode ? 'dark' : 'light'), [isDarkMode]);
};

export default theme;
