import moment from 'moment';

export const isUserLoggedIn = () => !!localStorage.getItem('sessionInfo');
export const getUserLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem('sessionInfo'));
  return user || {};
};
export const setUserLoggedIn = (user) => {
  localStorage.setItem('sessionInfo', JSON.stringify(user));
};
export const userLogout = () => {
  localStorage.removeItem('sessionInfo');
};

export const formatToDate = (timeInMillis, dateFormat) => {
  const format = dateFormat || 'YYYY-MM-DD';
  return moment(timeInMillis).local().format(format);
};
