import api from './api';
import apiLogin from './apiLogin';

export const login = async (username, password) => {
  const data = {
    'username': username,
    'password': password,
  };
  try {
    const response = await apiLogin.post('dj/login/', data);
  } catch (error) {
    console.log('에러', error);
  }
};

export const register = async (username, password1, password2, nickname) => {
  const data = {
    'username': username,
    'password1': password1,
    'password2': password2,
    'nickname': nickname,
  };
  apiLogin.post('/dj/registration', data);
};
