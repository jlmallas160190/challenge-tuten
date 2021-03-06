import { createAxios } from 'config/axiosInstance';

const axiosInstance = createAxios;
export const autenticateService = (params) => axiosInstance({
  ...params,
  headers: {
    app: process.env.REACT_APP_TUTEN_APP,
    password: params.password,
  },
}).then(({ data }) => data);
