import axios from '../../../config/axiosInstance';
import { REGISTER_EMPLOYEE } from '../constants/endpoints';

export const getOptions = () => axios.get('/line/line_data_values').then(({ data }) => data);

export const getSearchPhoneLines = (phone) =>
  axios.get(`line/search_line/${phone}`).then((data) => data);

export const postSubmitPhoneLine = (params) =>
  axios.post(`/line/register_line/${params.line}`, params).then((data) => data);

export const postSubmitPhoneLinePerEmployee = (params) =>
  axios.post(`${REGISTER_EMPLOYEE}/${params.line}`, params).then((data) => data);
