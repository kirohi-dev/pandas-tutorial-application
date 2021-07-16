import axios, { AxiosInstance } from 'axios';
import { HttpError } from './HTTPError';

export type IHTTP  = AxiosInstance;

axios.interceptors.response.use(
  response => response,
  async error => {
    if (axios.isAxiosError(error)) {
      return Promise.reject(new HttpError(error.message, error.code || '500'))
    }
    return Promise.reject(new HttpError('エラーが発生しました', '500'));
  }
);

export { axios as HTTP };
