import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-demoro.onrender.com'
});

export default api;
