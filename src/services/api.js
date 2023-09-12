// src/services/api.js

import axios from 'axios';

var API_URL = 'https://groundzeromorocco-9a1ff9b5db52.herokuapp.com';
//var API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL
});

export default api;