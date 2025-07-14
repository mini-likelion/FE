import styles from './registerPage.module.css';
import { useState } from 'react';
import { register } from '../../apis/register';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [userName, setUserName] = useState('');
  const [password1, setPassWord1] = useState('');
  const [password2, setPassWord2] = useState('');
  const [nickName, setNickName] = useState('');

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    const result = await register(userName, password1, password2, nickName);
    if (result) {
      alert('회원가입완료');
      Navigate('/login');
    }
  };

  return (
    <section className={styles.register__container}>
      <div className={styles.register__wrapper}>
        <div className={styles.register__title}>회원가입</div>
        <form className={styles.register__from} onSubmit={handleSubmit}>
          <input
            className={styles.register__input}
            type="text"
            placeholder="아이디"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <input
            className={styles.register__input}
            type="text"
            placeholder="닉네임"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            required
          />

          <input
            className={styles.register__input}
            type="password"
            placeholder="비밀번호"
            value={password1}
            onChange={(e) => setPassWord1(e.target.value)}
            required
          />
          <input
            className={styles.register__input}
            type="password"
            placeholder="비밀번호 확인"
            value={password2}
            onChange={(e) => setPassWord2(e.target.value)}
            required
          />
          <button className={styles.register__btn} type="submit">
            가입하기
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
