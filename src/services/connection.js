import axios from 'axios';

const connection = axios.create({
  baseURL: 'https://api.github.com',
});

export default connection;
