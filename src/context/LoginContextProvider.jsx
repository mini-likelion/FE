import { useState, createContext } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import apiLogin from '../apis/apiLogin';

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false); // 로그인 여부
  const [userInfo, setUserInfo] = useState({}); // 코멘트에 쓸 정보
  const navigate = useNavigate();

  // 로그아웃
  const logout = () => {
    logoutSetting();
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  // 로그인
  const login = async (username, password) => {
    const info = {
      'username': username,
      'password': password,
    };
    const response = await apiLogin.post('dj/login/', info);

    const data = response.data;
    const user = data.user;
    const access = data.access; // jwt 현재 암호화
    //로그인 되었으면 세팅으로 상태값 변경
    loginSetting(access, user);
    loginCheck();
    navigate('/');
  };

  //회원가입
  const register = async (username, password1, password2, nickname) => {
    const info = {
      'username': username,
      'password1': password1,
      'password2': password2,
      'nickname': nickname,
    };
    try {
      const response = await apiLogin.post('/dj/registration/', info);
      console.log(response.data.user);
      navigate('/login');
    } catch (error) {
      console.log('에러', error);
      console.log('상세:', error.response?.data);
    }
  };

  // 로그인 세팅 -> 로그인 되었을 때, state들을 어떻게 바꾸는지
  const loginSetting = (access, user) => {
    // 로그인 응답 데이터 분해
    const { id, nickname } = user;

    // 세팅1) axios객체 header에 jwt넣기
    // api.defaults.headers.common.Authorization = `Bearer ${access}`; -> 그냥 바디에 넣자.

    // 세팅2) 로그인 여부 : true
    setLogin(true);

    // 세팅3) 유저정보 세팅 -> 코멘트에 사용
    setUserInfo({
      'id': id,
      'nickname': nickname,
    });

    // 세팅4) 쿠키에 jwt 저장
    Cookies.set('access', access);
  };

  // 로그아웃 세팅 (반대로 하자)-> 로그아웃 되었을 때, state들을 어떻게 바꾸는지
  const logoutSetting = () => {
    // api.defaults.headers.common.Authorization = undefined;
    setLogin(false);
    setUserInfo({});
    Cookies.remove('access');
  };

  // 로그인 체크 -> 쿠키에 JWT있는지 확인 -> 권한 인증 -> 코멘트 권한
  const loginCheck = async () => {
    try {
      // 쿠키에서 JWT 가져오기
      const jwt = Cookies.get('access');
      console.log(jwt);

      if (jwt) {
        console.log('로그인 상태입니다.');
        return true; // 로그인 상태
      } else {
        console.log('로그아웃 상태입니다.');
        return false; // 비로그인 상태
      }
    } catch (error) {
      console.error('로그인 상태 확인 중 오류:', error);
      return false;
    }
  };

  return (
    <LoginContext.Provider
      value={{ isLogin, userInfo, login, register, logout, loginSetting, logoutSetting, loginCheck }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
