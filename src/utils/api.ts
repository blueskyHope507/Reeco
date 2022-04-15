import axios from 'axios';

export const api = {
  get: <T>(url: string, params?: object) =>
    axios.get<T>(url, {
      ...params
    }),
  post: <T>(url: string, data: object) => axios.post<T>(url, data)
};
