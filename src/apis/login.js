import api from './api';

export const login = async (username, password) => {
  const data = {
    'username': username,
    'password': password,
  };
  try {
    const response = await api.post('dj/login/', data);
    return response.data; // {access, user(정보)} 로 받아야 함.
  } catch (error) {
    console.log('에러', error);
  }
};
