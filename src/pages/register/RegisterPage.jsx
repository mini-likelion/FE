import styles from './registerPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContextProvider';

const RegisterPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [cpw, setCpw] = useState('');
  const [nick, setNick] = useState('');
  const { register } = useContext(LoginContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(id, pw, cpw, nick);
      alert('회원가입 성공');
    } catch (error) {
      console.log(error);
      alert('회원가입 실패');
    }
  };

  return (
    <section className={styles.register__container}>
      <div className={styles.register__whole__wrapper}>
        <h1 className={styles.register__title}>회원가입</h1>
        <div className={styles.register__wrapper}>
          <form className={styles.register__form} onSubmit={handleRegister}>
            <div className={styles.register__form__1}>
              <label htmlFor="register-id" className={styles.register__label}>
                아이디
              </label>
              <input
                id="register-id"
                type="text"
                className={styles.register__input}
                placeholder="아이디를 입력하세요"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>

            <div className={styles.register__form__2}>
              <label htmlFor="register-pw" className={styles.register__label}>
                비밀번호
              </label>
              <input
                id="register-pw"
                type="password"
                className={styles.register__input}
                placeholder="비밀번호를 입력하세요"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
              />
            </div>

            <div className={styles.register__form__3}>
              <label htmlFor="register-cpw" className={styles.register__label}>
                비밀번호 확인
              </label>
              <input
                id="register-cpw"
                type="password"
                className={styles.register__input}
                placeholder="비밀번호를 다시 입력하세요"
                value={cpw}
                onChange={(e) => setCpw(e.target.value)}
              />
            </div>

            <div className={styles.register__form__4}>
              <label htmlFor="register-nick" className={styles.register__label}>
                닉네임
              </label>
              <input
                id="register-nick"
                type="text"
                className={styles.register__input}
                placeholder="닉네임을 입력하세요"
                value={nick}
                onChange={(e) => setNick(e.target.value)}
              />
            </div>

            <button type="submit" className={styles.register__button}>
              회원가입
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
