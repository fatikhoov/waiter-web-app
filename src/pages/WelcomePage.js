// WelcomePage.js
import FinancialReport from "../components/FinancialReport"; 

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TelegramIcon from '@mui/icons-material/Telegram';



const WelcomePage = ({ auth, user, isDarkMode }) => {
  return (
    <> 
      { auth ? <FinancialReport auth={auth} user={user} isDarkMode={isDarkMode} />
      : (<>
        <h1>Добро пожаловать!</h1>
        <p>Здесь вы можете отслеживать свои доходы и управлять финансами.</p>
          
        <Stack style={{ alignSelf: 'center' }} direction="column" width={'max-content'} spacing={'16px'}>
      <Button href="/sign-in" variant="contained" startIcon={<AccountCircleIcon color="white" fontSize="small" />}>
        Войти в личый кабинет
      </Button>
      <Button href="https://t.me/vladislav_fatikhov?text=Хочу%20доступ%20в%личный%20кабинет%20приложения" variant="outlined" startIcon={<TelegramIcon color="primary" fontSize="small" />}>
        Получить доступ
      </Button>
    </Stack>
        </>)
    } 
      </>
  );
};

export default WelcomePage;
