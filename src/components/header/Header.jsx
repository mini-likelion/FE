import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.css';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContextProvider';

const Header = () => {
  const location = useLocation();
  const { islogin } = useContext(LoginContext);

  const isDetail = /^\/movie\/\d+/.test(location.pathname);

  const showLogin = location.pathname !== '/register';
  const showRegister = location.pathname !== '/login';

  return (
    <header className={`${styles.header__wrapper} ${isDetail ? styles.header__wrapper_detail : ''}`}>
      <div className={`${styles.header__icon} ${isDetail ? styles.header__icon_detail : ''}`}>
        <Link to="/">
          <p>누누티비</p>
        </Link>
      </div>

      <nav className={styles.header__loginBox}>
        {showRegister && (
          <Link to="/login">
            <button className={`${styles.header__login} ${isDetail ? styles.header__login_detail : ''}`}>로그인</button>
          </Link>
        )}
        {showLogin && (
          <Link to="/register">
            <button className={`${styles.header__register} ${isDetail ? styles.header__register_detail : ''}`}>
              회원가입
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
