// WelcomePage.js
import FinancialReport from "../components/FinancialReport"; 

import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TelegramIcon from '@mui/icons-material/Telegram';
import Stack from '@mui/material/Stack';


const WelcomePage = ({ auth, user, isDarkMode }) => {
  return (
    <div className="App"> 
      { auth ? <FinancialReport auth={auth} user={user} isDarkMode={isDarkMode} />
      : (<>
        <h1>Добро пожаловать!</h1>
        <p>Здесь вы можете отслеживать свои доходы и управлять финансами.</p>
          
        <Stack direction="row" spacing={2}>
      <Button href="/sign-in" variant="contained" startIcon={<AccountCircleIcon color="secondary" fontSize="small" />}>
        Личый кабинет
      </Button>
      <Button href="/sign-up" variant="outlined" startIcon={<TelegramIcon color="primary" fontSize="small" />}>
        Получить доступ
      </Button>
    </Stack>
        </>)
    } 
      </div>
  );
};

export default WelcomePage;
