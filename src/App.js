import { useState } from 'react';
import './App.css';
import AuthPage from "./pages/auth/auth";

function App() {
  const [isAuth, setIsAuth] = useState(true) 
  const handleIsAuth = () => {
    setIsAuth(false)
  }

  return (
    <div className="App">
      <header className="App-header app-container">
        { 
          isAuth 
          ? <div className="header-auth">
            <p className="header-auth-title">Вход в программу</p>
          </div>
          : <div>
            <div className="header-profile"> 
              <p>Сыроварня Митино</p>
              <p>Иванова Иванна Ивановна</p>
              <p>Баланс 500.000 &#8381;</p>
            </div>
            <div className="burger"></div>
          </div>
        }
      </header>

    { 
      isAuth 
      ? <AuthPage onClick={handleIsAuth}>
          Войти!
      </AuthPage>
      : <main className="App-main app-container">
        
      <div className="burger"></div> 

      <p>Подробный отчет по доходам</p>

        <div className="main-financial-wrapper">
          <div className="main-financial-state">
            <p className="main-financial-state-titles"><span>Оклад</span>  <span>2.000 &#8381;</span> <span>&equiv;</span></p>
            <p className="main-financial-state-titles"><span>Чаевые</span> <span>7.000 &#8381;</span> <span>&equiv;</span></p>
            <p className="main-financial-state-titles"><span>% с продаж</span> <span>5.000 &#8381;</span> <span>&equiv;</span></p>
          </div>
        </div>

        <p>Графики</p>

        <button className="main-add-working-shift">
          Ввести смену
        </button>
      </main> 
    }

      <footer className="App-footer app-container">
      <p>Контакты</p>
      <p>Подписаться</p>
      <p>Соц. сети</p>
      </footer>

    </div>
  );
}

export default App;
