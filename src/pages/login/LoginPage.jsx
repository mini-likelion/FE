import styles from './loginPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  };
  return (
    <section className={styles.login__container}>
      <div className={styles.login__wrapper}>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="아이디를 입력하시오."
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="비밀번호를 입력하시오"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
            required
          />
          <button type="submit">로그인</button>
        </form>
        <Link to="/registr">
          <button className="registerBtn">회원가입</button>
        </Link>
      </div>
    </section>
  );
};

export default LoginPage;
