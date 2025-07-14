import './assets/css/styles.module.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './pages/mainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
