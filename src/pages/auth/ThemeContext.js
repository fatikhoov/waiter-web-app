import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';

/* const useColorSchemeShim = () => ({ 
}) */

export const BRANDING = {
    logo: (
        <img
          src="/images/logo-signin.png"
          alt="logo"
          style={{ height: 80 }}
        />
      ),
  title: 'личный кабинет',  // Скрываем заголовок
  };

export const providers = [
    { id: 'google', name: 'Google' },
    { id: 'credentials', name: 'Email and Password' },
  ];

  // Кастомизация компонентов и текстов
export const slotProps = {
emailField: {
    variant: 'outlined',
    label: 'Почта',
    placeholder: 'Введите Ваш e-mail',
},
passwordField: {
    variant: 'outlined',
    label: 'Пароль',
    placeholder: 'Введите Ваш пароль',
},
submitButton: {
    variant: 'contained',
    color: 'primary',
    loading: false,
    children: 'ВОЙТИ',
},
forgotPasswordLink: {
    children: 'Забыли пароль?',
    href: '#forgot-password',
},
signUpLink: {
    children: 'Нет аккаунта? Регистрация',
    href: '#sign-up',
},
};
  
export const slots = {
emailField: TextField,
passwordField: TextField,
submitButton: LoadingButton,
forgotPasswordLink: Link,
signUpLink: Link, 
};

/* export default useColorSchemeShim */