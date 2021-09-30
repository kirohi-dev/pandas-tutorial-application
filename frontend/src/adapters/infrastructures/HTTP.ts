import axios, { AxiosInstance } from 'axios';
import { HttpError } from './HTTPError';

export type IHTTP  = AxiosInstance;


const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.response.use(
  response => response,
  async error => {
    if (axios.isAxiosError(error)) {
      return Promise.reject(new HttpError(error.message, error.code || '500'))
    }
    return Promise.reject(new HttpError('エラーが発生しました', '500'));
  }
);

export { instance as HTTP };
