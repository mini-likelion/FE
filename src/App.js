import './assets/css/styles.module.css';
import Header from './components/header/Header';
import MainPage from './pages/mainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import LoginContextProvider from './context/LoginContextProvider';

function App() {
  return (
    <>
      <LoginContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </LoginContextProvider>
    </>
  );
}

export default App;
