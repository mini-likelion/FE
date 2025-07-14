import './assets/css/styles.module.css';
import Header from './components/header/Header';
import MainPage from './pages/mainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import DetailedPage from './pages/detailedPage/DetailedPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/movie/:id" element={<DetailedPage />} />
      </Routes>
    </>
  );
}

export default App;
