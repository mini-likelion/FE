import axios from 'axios';

const api = axios.create({
    baseURL: 'https://thehotpotato.store/',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;