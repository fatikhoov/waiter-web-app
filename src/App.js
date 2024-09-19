import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MiniDrawer from './modules/Drawer';

import { useState } from 'react';
import './App.css';
import FinancialReport from './components/FinancialReport'
import WelcomePage from './pages/WelcomePage'
import SignInPage from "./pages/auth/SignInPage"
import { ThemeProvider } from '@mui/material/styles';
 
import { useTheme } from './theme/theme'; // Импорт хука для управления темой

// Изначальное состояние пользователя
const initialUserState = {
  me: { name: '', surname: '', phone: '', email: '' },
  restaurant: { name: '', address: '' },
  finances: { balance: null, salary: null, tips: null, salesPercentage: null },
  workSchedule: { shifts: [] }
};

function App() {
  const [auth, setIsAuth] = useState(false); // Изначально пользователь не авторизован
  const [user, setUser] = useState(initialUserState);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useTheme(isDarkMode);
  // Функция входа
  const handleIsAuth = () => {
    setIsAuth(true);
    updateUserProfile({ me: { name: 'Иван', surname: 'Иванов', email: 'vl.fatikhov@gmail.com' } });
    updateFinances({ salary: 2000, tips: 500, balance: 15000 });
  };
  // Функция выхода
  const handleLogout = () => {
    setIsAuth(false);
    setUser(initialUserState); // Сброс данных
  };
  // Функция переключения темы
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  // Обновление данных профиля
  const updateUserProfile = (newData) => {
    setUser(prevState => ({
      ...prevState,
      me: {
        ...prevState.me,
        ...newData.me
      }
    }));
  };
  // Обновление финансовых данных
  const updateFinances = (newFinances) => {
    setUser(prevState => ({
      ...prevState,
      finances: {
        ...prevState.finances,
        ...newFinances
      }
    }));
  };

 
  return (
    <ThemeProvider theme={theme}>
      <Router> 
        <div className="App"> 
         <Routes> 
          <Route path="/" element={<MiniDrawer auth={auth} user={user} isDarkMode={isDarkMode} handleLogout={handleLogout} handleIsAuth={handleIsAuth} toggleTheme={toggleTheme} />}>
            <Route index element={<WelcomePage auth={auth} user={user} isDarkMode={isDarkMode} />} /> {/* Главная страница */}
            <Route path="lk" element={<FinancialReport  user={user} />} />
            <Route path="sign-in" element={<SignInPage  auth={auth} user={user} isDarkMode={isDarkMode} handleLogout={handleLogout} handleIsAuth={handleIsAuth} toggleTheme={toggleTheme} />} /> 
          </Route>
         </Routes>          
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
