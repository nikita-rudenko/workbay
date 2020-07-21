import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

const apiRequest = (config: AxiosRequestConfig) =>
  api(config).then(
    (response) => response.data,
    (error) =>
      Promise.reject(
        error.response ? error.response : { data: '', status: 404 }
      )
  );

export default apiRequest;
