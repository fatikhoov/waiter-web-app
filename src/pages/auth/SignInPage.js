import { AppProvider, SignInPage } from '@toolpad/core'; 
import { useTheme } from '../../theme/theme'; // Импорт хука для управления темой
import { BRANDING, providers, slotProps, slots } from './ThemeContext';
import { useNavigate } from 'react-router-dom'; // Импортируем хук useNavigate
import './style.css' 
  
const SignInPageComponent = ({ auth, handleIsAuth, handleLogout, user, toggleTheme, isDarkMode }) => {
  const theme = useTheme(isDarkMode); // Получаем объект темы в зависимости от режима
  const navigate = useNavigate(); // Получаем функцию для навигации
 
      const signIn = async (provider) => {
        const promise = new Promise((resolve) => {
          setTimeout(() => { 
            handleIsAuth();  
            resolve();
            }, 500);
        });
        await promise; // Ожидаем завершения обещания
        navigate('/'); // Перенаправляем на главную страницу после авторизации
        alert(`Sign in with ${provider.name}`);
      };
 
  return (
    <AppProvider branding={BRANDING} theme={theme}>
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
