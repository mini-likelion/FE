import api from './api';

export const login = (username, password) => {
  const data = {
    'username': username,
    'password': password,
  };
  try {
    api.post('dj/login/', data);
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
  api.post('/dj/registration', data);
};
