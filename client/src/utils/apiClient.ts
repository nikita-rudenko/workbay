import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
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
