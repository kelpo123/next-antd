import axios from 'axios';
import envs from '@/constants/envs';
export const api = axios.create({
  baseURL: envs.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
