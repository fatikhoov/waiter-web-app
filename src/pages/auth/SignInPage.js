import { AppProvider, SignInPage } from '@toolpad/core';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from './brandingTheme';
import { useColorSchemeShim } from './ThemeContext'; 
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';

const providers = [
  { id: 'google', name: 'Google' },
  { id: 'credentials', name: 'Email and Password' },
];
// Кастомизация компонентов и текстов
const slotProps = {
  emailField: {
    variant: 'outlined',
    label: 'Почта',
    placeholder: 'Enter your email',
  },
  passwordField: {
    variant: 'outlined',
    label: 'Password',
    placeholder: 'Enter your password',
  },
  submitButton: {
    variant: 'contained',
    color: 'primary',
    loading: false,
    children: 'фыв Sign In',
  },
  forgotPasswordLink: {
    children: 'Forgot Password?',
    href: '#forgot-password',
  },
  signUpLink: {
    children: 'Don\'t have an account? Sign Up',
    href: '#sign-up',
  },
};

const slots = {
  emailField: TextField,
  passwordField: TextField,
  submitButton: LoadingButton,
  forgotPasswordLink: Link,
  signUpLink: Link,
};
  
const SignInPageComponent = ({ handleIsAuth }) => {

    const signIn = async (provider) => {
        try {
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(`Signed in with ${provider.name}`);
              handleIsAuth();
              resolve();
            }, 500);
          });
        } catch (error) {
          console.error('Error during sign-in:', error);
          // Здесь можно добавить дополнительную обработку ошибки, например, уведомление пользователю
        }
      };
      

  const { mode, systemMode } = useColorSchemeShim();
  const calculatedMode = mode === 'system' ? systemMode : mode || 'light';
  const theme = createTheme({
    ...getDesignTokens(calculatedMode),
    palette: {
      mode: calculatedMode,
    },
  }); 


  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={slotProps}
        slots={slots}
      />
    </AppProvider>
  );
};

export default SignInPageComponent;
