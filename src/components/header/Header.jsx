import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header__wrapper}>
      <div className={styles.header__icon}>
        <p>누누티비</p>
      </div>
      <nav className={styles.header__loginBox}>
        <Link to="/login">
          <button className={styles.header__login}>로그인</button>
        </Link>
        <Link to="/register">
          <button className={styles.header__register}>회원가입</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
