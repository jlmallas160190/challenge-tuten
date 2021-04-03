import axios from 'axios';

export const createAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}/TutenREST/rest`,
});

createAxios.interceptors.request.use(
  async (config) => {
    const newConfig = config;
    return newConfig;
  },
  (error) => Promise.reject(error),
);
