import api from './api';

export const login = (username, password) => {
  const data = {
    'username': username,
    'password': password,
  };
  try {
    const response = api.post('dj/login/', data);
    return response.data; // {access, user(정보)} 로 받아야 함.
  } catch (error) {
    console.log('에러', error);
  }
};
