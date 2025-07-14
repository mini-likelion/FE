import axios from 'axios';
const api = axios.create({
  baseURL: 'http://43.200.28.219:1313',
});

export default api;
