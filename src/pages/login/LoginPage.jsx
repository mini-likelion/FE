import styles from './loginPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.login__container}>
      <div className={styles.login__whole__wrapper}>
        <h1 className={styles.login__title}>로그인</h1>
        <div className={styles.login__wrapper}>
          <form className={styles.login__form} onSubmit={handleLogin}>
            <div className={styles.login__form__1}>
              <label htmlFor="login-id" className={styles.login__label}>
                아이디
              </label>
              <input
                id="login-id"
                type="text"
                className={styles.login__input}
                placeholder="아이디를 입력하세요"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            
            <div className={styles.login__form__2}>
              <label htmlFor="login-pw" className={styles.login__label}>
                비밀번호
              </label>
              <input
                id="login-pw"
                type="password"
                className={styles.login__input}
                placeholder="비밀번호를 입력하세요"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
              />
            </div>

            <button type="submit" className={styles.login__button}>
              로그인
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;