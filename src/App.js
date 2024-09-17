import { useState, useMemo } from 'react';
import './App.css';
import SignInPage from "./pages/auth/SignInPage";
import MenuAppBar from "./components/Header"; // Импортируем Header
import FinancialReport from "./components/FinancialReport";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

  const theme = useMemo(() => createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  }), [isDarkMode]);

  // Функция входа
  const handleIsAuth = () => {
    setIsAuth(true);
    updateUserProfile({ me: { name: 'Иван', surname: 'Иванов' } });
    updateFinances({ salary: 2000, tips: 500 });
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
      <div className="App">
        <MenuAppBar 
          auth={isAuth} // Передаем состояние авторизации
          handleLogout={handleLogout} // Передаем функцию выхода
          user={user} // Передаем данные пользователя
          toggleTheme={toggleTheme} // Передаем функцию переключения темы
          isDarkMode={isDarkMode} // Передаем состояние темы
        />

        {isAuth ? (
          <main className="App-main app-container">
            <FinancialReport user={user} />
            <button className="main-add-working-shift">Ввести смену</button>
          </main>
        ) : (
          <SignInPage handleIsAuth={handleIsAuth} />
        )}

        <footer className="App-footer app-container">
          <p></p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
