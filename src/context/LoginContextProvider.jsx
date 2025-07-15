import { useState, createContext } from 'react';
import Cookies from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom';

import * as auth from '../apis/auth';

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false); // 로그인 여부
  const [userInfo, setUserInfo] = useState({}); // 코멘트에 쓸 정보
  const Navigate = useNavigate();

  // 로그아웃
  const logout = () => {
    logoutSetting();
    Navigate('/');
  };

  // 로그인
  const login = async (username, password) => {
    const response = await auth.login(username, password);
    const data = response.data;
    const status = response.status;

    const user = data.user;
    const access = data.access; // jwt 현재 암호화

    if (status === 200) {
      //로그인 되었으면 세팅으로 상태값 변경
      loginSetting(access, user);
      Navigate('/');
    }
  };

  // 로그인 세팅 -> 로그인 되었을 때, state들을 어떻게 바꾸는지
  const loginSetting = (access, user) => {
    // 로그인 응답 데이터 분해
    const { id, username, password, nickname } = user;

    // 세팅1) axios객체 header에 jwt넣기
    // api.defaults.headers.common.Authorization = `Bearer ${access}`; -> 그냥 바디에 넣자.

    // 세팅2) 로그인 여부 : true
    setLogin(true);

    // 세팅3) 유저정보 세팅 -> 코멘트에 사용
    setUserInfo({ id, username, password, nickname });

    // 세팅4) 쿠키에 jwt 저장
    Cookies.set('access', access);
  };

  // 로그아웃 세팅 (반대로 하자)-> 로그아웃 되었을 때, state들을 어떻게 바꾸는지
  const logoutSetting = () => {
    // api.defaults.headers.common.Authorization = undefined;
    setLogin(false);
    setUserInfo(null);
    Cookies.remove('access');
  };

  // 로그인 체크 -> 쿠키에 JWT있는지 확인 -> 권한 인증 -> 코멘트 권한
  const loginCheck = async () => {
    try {
      // 쿠키에서 JWT 가져오기
      const jwt = Cookies.get('access');

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
    <LoginContext.Provider value={{ isLogin, userInfo, login, logout, loginSetting, logoutSetting, loginCheck }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
