// WelcomePage.js
import { Link } from 'react-router-dom';
import FinancialReport from "../components/FinancialReport";
import MiniDrawer from '../modules/Drawer';

const WelcomePage = ({ auth, user, isDarkMode }) => {
  return (
    <div className="App">
      <MiniDrawer/>
      { auth ? <FinancialReport auth={auth} user={user} isDarkMode={isDarkMode} />
      : (<div>
        <h1>Добро пожаловать в приложение!</h1>
        <p>Здесь вы можете отслеживать свои доходы и управлять финансами.</p>
        <Link to="/sign-in">
          <button>Войти</button>
        </Link>
        <Link to="/sign-up">
          <button>Зарегистрироваться</button>
        </Link>
        </div>)
    } 
      </div>
  );
};

export default WelcomePage;
