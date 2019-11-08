import axios from 'axios';

const API_URL = 'http://92.222.92.112:8000/api/';

export default axios.create({
  baseURL: API_URL,
  responseType: 'json'
});
