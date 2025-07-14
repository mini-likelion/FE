import api from './api';

export const register = async (username, password1, password2, nickname) => {
  const data = {
    'username': username,
    'password1': password1,
    'password2': password2,
    'nickname': nickname,
  };
  const response = await api.post('/dj/register/', data);
  return response.data.user;
};
