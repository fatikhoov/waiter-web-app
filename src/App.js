import { useState } from 'react';
import './App.css';
import ThemeSignInPage from "./pages/auth/auth";

function App() {
  const [isAuth, setIsAuth] = useState(false); // Изначально пользователь не авторизован
  const [user, setUser] = useState(null);

  // Функция, которая меняет состояние авторизации
  const handleIsAuth = () => {
    setIsAuth(true);  // Пользователь авторизован
    setUser({ name: 'Иван Иванов', balance: 500000 }); // Фиктивный пользователь
  };

  return (
    <div className="App">
      <header className="App-header app-container">
        { 
          isAuth && user 
          ? <div className="header-profile"> 
              <p>Сыроварня Митино</p>
              <p>{user.name}</p>
              <p>Баланс {user.balance} &#8381;</p>
            </div>
          : <ThemeSignInPage handleIsAuth={handleIsAuth} />  // Передаем handleIsAuth в ThemeSignInPage
        }
      </header>

      { 
        isAuth 
        ? <main className="App-main app-container">
            <p>Подробный отчет по доходам</p>
            <div className="main-financial-wrapper">
              <div className="main-financial-state">
                <p className="main-financial-state-titles"><span>Оклад</span>  <span>2.000 &#8381;</span> <span>&equiv;</span></p>
                <p className="main-financial-state-titles"><span>Чаевые</span> <span>7.000 &#8381;</span> <span>&equiv;</span></p>
                <p className="main-financial-state-titles"><span>% с продаж</span> <span>5.000 &#8381;</span> <span>&equiv;</span></p>
              </div>
            </div>
            <button className="main-add-working-shift">
              Ввести смену
            </button>
          </main> 
        : null
      }

      <footer className="App-footer app-container">
        <p></p>
      </footer>
    </div>
  );
}

export default App;
