import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage'; // Создайте этот компонент 

import { useState } from 'react';
import './App.css';
import SignInPage from "./pages/auth/SignInPage"
import MenuAppBar from "./components/Header"; // Импортируем Header
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
  const [isAuth, setIsAuth] = useState(false); // Изначально пользователь не авторизован
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
        <MenuAppBar 
          auth={isAuth} // Передаем состояние авторизации
          handleLogout={handleLogout} // Передаем функцию выхода
          handleIsAuth={handleIsAuth}
          user={user} // Передаем данные пользователя
          toggleTheme={toggleTheme} // Передаем функцию переключения темы
          isDarkMode={isDarkMode} // Передаем состояние темы
        />

          <Routes>
            <Route path="/" 
            element={<WelcomePage auth={isAuth} user={user} isDarkMode={isDarkMode} />} /> 
            <Route 
              path="/sign-in" 
              element={<SignInPage 
              handleIsAuth={handleIsAuth} 
              isDarkMode={isDarkMode} 
            />} />
            </Routes>          
      </div></Router>
    </ThemeProvider>
  );
}

export default App;
