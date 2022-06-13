import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_EXTERNAL_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
