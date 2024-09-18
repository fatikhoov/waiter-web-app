import { AppProvider, SignInPage } from '@toolpad/core'; 
import { useTheme } from '../../theme/theme'; // Импорт хука для управления темой
import { Box } from '@mui/material';
import { BRANDING, providers, slotProps, slots } from './ThemeContext';  
 
  
const SignInPageComponent = ({  handleIsAuth, isDarkMode }) => {
  const theme = useTheme(isDarkMode); // Получаем объект темы в зависимости от режима

    const signIn = async (provider) => {
        try {
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(`Вход выполнен ${provider.name}`);
              handleIsAuth();
              resolve();
            }, 500);
          });
        } catch (error) {
          console.error('Error during sign-in:', error);
          // Здесь можно добавить дополнительную обработку ошибки, например, уведомление пользователю
        }
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
