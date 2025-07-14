import styles from './loginPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../../apis/login';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const Navigate = useNavigate();

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
      <div className={styles.login__wrapper}>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="아이디를 입력하시오."
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="비밀번호를 입력하시오"
            value={passWord}
            onChange={(e) => {
              setPassWord(e.target.value);
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
