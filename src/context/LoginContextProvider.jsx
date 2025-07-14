import { useState, useEffect, createContext } from 'react';

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [roles, setRoles] = useState({ isUser: false, isAdmin: false });

  useEffect(() => {}, []);

  return <LoginContext.Provider value={{ isLogin, setLogin }}>{children}</LoginContext.Provider>;
};

export default LoginContextProvider;
