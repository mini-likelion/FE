import styles from './loginPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../../apis/login';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const Navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { access, user } = await login(userName, passWord);
      alert(`${user.nickname}님 환영합니다.`);
      Navigate('/');
      // 여기에 토큰에서 jwt넣고, 유저 상태 업데이트 해야 함.
    } catch (error) {
      alert('로그인 실패! 아이디와 비밀번호를 확인하세요.');
    }
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