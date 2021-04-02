import axios from 'axios';
import { getUserLoggedIn } from 'base/utils/helpers';

export const createAxios = axios.create({});

createAxios.interceptors.request.use(
  async (config) => {
    const newConfig = config;
    newConfig.headers.Authorization = getUserLoggedIn() || '';
    return newConfig;
  },
  (error) => Promise.reject(error),
);

createAxios.interceptors.response.use((config) => config);
export const createAxiosWithoutHeaders = axios.create({});
