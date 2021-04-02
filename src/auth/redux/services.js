import axios from 'axios';

export const autenticateService = (params) => {
  const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}/TutenREST/rest`,
    headers: {
      app: process.env.REACT_APP_TUTEN_APP,
      password: params.password,
    },
  });
  return axiosInstance(params).then(({ data }) => data);
};
