// src/services/api.js

import axios from 'axios';

var API_URL = 'https://groundzeromorocco-9a1ff9b5db52.herokuapp.com';
if(process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:3001';
}

const api = axios.create({
  baseURL: API_URL
});

export default api;