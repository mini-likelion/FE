import api from './api.js';

export const movieList = async () => {
    const response = await api.get('/movies/');
    return response;
};

export const movieDetail = async (id) => {
    const response = await api.get(`/movies/${id}/`);
    return response.data;
};
