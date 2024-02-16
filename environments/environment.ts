import axios from 'axios';

const http = axios.create({
  baseURL: 'https://alert-station-backend.vercel.app/api/',
});

export default http;
