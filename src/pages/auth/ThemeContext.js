import * as React from 'react';
import TextField from '@mui/material/TextField'; 
import { 
    FormControl,
    InputLabel,
    OutlinedInput, 
    InputAdornment,
    Link,
    Button,
    IconButton,
  } from '@mui/material'; 
  
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const BRANDING = {
    logo: (
        <img
          src="/images/logo-signin.svg"
          alt="logo"
          style={{ height: 80 }}
        />
      ),
    title: '', // Скрываем заголовок
};

export const providers = [
    { id: 'google', name: 'Google' },
    { id: 'credentials', name: 'Email and Password' },
];

// Кастомная кнопка отправки (submit)
function CustomButton() {
    return (
      <Button
        type="submit"
        variant="contained"
        size="small"
        disableElevation
        fullWidth
        sx={{ my: 2 }} 
      >
        Войти
      </Button>
    );
  }

function CustomPasswordField(props) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
      <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
        <InputLabel size="small" htmlFor="outlined-adornment-password">
          {props.label || 'Пароль'}
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          size="small"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                size="small"
              >
                {showPassword ? <VisibilityOff fontSize="inherit" /> : <Visibility fontSize="inherit" />}
              </IconButton>
            </InputAdornment>
          }
          label={props.label || 'Пароль'}
          {...props} // Передаем остальные пропсы, которые могут быть нужны
        />
      </FormControl>
    );
}

// Кастомизация компонентов и текстов
export const slotProps = {
  emailField: {
    variant: 'outlined',
    label: 'Почта',
    placeholder: 'Введите Ваш e-mail',
    fullWidth: true, // Чтобы поле занимало всю ширину
    size: 'small', // Размер поля
  },
  passwordField: {
    variant: 'outlined',
    label: 'Пароль',
    placeholder: 'Введите Ваш пароль',
    fullWidth: true,
    size: 'small',
  },
  submitButton: {
    variant: 'contained',
    color: 'primary',
    loading: false, // Возможно, нужно установить флаг загрузки динамически
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
  passwordField: CustomPasswordField,
  submitButton: CustomButton,
  forgotPasswordLink: Link,
  signUpLink: Link,
};
