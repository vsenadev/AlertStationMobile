import axios from 'axios';

const http = axios.create({
  baseURL: 'http://alert-station-backend.vercel.app/api/',
});

export default http;
