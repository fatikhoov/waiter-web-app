import { AppProvider, SignInPage } from '@toolpad/core'; 
import { useTheme } from '../../theme/theme'; // Импорт хука для управления темой
import { Box } from '@mui/material';
import { BRANDING, providers, slotProps, slots } from './ThemeContext';
import { useNavigate } from 'react-router-dom'; // Импортируем хук useNavigate  
 
  
const SignInPageComponent = ({  handleIsAuth, isDarkMode }) => {
  const theme = useTheme(isDarkMode); // Получаем объект темы в зависимости от режима
  const navigate = useNavigate(); // Получаем функцию для навигации

   
      const signIn = async (provider) => {
        const promise = new Promise((resolve) => {
          setTimeout(() => {
            console.log(`Sign in with ${provider.name}`);
            handleIsAuth();
            resolve();
            }, 500);
        });
        await promise; // Ожидаем завершения обещания
        navigate('/'); // Перенаправляем на главную страницу после авторизации
      };
 
  return (
    <AppProvider branding={BRANDING} theme={theme}>
      
        <Box
          sx={{
            width: '100%',
            maxWidth: 400, // максимальная ширина формы
            p: 3, // отступы
            boxShadow: 3, // тень
            borderRadius: 2, // скругленные углы
            backgroundColor: 'background.paper',
          }}
        >
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={slotProps}
        slots={slots}
      />
      </Box>

    </AppProvider>
  );
};

export default SignInPageComponent;
