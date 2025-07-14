import api from './api.js';

export const movieList = async () => {
  const response = await api.get('/movies/list/');
  return response;
};
