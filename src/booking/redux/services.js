import { createAxios } from 'config/axiosInstance';

const axiosInstance = createAxios;
export const getBookings = (params) => axiosInstance({
  ...params,
  headers: {
    app: process.env.REACT_APP_TUTEN_APP,
    token: params.token,
    adminemail: params.email,
  },
}).then(({ data }) => data);
