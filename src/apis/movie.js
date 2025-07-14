import api from './api.js';

export const movieList = async () => {
  const response = await api.get('/movies/');
  const movies = response.data.map((movie) => ({
    ...movie,
    poster_url: movie.poster_url.startsWith('http') ? movie.poster_url : `${api.defaults.baseURL}${movie.poster_url}`,
  }));

  return response;
};
