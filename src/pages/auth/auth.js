import * as React from 'react';
import { AppProvider, SignInPage } from '@toolpad/core';
import { createTheme } from '@mui/material/styles';
import { useColorSchemeShim } from './ThemeContext';
import { getDesignTokens } from './brandingTheme';

const providers = [
  { id: 'google', name: 'Google' },
  { id: 'credentials', name: 'Email and Password' },
];

// Фиктивная функция входа, которая вызывает переданную функцию handleIsAuth
const signIn = async (provider, handleIsAuth) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      handleIsAuth();  // Вызываем функцию, которая изменяет состояние авторизации
      resolve();
    }, 500);
  });
  return promise;
};

export default function ThemeSignInPage({ handleIsAuth }) {
  const { mode, systemMode } = useColorSchemeShim();
  const calculatedMode = (mode === 'system' ? systemMode : mode) ?? 'light';
  const brandingDesignTokens = getDesignTokens(calculatedMode);

  const THEME = createTheme({
    ...brandingDesignTokens,
    palette: {
      ...brandingDesignTokens.palette,
      mode: calculatedMode,
    },
  });

  // Передаем функцию handleIsAuth в signIn
  const handleSignIn = (provider) => {
    signIn(provider, handleIsAuth);
  };

  return (
    <AppProvider theme={THEME}>
      <SignInPage signIn={handleSignIn} providers={providers} />
    </AppProvider>
  );
}
