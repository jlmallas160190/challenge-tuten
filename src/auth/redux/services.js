import { createAxios } from 'config/axiosInstance';

const axiosInstance = createAxios;
export const autenticate = (params) => axiosInstance(params).then(({ data }) => data);
