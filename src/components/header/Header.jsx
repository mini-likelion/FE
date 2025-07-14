import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header__wrapper}>
      <div className={styles.header__icon}>
        <p>미니해커톤</p>
      </div>
      <nav className={styles.header__loginBox}>
        <button className={styles.header__login}>로그인</button>
        <button className={styles.header__register}>회원가입</button>
      </nav>
    </header>
  );
};

export default Header;
