import axios from 'axios';

const apiLogin = axios.create({
  baseURL: 'https://hufs-meotsa-13th.store/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiLogin;
